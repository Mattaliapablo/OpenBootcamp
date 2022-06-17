import "./App.css";
import TaskList from "./components/container/TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente de Listado de Tareas */}
        <TaskList />
      </header>
    </div>
  );
}

export default App;
