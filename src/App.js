import React from 'react';
import { BrowserRouter as Router, Link,Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Show from './components/Show';
import Edit from './components/Edit'

class App extends React.Component{
  render(){
    return(
      <div className="ui container">
        <Router>
          <div class="ui menu">
            <a class="item"><Link to="/">Home</Link></a>
            <a class="item"><Link to="/create">Create</Link></a>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/create" component={Create}/>
            <Route path="/show/:id" component={Show}/>
            <Route path="/edit/:id" component={Edit}/>
          </Switch>
        </Router>
      </div>
    )
  }
}



export default App;
