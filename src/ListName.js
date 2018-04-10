import React, { Component } from 'react';

class ListName extends Component{
    render(){
      var styles = {
        listGroup: {
          margin: '5px 0'
        },
        removeList: {
          fontSize: 20,
          position: "absolute",
          top: 12,
          left: 6,
          cursor: "pointer",
          color: "rgb(222, 79, 79)",
          border: "none",
          background: "none",
          padding: 0
        },
        todoList: {
          paddingLeft: 20,
          fontSize: 17
        }
      };

      var listNames = this.props.items.map((item, index) => {
        return (
          <li key={index} className="list-group-item" style={styles.listGroup}>
            <button
              className="glyphicon glyphicon-remove"
              style={styles.removeList}
              onClick={this.props.remove}
            />
            <span style={styles.todoList}>
              {item}
                <span className="badge">14</span>
            </span>
          </li>
        )
      });
  
  
      return (
        <div className="col-sm-12">
            <ul className="list-group">
                    {listNames}
            </ul>
        </div>
      )
    }
  };
  
  export default ListName;