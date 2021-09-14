import {Route, Switch} from'react-router-dom'
import GlobalLoadingSpinner from './components/GlobalLoadingSpinner';
import AllMoviesByGenre from './pages/AllMoviesByGenre';
import Home from "./pages/Home";
import Navigation from "./pages/partials/Navigation";
import MovieDetailsPage from './pages/MovieDetailsPage'
import PersonPage from './pages/PersonPage'
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <>
    <div id="App">
      <Navigation/>
      <GlobalLoadingSpinner />

      <Switch>
      <Route exact path="/">
        <Home />       
      </Route>

      <Route path="/movie/:movie_id">
        <MovieDetailsPage  />
      </Route>

      <Route  path="/movies/genres/:genre_id">    
        <AllMoviesByGenre />   
      </Route>

      <Route  path="/person/:person_id">    
        <PersonPage /> 
      </Route>

      <Route>
        <NotFoundPage />
      </Route>

    </Switch>
    </div>
    </>
  );
}

export default App;
