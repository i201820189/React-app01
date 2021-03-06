import  { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { todos } from './todos.json';

class App extends Component {

  constructor() {
    super();
    this.state= {
      todos
    }
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return(
        <div className="col-md-4">
           <div className="card mt-4">
              <div className="card-header">
                <h3>{todo.title}</h3>
                <span className="badge bg-danger ml-2">
                  {todo.priority}
                </span>
              </div>
              
              <div className="card-body">
                <p>{todo.description}</p>
              </div>
     
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <header>

          <nav className="navbar navbar-dark bg-dark">
            <a href="#" className="text-white">
              Task
            </a>
          </nav>

          <div className="container">
            <div className="row mt-4">
              { todos }
            </div>
          </div>

          <img src={logo} className="App-logo" alt="logo" />
  
        </header>
      </div>
    );
  }
}

export default App;
