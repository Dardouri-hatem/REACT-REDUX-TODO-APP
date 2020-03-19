import React, { Component } from "react";
import "./ToDoStyle.css";
import ToDo from "./ToDo";
import { connect } from 'react-redux'
import { addTask } from "../actions/actionToDo";

class FormToDo extends Component {
  state = {
    input: "",
  };

  handleUpdateInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleAddItem = e => {
    e.preventDefault()
    this.state.input &&
      this.props.addTask({txt:this.state.input , done:false, edit:false})
      this.setState({
        input: ''
      });
  };

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleAddItem} >
          <h1>To-Do App!</h1>
          <h3>add new To-Do</h3>
          <input
            className="txt"
            type="text"
            value={this.state.input}
            placeholder="Enter new task"
            onChange={this.handleUpdateInput}
          />
          <button id="add-btn" onClick={this.handleAddItem}>
            Add
          </button>
        </form>
        <p className="paragraph">Let's get some work done</p>



        <ToDo/>
      </div>
    );
  }
}
const mapDispachToProps=(dispatch)=>{
  return {addTask:(payload)=>dispatch(addTask(payload)),
  }
}


export default connect(null,mapDispachToProps)(FormToDo);
