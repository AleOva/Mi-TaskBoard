import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './TaskForm.css';

const TaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const [category, setCategory] = useState('university');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask({ text: taskText, category }));
      setTaskText('');
    } else {
      console.log('No se agregó tarea: texto vacío');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="university">Universidad</option>
        <option value="house">Casa</option>
        <option value="personal">Personal</option>
      </select>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;