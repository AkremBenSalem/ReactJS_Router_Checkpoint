import './App.css';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import React , {useState} from 'react'
import MoviePage from './components/MoviePage';
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
      rate: 5,
      trailer: "https://www.youtube.com/embed/ZQ6klONCq4s",
      id:1,
    },
    {
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
      rate: 5,
      trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
      id:2,
    },
    {
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
      rate: 4,
      trailer: "https://www.youtube.com/embed/sY1S34973zA",
      id:3,
    },
    {
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rate: 3,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
      id:4,
    },
    {
      title: "12 Angry Men",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      rate: 4,
      trailer: "https://www.youtube.com/embed/2L4IhbF2WK0",
      id:5,
    },
    {
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rate: 4,
      trailer: "https://www.youtube.com/embed/gG22XNhtnoY",
      id:6,
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
      rate: 3,
      trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY",
      id:7,
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
      rate: 4,
      trailer: "https://www.youtube.com/embed/r5X-hFf6Bwo",
      id:8,
    },
    {
      title: "The Good, the Bad and the Ugly",
      description:
        "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      posterUrl:
        "https://cdn.hmv.com/r/w-1280/hmv/files/33/3385d6d7-570c-4baa-b344-552f9b6147f5.jpg",
      rate: 4,
      trailer: "https://www.youtube.com/embed/WCN5JJY_wiA",
      id:9,
    },
    {
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      posterUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgTszE1phYg2G7H4RrgeSEssOw-Kpnh0Si-sF5pVQQrBXJ_6e",
      rate: 2,
      trailer: "https://www.youtube.com/embed/SUXWAEX2jlg",
      id:10,
    },
  ]);
  const addNewMovie = (themovie) =>{
    //dynamically add a movie ID for the new movie
    let movieID=movies[movies.length - 1].id + 1;
    //convert a normal youtube link to an embed link
    let embedConvert = themovie.trailer.substring(32);
    //check for short link
    if(themovie.trailer.includes("https://youtu.be/")){embedConvert = themovie.trailer.substring(17)}
    
    themovie.trailer = "https://www.youtube.com/embed/" + embedConvert;
    themovie.id = movieID; 
    setMovies([...movies, themovie])
  }
  const [rateFilter, setRateFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [moviePage, setMoviePage] = useState({});
  
  
  
  return (
    <div className="mainPage">
      <Router>
        <Route path="/" component = {() => <NavBar addNewMovie={addNewMovie} setRateFilter={setRateFilter} setSearchFilter={setSearchFilter}/>}/>
        <Switch>
        <Route path="/" exact component = {() => <MovieList movies={movies} rateFilter={rateFilter} searchFilter={searchFilter} setMoviePage={setMoviePage}/>}/>
        <Route path="/movie/:id" exact component = {() => <MoviePage movie={moviePage} />}/>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
