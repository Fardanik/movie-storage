import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import MovieList from "./comp/MovieList";
import Search from './comp/Search';
import Upcoming from "./comp/Upcoming";
import Movie from "./Movie";
import './style.css';
import Form from "./comp/Form";
import Popul from "./comp/Popul"


function App() {
  return (
    <div className="main">
      <div className="container">

        <BrowserRouter>

          <header>
            <Link to="/" className="logo">
              Movie Storage
            </Link>
            <div className="links">
              <Link to="/">Фильмы сейчас</Link>
              <Link to="/up">Скоро выйдут</Link>
              <Link to="/pop">Популярные фильмы</Link>
            </div>
            <div className="search">
              <Form/>
            </div>
          </header>

          <Switch>
            <Route path="/up">
              <Upcoming/>
            </Route>
            <Route exact path="/">
              <MovieList/>
            </Route>
            <Route path="/pop">
              <Popul/>
            </Route>
            <Route path="/movie/:id">
              <Movie/>
            </Route>
            <Route path="/search/:q">
              <Search/>
            </Route>
          </Switch>
          <footer>
              Created by Fardan
            </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
 