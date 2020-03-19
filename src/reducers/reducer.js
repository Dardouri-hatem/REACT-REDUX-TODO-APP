import {ADD_TASK,DELETE_TASK,COMPLETE_TASK, EDIT_TASK, CHANGE_TASK} from "../actions/actiontypes";


const initialeState = {
  todoList: []
};

const Reducer = (state = initialeState.todoList, action) => {
const newState=[...state]
  switch (action.type) {
    case ADD_TASK:
        return newState.concat(action.payload)

    case DELETE_TASK:
        return newState.filter((task,i)=>i!==action.payload) 

    case COMPLETE_TASK : 
        return newState.map((task,i)=> i===action.payload? {...task,done:!task.done}:task) 
    case EDIT_TASK : 
        return newState.map((task,i)=> i===action.payload?{...task,edit:!task.edit}:task)
    case CHANGE_TASK:
        return newState.map((task,i)=> i===action.index?{...task,txt:action.payload}:task)


        default:
        return state;
  }
};
export default Reducer;
