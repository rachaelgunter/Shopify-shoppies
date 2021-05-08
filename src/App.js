import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations';
import Banner from './components/Banner';
import React, {useState} from 'react'


function App() {

  

  const [searchTerm, setSearchTerm] = useState("")
  const [nomsList, setNomsList] = useState([])
  const [resultsList, setResultsList] = useState([])



  console.log('noms', nomsList)
  console.log('results', resultsList)


  function nominateMovie(title, year){
    setNomsList(previousNoms => [
        ...previousNoms,
        {title: title,
        year: year}
      ])
  }

  function removeMovie(title){
    const newNew = nomsList.filter(nom => nom.title !== title);
    setNomsList(newNew)
  }

 
  function addResult(title, year){
    setResultsList(previousResults => [
        ...previousResults,
        {title: title,
        year: year}
      ])
  }

  function omdbSearch() {
    fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=d6be079`)
    .then(r => r.json())
    .then(r => {
      console.log(r)
      addResult(r.Title, r.Year)
    })
  }

  function checkNomLength() {
    if (nomsList.length >= 5) {
      return true
    } else {
      return false
    }
  }


  return (
    <div className="app-container">
      <Header />
      {checkNomLength() ? <Banner />  : null}
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} omdbSearch={omdbSearch}/>
      <Results searchTerm={searchTerm} movieList={resultsList} nominateMovie={nominateMovie} nomsList={nomsList}/>
      <Nominations nomsList={nomsList} removeMovie={removeMovie}/>

    </div>
  );
}

export default App;
