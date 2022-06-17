import React from "react";
import { Levels } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../../pure/Task";

function TaskList() {
  const defaultTask = new Task(
    "Example",
    "Default description",
    false,
    Levels.normal
  );

  // changeState = (id) => {
  //   console.log("TODO : Cammbiar estado de una tarea");
  // };

  return (
    <div>
      <div>Your Tasks:</div>

      {/* TODO = APLICAR UN FOR/MAP PARA RENDERIZAR A UNA LISTA */}
      <TaskComponent task={defaultTask} />
    </div>
  );
}

export default TaskList;
