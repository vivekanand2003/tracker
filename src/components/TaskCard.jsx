import { formatDue } from "../utils/dateUtils";

export default function TaskCard({task,setDrag}){
  return (
    <div className="card"
      draggable
      onDragStart={()=>setDrag(task)}
    >
      <div>{task.title}</div>

      <div className="row">
        <span className={`badge ${task.priority}`}>{task.priority}</span>
        <span>{formatDue(task.dueDate)}</span>
      </div>

      <div className="avatarRow">
        <div className="avatar">{task.assignee}</div>
      </div>
    </div>
  );
}