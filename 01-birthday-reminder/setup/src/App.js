
import reminder from './data';

import PersonCard from './Card';
function App() {
  return (
     <div
      style={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {reminder.map((person) => (
        <PersonCard key={person.id} data={person} />
      ))}
    </div>
  )
}

export default App;
