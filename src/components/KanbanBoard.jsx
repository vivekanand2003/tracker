import { useState } from "react";
import TaskCard from "./TaskCard";

const cols=["todo","progress","review","done"];

export default function KanbanBoard({tasks,setTasks}){
  const [drag,setDrag]=useState(null);

  const drop=(status)=>{
    if(!drag) return;
    setTasks(prev=>prev.map(t=>t.id===drag.id?{...t,status}:t));
    setDrag(null);
  };

  return (
    <div className="kanban">
      {cols.map(col=>(
        <div key={col}
          className="column"
          onDragOver={(e)=>e.preventDefault()}
          onDrop={()=>drop(col)}
        >
          <h3>{col} ({tasks.filter(t=>t.status===col).length})</h3>

          {tasks.filter(t=>t.status===col).length===0 && (
            <div className="empty">No tasks</div>
          )}

          {tasks.filter(t=>t.status===col).map(t=>(
            <TaskCard key={t.id} task={t} setDrag={setDrag}/>
          ))}
        </div>
      ))}
    </div>
  );
}