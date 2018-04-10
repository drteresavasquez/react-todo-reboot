import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';
import base from './base';

class App extends Component {
  state = {
      list: [],
      loading: true,
      listName: "to-do-react"
    };

  componentDidMount() {
    let whichList = this.state.listName
    this.ref = base.syncState( whichList, {
      context: this,
      state: 'list',
      asArray: true,
      then() {
        this.setState({ loading: false });
      }
    });
  }

  handleAddItem = (newItem) => {
    this.setState({
      list: this.state.list.concat([newItem])
    });
  }
  
  handleRemoveItem = (index) => {
    //the react way: Make a copy of state, modify, and then set new state
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
    //Using firebase, must update via setState for the sync to work
    //if deleting from array (not attached to FB, can use delete)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <div className="col-sm-12">
              <h3 className="text-center"> My Todo List </h3>
              <AddItem add={this.handleAddItem} />
              {this.state.loading === true
                ? <h3> LOADING... </h3>
                : <List
                    items={this.state.list}
                    remove={this.handleRemoveItem}
                  />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;