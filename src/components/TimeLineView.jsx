export default function TimelineView({tasks}){
  const today = new Date().getDate();

  return (
    <div className="timeline">
      <div className="todayLine" style={{left:`${today*20}px`}}/>

      {tasks.map(t=>(
        <div key={t.id} className="timelineRow">
          <div style={{width:120}}>{t.title}</div>

          <div
            className="bar"
            style={{
              width:100,
              background:"#4F46E5"
            }}
          />
        </div>
      ))}
    </div>
  );
}