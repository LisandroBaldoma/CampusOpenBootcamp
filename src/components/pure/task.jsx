import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Models
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, completed, removed }) => {
  useEffect(() => {
    console.log("Tarea creada");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  /**
   * FUNCTION THAT RETURNS A bADGE DEPENDING ON THE LEVEL OF THE TASK
   */

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="MB-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6 className="MB-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6 className="MB-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

  /**
   * Function that return icon dependindg on completion of the task
   */
  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-on task-action"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => completed(task)}
          className="bi-toggle-off task-action"
          style={{ color: "grey" }}
        ></i>
      );
    }
  }

  const taskCompleted = {
    color: "gray",
    textDecoration: "line-through",
    fontWeight: "bold",
  };
  const taskPending = {
    color: "tomato",
    fontWeight: "bold",
  };

  return (
    <tr
      className="fw-normal"
      style={task.completed ? taskCompleted : taskPending}
    >
      <th>
        <span className="m-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/*Execution of function to badge element*/}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
        {/*TODO: Sustituir por un Icono*/}
        {taskCompletedIcon()}
        <i
          onClick={() => {
            removed(task);
          }}
          className="bi-trash task-action"
          style={{ color: "tomato" }}
        ></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  completed: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
};

export default TaskComponent;
