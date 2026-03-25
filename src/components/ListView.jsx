import { useState } from "react";

export default function ListView({tasks}){
  const [scroll,setScroll]=useState(0);

  const rowH=48;
  const visible=12;

  const start=Math.floor(scroll/rowH);
  const end=start+visible;
  const slice=tasks.slice(start,end);

  return (
    <div className="tableWrap">
      <div className="scrollBox" onScroll={e=>setScroll(e.target.scrollTop)}>
        <div style={{height:tasks.length*rowH}}>
          <div style={{transform:`translateY(${start*rowH}px)`}}>
            <table>
              <thead>
                <tr>
                  <th>Title</th><th>Priority</th><th>Status</th>
                </tr>
              </thead>
              <tbody>
                {slice.map(t=>(
                  <tr key={t.id}>
                    <td>{t.title}</td>
                    <td>{t.priority}</td>
                    <td>{t.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}