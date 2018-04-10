import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddList extends Component{
  
  handleSubmit = (e) => {
    if(e.keyCode === 13){
      this.props.add(ReactDOM.findDOMNode(this.refs.newItem).value);
      ReactDOM.findDOMNode(this.refs.newItem).value = '';
    }
  }

  render(){
    return (
      <div className="col-sm-12 text-center">
        <input
          type="text"
          ref="newItem"
          className="form-control"
          placeholder="New List"
          onKeyDown={this.handleSubmit} />
      </div>

    )
  }
}

export default AddList;