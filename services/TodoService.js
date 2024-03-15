const { Op } = require("sequelize");

class TodoService {
  constructor(db) {
    this.client = db.sequelize;
    this.Todo = db.Todo;
  }

  async create(name, deadline, points) {
    try {
      return await this.Todo.create({ Name: name, Deadline: deadline, Points: points });
    } catch (err) {
      console.log(err);
    }
  }

  async getAll() {
    try {
      return await this.Todo.findAll({ where: {} });
    } catch (err) {
      console.log(err);
    }
  }

  async getOneById(todoId) {
    try {
      return await this.Todo.findOne({ where: { id: todoId } });
    } catch (err) {
      console.log(err);
    }
  }

  async delete(todoId) {
    return this.Todo.destroy({ where: { id: todoId } });
  }
}

module.exports = TodoService;
