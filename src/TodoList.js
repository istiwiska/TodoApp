import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
 
class TodoList extends Component {
  constructor(props){
      super(props)
      this.state = {
          items : [],
          total : 0
        }
      this.addItem = this.addItem.bind(this)
      this.deleteItem = this.deleteItem.bind(this)
      this.deleteAll = this.deleteAll.bind(this)
  }
  
  addItem(e){
        if(this._inputElement.value !== ""){
            var newItem = {
                text : this._inputElement.value,
                key  : Date.now()
            }
            this.setState((prevState) => {
                return {
                    items : prevState.items.concat(newItem),
                    total : this.state.total+1
                }
            })
            console.log(this.state.items)
            console.log(this.state.total)
            this._inputElement.value = ""
        }else{
            alert("Task tidak boleh kosong")
        }
        e.preventDefault()
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems,
      total : this.state.total-1
    });
  }

  deleteAll(e){
      this.setState({
          items : [],
          total : 0
      })
      e.preventDefault()
  }
    
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit = {this.addItem}>
            <input ref={(a) => this._inputElement = a} 
                    placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <h3>Total TodoList {this.state.total}</h3>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
        <div className ="footer">
            <button onClick={this.deleteAll}>Delete All</button>
        </div>
      </div>
    );
  }
}
 
export default TodoList;