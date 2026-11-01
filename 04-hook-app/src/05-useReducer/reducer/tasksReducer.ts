import * as z from "zod";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction ={ type: "ADD_TODO"; payload: string } | { type: "TOGGLE_TODO"; payload: number } | { type: "DELETE_TODO"; payload: number };

//Esquema de validacion de objetos
const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
})

const TaskStateSchema = z.object({
  todos:z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number()
})



//Creamos un estado inicial vacio
export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("task-state");
  if (!localStorageState) {
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    };
  }

  //Validar mediante Zod.
  const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

  if (result.error){
    console.log(result.error);
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0,
    };
  }

  return result.data;
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      const updateTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: updateTodos,
        length: updateTodos.length,
        pending: updateTodos.filter((todo) => !todo.completed).length,
      };
    }

    case "TOGGLE_TODO": {
      const updateTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return {
        ...state,
        todos: updateTodos,
        length: updateTodos.length,
        completed: updateTodos.filter((todo) => todo.completed).length,
        pending: updateTodos.filter((todo) => !todo.completed).length,
      };
    }

    case "DELETE_TODO": {
      const updateTodos = state.todos.filter(
        (todo) => todo.id != action.payload,
      );
      return {
        ...state,
        todos: updateTodos,
        length: updateTodos.length,
        completed: updateTodos.filter((todo) => todo.completed).length,
        pending: updateTodos.filter((todo) => !todo.completed).length,
      };
    }

    default:
      return state;
  }
};
