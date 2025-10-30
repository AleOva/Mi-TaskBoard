import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = () => {
  const { tasks, categoryCounts } = useSelector((state) => state);

  const getTasksByCategory = (category) =>
    tasks.filter((task) => task.category === category).sort((a, b) => a.completed - b.completed);

  return (
    <div className="task-columns">
      <div className="task-column">
        <h2>Universidad <span>({categoryCounts.university})</span></h2>
        <ul className="task-list">
          {getTasksByCategory('university').map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
      <div className="task-column">
        <h2>Casa <span>({categoryCounts.house})</span></h2>
        <ul className="task-list">
          {getTasksByCategory('house').map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
      <div className="task-column">
        <h2>Personal <span>({categoryCounts.personal})</span></h2>
        <ul className="task-list">
          {getTasksByCategory('personal').map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;