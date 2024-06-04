import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BookSearchPage from './BookSearchPage';
import BookshelfPage from './BookshelfPage';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Book Search</Link>
          </li>
          <li>
            <Link to="/bookshelf">My Bookshelf</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/bookshelf">
          <BookshelfPage />
        </Route>
        <Route path="/">
          <BookSearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;