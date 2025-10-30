# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Fundamentos de Redux en la Aplicación TaskBoard
En el desarrollo de aplicaciones web modernas, como TaskBoard la gestión del estado es un aspecto crítico para garantizar que los datos se manejen de manera predecible y escalable. TaskBoard es una aplicación React diseñada para permitir a estudiantes crear, marcar como completadas y eliminar tareas en una lista colaborativa, utilizando Redux para gestionar el estado global. El rol del reducer y las diferencias entre acciones asincrónicas y sincrónicos en Redux Toolkit.

¿Qué es Redux y su ventaja frente a useState?
Redux es una biblioteca de código abierto diseñado para gestionar el estado global de aplicaciones JavaScript, especialmente en aplicaciones React como TaskBoard. Funciona como un contenedor predecible del estado, centralizando todos los datos en un único lugar llamado store, al que los componentes acceden mediante un flujo unidireccional de datos. Esto implica que los cambios en el estado solo ocurren a través de acciones despachadas, las cuales, son procesadas por funciones específicas (reducers) para generar un nuevo estado sin modificar el original. 
En TaskBoard, Redux permite que todos los componentes como TaksForm, TaskList y TaskItem compartan el estado global de las tareas como un array de objetos con propiedades como id, título y completada, sin la necesidad de pasar props entre ellos. Esto es útil para una aplicación colaborativa donde múltiples usuarios pueden interactuar con la lista de tareas. Comparado con useState que es ideal para manejar el estado local de un componente, Redux ofrece una ventaja en aplicaciones complejas al centralizar y escalabilidad.
Con useState gestionar el estado compartido entre múltiples componentes requiere de props a través de varios niveles, lo que puede volverse inmanejable o complicado si son aplicaciones grandes. Redux elimina este problema al proporcionar un único store accesible desde cualquier componente facilitando la trazabilidad de cambios y depuración. 

Componentes Fundamentales de Redux
Redux se basa en tres componente para su arquitectura:
1.	Store: es el contenedor que almacena el estado global de la aplicación. En TaskBoard, el store contiene el estado inicial { tasks: [] }, representa la lista de tareas, el store proporciona métodos como getState () para leer el estado, dispatch () para enviar acciones que modifican el estado y suscribe () para notificar a los componentes sobre cambios. El store se configura como store.js y se conecta a los componentes del React mediante el componente provider de React-redux. 
2.	Acciones: son objetos que describen eventos o intenciones de cambio en el estado, cada acción tiene un campo obligatorio type (cadena que identifica la acción), opcionalmente, un playload con datos adicionales. Las acciones son la única fuente de información para modificar el estado, asegurando el flujo predecible.
3.	Reducers: son funciones puras que especifican como el estado cambia en respuesta a una acción, reciben el estado actual y una acción y devuelven un nuevo estado sin mutar el original. En TaskBoard, el reduer taskReducer maneja acciones como ADD_TASK, TOGGLE_TASK y DELETE_TASK, actualizando el array de tareas según corresponda. 

El Papel del Reducer en el Flujo de Redux
El reducer es el núcleo del flujo de datos en Redux, ya que actúa como el mecanismo que procesa acciones despachadas para actualizar el estado del store, en TaskBoard, el reducer (taskReducer) define como cambian las tareas en respuesta a las acciones.
Ejemplo:
•	ADD_TASK: Agrega una nueva tarea al array tasks.
•	TOGGLE_TASK: Cambia el valor de completada para una tarea específica, identificada por su id.
•	DELETE_TASK: Elimina una tarea del array filtrando por su id.
El flujo de Redux en TaskBoard funciona así:
Un componente como TaskForm despacha una acción usando dispatch, el store pasa la acción al reducer y este calcula el nuevo estado y lo almacena. Los componentes suscritos al store (useSelector) actualizan automáticamente para reflejar el nuevo estado. Este proceso garantiza que los cambios sean predecibles ya que el reducer no permite mutaciones directas del estado y siempre devuelve un nuevo objeto de estado.

Acciones Síncronas vs. Asíncronas en Redux Toolkit
En TaskBoard las acciones pueden ser sincrónicas o asincrónicas dependiendo de la naturaleza de la operación, en redux clásico, las acciones son sincrónicas pro defecto, lo que significaba que los objetos simples eran despachados directamente al store para actualizar el estado de inmediato. 
Por ejemplo: en el componente TaskForm proporcionado, la acción ADD_TASK es síncrona: { type: 'ADD_TASK', payload: { id: Date.now(), titulo, completada: false } }. 
Estas acciones son ideales para operaciones locales, como agregar una tarea al array tasks sin interactuar con un servidor. Por otro lado, Redux Toolkit introduce herramientas como créate AsyncThunk para manejar acciones asíncronas que son necesarias cuando TaskBoard necesita interactuar con un servidor remoto. Una acción asíncrona creada con créate AsyncThunk genera tres estados automáticos
1.	Pending (cuando la operación comienza)
2.	Fulfilled (cuando se completa con éxito)
3.	Rejected (si ocurre un error)
Por ejemplo, una acción asíncrona para agregar una tarea podría implicar una llamada POST a una API, y el reducer manejaría los resultados de estos estados para actualizar el store. La diferencia clave es que las acciones asíncronas permiten manejar operaciones que toman tiempo, como solicitudes HTTP, mientras que las síncronas son instantáneas y no dependen de procesos externos.
En TaskBoard, las acciones sincrónicas son suficientes para la funcionalidad básica (agregar, marcar o eliminar tareas localmente), pero las acciones asincrónicas son esenciales para integrar la aplicación con un servidor, como se explora en Redux Toolkit simplificando el proceso al eliminar la necesidad de middleware como redux-thunk al proporcionar una estructura clara para manejar los estados de las operaciones asincrónicas.

Sección III-Extensión:
Para integrar TaskBoard como un servidor remoto, se usaría créate AsyncThunk de Redux Toolkit que simplifica el manejo de acciones asíncronas. 
Crear los "Slices" con Redux Toolkit: en lugar de un acciones.js y reducer.js por separado crearíamos un tasksSlice.js usando create Slice.
1.	Definir el Estado Inicial: Extenderíamos el estado para manejar los diferentes estados de la API (cargando, éxito, error).
const initialState = {
  tasks: [],
  loading: false,
  error: null
};






Crear Thunks Asíncronos: Usaríamos createAsyncThunk para generar acciones que realicen las llamadas a la API.
// Ejemplo: Fetch de tareas desde el servidor
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('/api/tasks');
  const data = await response.json();
  return data; // Este será el `action.payload` en el reducer de `fulfilled`
});

// Ejemplo: Agregar una nueva tarea al servidor
export const addTaskAsync = createAsyncThunk('tasks/addTaskAsync', async (newTask) => {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTask)
  });
  const data = await response.json();
  return data; // La tarea guardada con el ID generado por el servidor
});


Manejar los Estados en el Reducer: el createSlice nos permite definir reducers para acciones síncronas y para manejar estados extra reducers generados automáticamente por el thunk (Pending, Fulfilled y Rejected).
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Aquí irían TOGGLE_TASK, DELETE_TASK si se hacen de forma síncrona/optimista
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload; // Cargamos las tareas desde el servidor
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.tasks.push(action.payload); // Agregamos la tarea devuelta por el servidor
      })
      // ... manejar otros casos y estados de error
  }
});

Despachar en los Componentes: en los componentes React, despacharíamos estas acciones asíncronas. Por ejemplo: TaskForm.jsx, en lugar de despachar ADD_TASK, despacharías addTaskAsync(nuevaTarea).

8. ¿Qué ventajas tendría usar Redux Toolkit frente a Redux clásico en este caso?
Redux Toolkit (RTK) está diseñado para ser la forma estándar de escribir lógica Redux moderna y resuelve muchas quejas comunes sobre el Redux vanilla, sus ventajas como proyecto son: 
1.	Menos código Boilerplate: RTK elimina la necesidad de escribir archivos separados para acciones, tipos de acción y reducers. createSlice genera automáticamente los action creators y los tipos de acción basándose en nombres de los reducers que se definen, reduciendo la cantidad de código al escribir y por ende el mantenimiento. 
2.	Inmutabilidad simplificada: los reducers escritos con createSlice usan librería Immer internamente, lo que permite escribir lógica de actualización que “muta” el estado de manera legible. 
3.	Configuración simplificada del Store: configureStore de RTK configura automáticamente middlewares útiles como Redux Thunk para acciones asíncronas y habilita las Redux DevTools Extension con una sola línea, lo que en Redux clásico era un proceso manual. 
4.	Manejo integrado de asincronía: create AsyncThunk está integrado en RTK y proporciona una forma estandarizada y poderosa de manejar el ciclo de vida completo de las solicitudes asíncronas (carga, éxito, error) que en Redux clásico que requería la instalación y configuración manual de librerías adicionales. 

Conclusiones 
1.	La arquitectura de Redux basada en un store unificado y un flujo de datos unidireccional es fundamental para gestionar el estado global de aplicaciones React como TaskBoard de manera predecible y escalable.
2.	La implementación práctica de TaskBoard demuestra la eficacia de la tríada fundamental de Redux (Store, Acciones y Reducers) para manejar operaciones de datos complejos de forma sincrónica.
3.	Redux Toolkit (RTK) se presenta como la evolución esencial de Redux vanilla, ofreciendo ventajas decisivas para el desarrollo moderno. 

Referencias Bibliográficas 
1.	Abramov, D. (2015, March 25). You might not need Redux. Medium. https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
2.	Markovic, M. (2020). Redux in Action. Manning Publications.
3.	React.dev. (2023). Managing state. React Documentation. https://react.dev/learn/managing-state
4.	Redux.js. (2023). Async logic and data fetching. Redux Fundamentals. https://redux.js.org/tutorials/fundamentals/part-6-async-logic
5.	Redux.js. (2023). createAsyncThunk. Redux Toolkit API Documentation. https://redux-toolkit.js.org/api/createAsyncThunk
6.	Redux.js. (2023). Redux fundamentals. Redux Documentation. https://redux.js.org/tutorials/fundamentals/part-1-overview
7.	Redux.js. (2023). Redux Toolkit: The standard way to write Redux. Redux Toolkit Documentation. https://redux-toolkit.js.org/introduction/getting-started





