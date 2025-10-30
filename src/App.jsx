import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
  const totalCompletedCount = useSelector((state) => state.totalCompletedCount);

  return (
    <div className="app">
      <h1 className="title">Mi Taskboard</h1>
      <TaskForm />
      <TaskList />
      <p className="completed-count">Tareas completadas totales: {totalCompletedCount}</p>
    </div>
  );
};

export default App;