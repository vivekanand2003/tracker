import './App.css'
import { useEffect, useMemo, useState } from "react";
import "./styles/base.css";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import KanbanBoard from "./components/KanbanBoard";
import ListView from "./components/ListView";
import TimelineView from './components/TimelineView';
import { generateTasks } from './utils/dataGenerator';


function App(){
  const [view,setView]=useState("kanban");
  const [tasks,setTasks]=useState([]);
  const [filters,setFilters]=useState({status:[],priority:[]});

  useEffect(()=>{ setTasks(generateTasks(500)); },[]);

  // URL sync
  useEffect(()=>{
    const params=new URLSearchParams();
    if(filters.status.length) params.set("status",filters.status.join(","));
    if(filters.priority.length) params.set("priority",filters.priority.join(","));
    window.history.replaceState(null,"","?"+params.toString());
  },[filters]);

  const filtered = useMemo(()=>{
    return tasks.filter(t=>{
      if(filters.status.length && !filters.status.includes(t.status)) return false;
      if(filters.priority.length && !filters.priority.includes(t.priority)) return false;
      return true;
    });
  },[tasks,filters]);

  return (
    <>
      <Navbar view={view} setView={setView}/>
      <FilterBar filters={filters} setFilters={setFilters}/>

      {view==="kanban" && <KanbanBoard tasks={filtered} setTasks={setTasks}/>}
      {view==="list" && <ListView tasks={filtered} setTasks={setTasks}/>}
      {view==="timeline" && <TimelineView tasks={filtered}/>}
    </>
  );
}

export default App;