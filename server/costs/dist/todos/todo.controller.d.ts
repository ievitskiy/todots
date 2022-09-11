import { ChangeTodo } from './dto/change-todo.dto';
import { CreateTodo } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getAllTodos(): Promise<import("./models/todo.model").Todo[]>;
    getOneTodod(id: string): Promise<import("./models/todo.model").Todo>;
    createTodo(createTodo: CreateTodo): Promise<import("./models/todo.model").Todo>;
    changeTodo(changeTodo: ChangeTodo, id: string): Promise<[affectedCount: number, affectedRows: import("./models/todo.model").Todo[]]>;
    deleteTodo(id: string): Promise<void>;
}
