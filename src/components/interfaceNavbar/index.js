import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './navbar.css'

export default class InterfaceNavbar extends Component {
  constructor(props){
    super(props);
    this.state={activeItem:"", postText:''};
  }

  togle = (e,{name}) => {
    this.setState({activeItem:{name}});
    this.props.togleCompleted();
  }
  render() {
    let userID = window.location.pathname.split('/')[2];
    if (userID === undefined) userID = 'User';

    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          className="viewTogle"
          name='showCompleted'
          position="left"
          active={activeItem === 'showCompleted'}
          onClick={this.togle}
        >
        {!this.props.showCompleted ? 'Showing active' : 'Showing all'}

        </Menu.Item>
        <Menu.Menu position='right' className="todoInput">
          <div className='ui right aligned category search item todoInput'>
            <div className='ui transparent icon input todoInput'>
              <input className='prompt' id='inputText' name="todoText" type='text' placeholder='Todo name...'
                onKeyUp= {(e) => {
                  if(e.key ==='Enter') {
                    this.props.createTodo({text:this.state.postText, userID:userID})
                    document.getElementById('inputText').value = ''
                  }
                }}
                onChange={(e)=>this.setState({postText:e.target.value})}
              />
            </div>
          </div>
          <i className='right arrow link icon submit'

            onClick= {() =>{
              this.props.createTodo({text:this.state.postText, userID:userID})
              document.getElementById('inputText').value = '' }}
          />
        </Menu.Menu>


      </Menu>
    )
  }
}
