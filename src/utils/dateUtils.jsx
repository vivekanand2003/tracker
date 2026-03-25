export function formatDue(dateStr){
  const d = new Date(dateStr);
  const today = new Date();

  const diff = Math.floor((today - d)/(1000*60*60*24));

  if(diff === 0) return "Due Today";
  if(diff > 7) return `${diff} days overdue`;
  return d.toDateString().slice(4,10);
}