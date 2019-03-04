import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './navbar.css'

export default class InterfaceNavbar extends Component {
  constructor(props){
    super(props);
    this.state={activeItem:"", showForm:'false', postText:''};
  }

  togle = (e,{name}) => {
    this.setState({activeItem:{name}});
    this.props.togleCompleted();
  }
  showForm = (e,{name}) => {
    this.setState({showForm:!this.state.showForm});
  }
  render() {
    let userId = window.location.pathname.split('/')[2];
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
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
              <input className='prompt' name="todoText" type='text'
                placeholder='Todo name...' onChange={(e)=>this.setState({postText:e.target.value})} />

            </div>
          </div>
          <i className='right arrow link icon submit' onClick= {() => this.props.createTodo({text:this.state.postText, userID:userId})} />
        </Menu.Menu>


      </Menu>
    )
  }
}
