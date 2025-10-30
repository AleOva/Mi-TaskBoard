// Acción para agregar una nueva tarea
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task
});

// Acción para alternar el estado 'completada' de una tarea
export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  payload: id
});

// Acción para eliminar una tarea
export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id
});