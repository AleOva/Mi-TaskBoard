const initialState = {
  tasks: [],
  categoryCounts: { university: 0, house: 0, personal: 0 },
  totalCompletedCount: 0,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const { text, category } = action.payload;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: text || 'Sin texto', completed: false, category },
        ],
      };
    case 'TOGGLE_TASK':
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
      const newCategoryCounts = {
        university: updatedTasks.filter((t) => t.category === 'university' && t.completed).length,
        house: updatedTasks.filter((t) => t.category === 'house' && t.completed).length,
        personal: updatedTasks.filter((t) => t.category === 'personal' && t.completed).length,
      };
      return {
        ...state,
        tasks: updatedTasks,
        categoryCounts: newCategoryCounts,
        totalCompletedCount: Object.values(newCategoryCounts).reduce((a, b) => a + b, 0),
      };
    case 'DELETE_TASK':
      const deletedTask = state.tasks.find((t) => t.id === action.payload);
      const filteredTasks = state.tasks.filter((task) => task.id !== action.payload);
      const updatedCategoryCounts = {
        university: filteredTasks.filter((t) => t.category === 'university' && t.completed).length,
        house: filteredTasks.filter((t) => t.category === 'house' && t.completed).length,
        personal: filteredTasks.filter((t) => t.category === 'personal' && t.completed).length,
      };
      return {
        ...state,
        tasks: filteredTasks,
        categoryCounts: updatedCategoryCounts,
        totalCompletedCount: Object.values(updatedCategoryCounts).reduce((a, b) => a + b, 0),
      };
    default:
      return state;
  }
};

export default taskReducer;