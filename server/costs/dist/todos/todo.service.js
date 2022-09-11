"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const todo_model_1 = require("./models/todo.model");
let TodoService = class TodoService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async findAll() {
        return this.todoModel.findAll();
    }
    findOne(id) {
        return this.todoModel.findOne({
            where: {
                id,
            },
        });
    }
    create(createTodo) {
        const todo = new todo_model_1.Todo();
        todo.title = createTodo.title;
        todo.done = createTodo.done;
        return todo.save();
    }
    update(id, changeTodo) {
        return this.todoModel.update(Object.assign({}, changeTodo), {
            where: {
                id,
            },
            returning: true,
        });
    }
    async remove(id) {
        const todo = await this.findOne(id);
        await todo.destroy;
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(todo_model_1.Todo)),
    __metadata("design:paramtypes", [Object])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map