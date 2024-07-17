import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/routes/Navigation.js';
import Blog from './components/blogPage/Blog.js';
import privacy from './components/politicsPage/privacy-policy.js';
import css from './css/privacy.css';
import { CSSProperties } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Blog} />
          <Route path="/privacy-policy" component={privacy-policy} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
