import logo from './logo.svg';
import './App.css';
import Main from './views/Main.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Router } from '@reach/router';
import AddMovie from "./views/AddMovie";
import OneMovie from "./views/OneMovie";
import UpdateMovie from "./views/UpdateMovie";




function App() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1>Fake IMDB</h1>
        <Link to="/">Home</Link>
        <Link to="/movies/new">Add Movie</Link>
      </div>
      <Router>
        <Main path="/"/>
        <AddMovie path="/movies/new"/>
        <OneMovie path="/movies/:_id" />
        <UpdateMovie path="/movies/update/:_id" />
      </Router>
      
    </div>
  );
}

export default App;
