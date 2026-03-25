export default function Navbar({view,setView}){
  return (
    <div className="nav">
      <b>TaskFlow</b>

      <div className="tabs">
        {["kanban","list","timeline"].map(v=>(
          <button key={v}
            className={view===v?"active":""}
            onClick={()=>setView(v)}
          >
            {v}
          </button>
        ))}
      </div>

      <div className="avatarRow">
        <div className="avatar">A</div>
        <div className="avatar">B</div>
        <div className="avatar">+1</div>
      </div>
    </div>
  );
}