import React, { Component } from "react";
import "./ToDoStyle.css";
import { connect } from "react-redux";
import {
  deleteTask,
  completeTask,
  editTask,
  changeTask
} from "../actions/actionToDo";

class ToDo extends Component {


  handleDelete = i => {
    this.props.deleteTask(i);
  };

  handleComplete = i => {
    this.props.completeTask(i);
  };
  handleEdit = i => {
    this.props.editTask(i);
  };
  updatetask = (i,e) => {
    console.log(e.target.value);
    this.props.changeTask(e.target.value,i);
  };

  render() {
    return (
      <div className="list-todo">
        <ul className="to-do">
          {this.props.todoList.map((currentItem, i) => (
            <li key={i}>
              <button
                className="complete-btn"
                onClick={() => this.handleComplete(i)}
              >
                {currentItem.done ? " Undo " : " Complete "}
              </button>
              <button
                className="delete-btn"
                onClick={() => this.handleDelete(i)}
              >
                Delete
              </button>
              {currentItem.edit ? (
                <input
                  className="update-item"
                  value={currentItem.txt}
                  onChange={(e) => this.updatetask(i, e)}
                ></input>
              ) : (
                <span className={currentItem.done ? "item text-line" : "item"}>
                  {currentItem.txt}
                </span>
              )}
              <button className='complete-btn' onClick={() => this.handleEdit(i)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// redux
const mapStateToProps = state => {
  return {
    todoList: state
  };
};

const mapDispachToProps = dispatch => {
  return {
    deleteTask: payload => dispatch(deleteTask(payload)),
    completeTask: payload => dispatch(completeTask(payload)),
    editTask: payload => dispatch(editTask(payload)),
    changeTask: (payload, index) => dispatch(changeTask(payload, index))
  };
};

export default connect(mapStateToProps, mapDispachToProps)(ToDo);
