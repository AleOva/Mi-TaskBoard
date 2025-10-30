import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className={`task-item ${task.category} ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text || 'Sin texto'}</span>
      <div className="task-buttons">
        <button
          className="complete-btn"
          onClick={() => dispatch(toggleTask({ id: task.id }))}
        >
          Completar
        </button>
        <button
          className="delete-btn"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

