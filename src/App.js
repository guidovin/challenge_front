import React, { Component } from 'react';
import InterfaceNavbar from './components/interfaceNavbar';
import TodoList from './components/todoList';
import { Container, Header, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import './App.css'
class App extends Component {
  constructor(){
    super();
    this.state = {showCompleted:false, showTodoForm:false , todos:[]};
  };

  togleForm = () => this.setState({showTodoForm: !this.state.showTodoForm});
  togleCompleted = () => this.setState({showCompleted: !this.state.showCompleted});

  updateTodo = (todo) => {
    const newTodo = {
      ...todo,
      completed: !todo.completed,
    };
    fetch('http://localhost:4000/todos/' + todo.userID +'/'+ todo._id,{

      method:'PUT',
      mode:'cors',
      body:JSON.stringify(newTodo),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => this.setState({todos:res}))
    .catch(error => console.error('Error while updating todo from the browser client:', error));

  }

  deleteTodo = (todo) => {

    fetch('http://localhost:4000/todos/' + todo.userID +'/'+ todo._id,{
      method:'DELETE',
      mode:'cors',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => this.setState({todos:res}))
    .catch(error => console.error('Error while trying to delete todo from the browser client:', error));

  }

  createTodo = (todo) => {
    console.log(todo.text);
    const newTodo = {
      text: todo.text,
    };
    fetch('http://localhost:4000/todos/'+todo.userID,{
      method:'POST',
      mode:'cors',
      body:JSON.stringify(newTodo),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => this.setState({todos:res}))
    .catch(error => console.error('Error while trying to create todo from the browser client:', error));
  }

  render() {
    return (
      <Container style={{ margin: 20 , width:'75vw'}}>

        <Segment className="responsiveContainer" style={{ backgroundColor: 'rgb(227, 234, 249)', overflowY:'scroll'}}>
          <div className="titleContainer" style={{fontFamily:'Mosk', fontSize:'8em', height:'1.8em', color:'rgb(247, 180, 128)'}} >
            <p>To do app</p>
          </div>
          <InterfaceNavbar
            showCompleted= {this.state.showCompleted}
            togleCompleted= {this.togleCompleted.bind(this)}
            togleForm= {this.togleForm.bind(this)}
            createTodo= {this.createTodo.bind(this)}
          />
          <TodoList
            showCompleted= {this.state.showCompleted}
            todos= {this.state.todos}
            updateTodo= {this.updateTodo.bind(this)}
            deleteTodo= {this.deleteTodo.bind(this)}
          />
        </Segment>

      </Container>
    );
  }

  componentDidMount() {
    let userID = window.location.pathname.split('/')[2];
    fetch('http://localhost:4000/todos/'+userID)
    .then(res => {return res.json()})
    .then(todoList =>{this.setState({todos:todoList}); })
    .catch((err, res)=>{} )
  }
}
export default App;
