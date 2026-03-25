const statuses = ["todo","progress","review","done"];
const priorities = ["low","medium","high","critical"];
const users = ["AK","RS","VP","NJ","SK","AM"];

function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

export function generateTasks(n=500){
  const list=[];
  for(let i=1;i<=n;i++){
    const start = new Date();
    start.setDate(start.getDate() - Math.floor(Math.random()*10));

    const due = new Date(start);
    due.setDate(start.getDate() + Math.floor(Math.random()*15));

    list.push({
      id:i,
      title:`Task ${i}`,
      status:rand(statuses),
      priority:rand(priorities),
      assignee:rand(users),
      startDate: Math.random()>0.2 ? start.toISOString() : null,
      dueDate: due.toISOString()
    });
  }
  return list;
}