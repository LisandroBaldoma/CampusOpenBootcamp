import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskForm from "../pure/form/taskForm";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Example1",
    "Description 1",
    true,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Example2",
    "Description 2",
    false,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Example3",
    "Description 3",
    false,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);

  const [loading, setLoading] = useState(true);

  //control del ciclo de vida del componente

  useEffect(() => {
    console.log("Tarea modificada");
    setTimeout(() => {
      setLoading(false);
    }, 2000)
    
    return () => {
      console.log("TaskList component is going to unmount");
    };
  }, [tasks]);

  function completedTask(task) {
    console.log("Completed this task :", task);
    const indice = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[indice].completed = !tempTasks[indice].completed;
    // We update the state of the component with thw new list of task and it will update the
    // interation of the task in order to show the task update
    setTasks(tempTasks);
  }
  function deletedTask(task) {
    console.log("Deleted this task :", task);
    const indice = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(indice, 1);
    setTasks(tempTasks);
  }
  function addTask(task) {
    console.log("Add this task :", task);
    const indice = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col"> Title</th>
            <th scope="col"> Description</th>
            <th scope="col"> Priority</th>
            <th scope="col"> Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                completed={completedTask}
                removed={deletedTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let taskTable = <Table></Table>

  if(tasks.length > 0){
   taskTable = <Table></Table>
  }else{
    taskTable = (
    <div>
        <h3>No hay tareas para mostrar</h3>
        <h4>Por favor, crear una tarea</h4>
    </div>
    )
  }

  const loadingStyle = {
    color:'grey',
    fontSize:'30px',
    fontWeight:'bold',
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5>YourTask:</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ psition: "relative", heigh: "400px" }}
          ></div>
          {loading ? (<p style={loadingStyle}>Loadin Task...</p>) : taskTable}
          {/* TODO: ADD LOADING SPINER*/}
        </div>
        <TaskForm add={addTask} length={tasks.length}></TaskForm>
      </div>
    </div>
  );
};

export default TaskListComponent;
