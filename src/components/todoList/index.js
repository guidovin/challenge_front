import React from 'react';
import './todoList.css'
import { Button, Icon, Segment } from 'semantic-ui-react'

const TodoList = ({ todos , showCompleted, updateTodo, deleteTodo}) => {

  return(
    <div className="responsiveContainer">
      {
        todos ?
        todos.map((todo) => {

          if(!showCompleted){

            if(!todo.completed) return(
              <div className= "todo responsiveText">
                  <Segment className= "todoWrapper activeTodo">
                    <div className="todoTextWrapper">
                      <p>{todo.text}</p>
                    </div>
                    <div className= "buttonWrapper">
                      <Button className= "checkButton" position='right' animated style={{backgroundColor:'inherit'}} onClick= {() => updateTodo(todo)} >
                        <Button.Content visible>
                          <Icon name='check square outline large' />
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name='check square large' />
                        </Button.Content>
                      </Button>
                      <Button className= "deleteButton" animated style={{backgroundColor:'inherit'}} onClick= {() => deleteTodo(todo)}>
                        <div  style={{paddingRight: '15px',}}>
                          <i className="ui icon delete circle large"/>
                        </div>
                      </Button>
                    </div>
                  </Segment>
              </div>
            )
            return;
          }

          return(
            <div className= "todo">
              {
                todo.completed &&
                <Segment className= "todoWrapper inactiveTodo" >
                  <div className="todoTextWrapper">
                    <p>{todo.text}</p>
                  </div>
                  <div className= "buttonWrapper">
                    <Button className= "checkButton" position='right' animated style={{backgroundColor:'inherit'}} onClick= {() => updateTodo(todo)}>
                      <Button.Content visible>
                        <Icon name='check square large' />
                      </Button.Content>
                      <Button.Content hidden>
                        <Icon name='check square outline large' />
                      </Button.Content>
                    </Button>
                    <Button position='right' className= "deleteButton" animated style={{backgroundColor:'inherit'}} onClick= {() => deleteTodo(todo)}>
                      <div  style={{paddingRight: '15px'}}>
                        <i className="ui icon delete large"/>
                      </div>
                    </Button>
                  </div>
                </Segment>
              }
              {
                  !todo.completed &&
                  <Segment className= "todoWrapper activeTodo">
                    <div className="todoTextWrapper">
                      <p>{todo.text}</p>
                    </div>
                    <div className= "buttonWrapper">
                      <Button className= "checkButton" position='right' animated style={{backgroundColor:'inherit'}} onClick= {() => updateTodo(todo)}>
                        <Button.Content visible>
                          <Icon name='check square outline large' />
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name='check square large' />
                        </Button.Content>
                      </Button>
                      <Button animated className= "deleteButton"  style={{backgroundColor:'inherit'}} onClick= {() => deleteTodo(todo)} >
                        <div  style={{paddingRight: '15px'}}>
                          <i className="ui icon delete large"/>
                        </div>
                      </Button>
                    </div>
                  </Segment>
              }
            </div>
          )

        })
        : undefined

     }
    </div>
  )
}

export default TodoList;
