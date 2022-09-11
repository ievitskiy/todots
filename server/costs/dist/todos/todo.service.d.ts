import { ChangeTodo } from './dto/change-todo.dto';
import { CreateTodo } from './dto/create-todo.dto';
import { Todo } from './models/todo.model';
export declare class TodoService {
    private todoModel;
    constructor(todoModel: typeof Todo);
    findAll(): Promise<Todo[]>;
    findOne(id: string): Promise<Todo>;
    create(createTodo: CreateTodo): Promise<Todo>;
    update(id: string, changeTodo: ChangeTodo): Promise<[affectedCount: number, affectedRows: Todo[]]>;
    remove(id: string): Promise<void>;
}
