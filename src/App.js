import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations';
import React, {useState} from 'react'


function App() {

  const [searchTerm, setSearchTerm] = useState("search for movie title here")
  const [nomsList, setNomsList] = useState([])
  const movies = [{title: "Captain Marvel" , year: 2019},
                    {title: "Black Widow" , year: 2021},
                    {title: "Age of Ultron", year: 2015}]

  function nominateMovie(title, year){
    setNomsList(previousNoms => [
        ...previousNoms,
        {title: title,
        year: year}
      ])
  }


  return (
    <div className="app-container">
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Results searchTerm={searchTerm} movieList={movies} nominateMovie={nominateMovie}/>
      <Nominations nomsList={nomsList}/>

    </div>
  );
}

export default App;
