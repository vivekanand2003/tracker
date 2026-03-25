export default function FilterBar({ filters, setFilters }) {

  const toggle = (type, val) => {
    setFilters(prev => {
      const arr = prev[type].includes(val)
        ? prev[type].filter(v => v !== val)
        : [...prev[type], val];
      return { ...prev, [type]: arr };
    });
  };

  const selectPriority = (value) => {
    setFilters((prev) => ({
      ...prev,
      priority: [value], // always replace
    }));
  };



  return (
    <div className="filterBar">
      {["todo", "progress", "review", "done"].map(s => (
        <button key={s}
          onClick={() => toggle("status", s)}
          className={`filterBtn ${filters.status.includes(s) ? "active" : ""
            }`}
        >
          {s}</button>
      ))}

      {["low", "medium", "high", "critical"].map((p) => (
        <button
          key={p}
          onClick={() => selectPriority(p)}
          className={`filterBtn ${filters.priority.includes(p) ? "active" : ""
            }`}
        >
          {p}
        </button>
      ))}

      <button className="clearBtn" onClick={() => setFilters({ status: [], priority: [] })}>
        Clear
      </button>
    </div>
  );
}