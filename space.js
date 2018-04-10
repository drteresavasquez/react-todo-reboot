import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';
import base from './base';
import AddList from './AddList';
import ListName from './ListName';

class App extends Component {
  state = {
      list: [],
      loading: true,
      lists: [],
      listName: "Default"
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

  handleRemoveList = (index) => {
    //the react way: Make a copy of state, modify, and then set new state
    var newList = this.state.listName;
    newList.splice(index, 1);
    this.setState({
      listName: newList
    });
    //Using firebase, must update via setState for the sync to work
    //if deleting from array (not attached to FB, can use delete)
  }

  render() {
    return (
      <div className="container">
        <div className="col-sm-4 small-col">
            <div className="row">
            <div className="col-sm-12">
              <h3 className="text-center"> New List </h3>
              <AddList add={this.handleAddItem} />
              {this.state.loading === true
                ? <h3> LOADING... </h3>
                : <ListName
                    items={this.state.listName}
                    remove={this.handleRemoveList}
                  />}
              </div>
          </div>
          </div>  



          <div className="col-sm-7">   
        <div className="row">
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