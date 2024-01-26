const request = require("supertest");
const express = require("express");
const todosRoutes = require("./todos");

const app = express();
app.use(todosRoutes);
describe("Todos API", () => {
  // Test for fetching todos
  it("responds with an array of todos", async () => {
    const response = await request(app).get("/todos");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: "Pay electric bill", completed: false },
      { id: 2, name: "Walk the dog", completed: false },
    ]);
  });

  // Test for adding a new todo
  it("should add a new todo", async () => {
    const newTodo = { name: "Buy groceries" };
    const response = await request(app).post("/todos").send(newTodo);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe(newTodo.name);
  });

  // Test for handling adding a todo with missing fields
  it("should not add a todo with missing fields", async () => {
    const newTodo = {}; // Missing 'name'
    const response = await request(app).post("/todos").send(newTodo);
    expect(response.statusCode).toBe(400);
  });

  // Test for updating a todo
  it("should update a todo", async () => {
    const updatedTodo = { name: "Buy groceries", completed: true };
    const response = await request(app).put("/todos/1").send(updatedTodo);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(updatedTodo.name);
    expect(response.body.completed).toBe(true);
  });

  // Test for deleting a todo
  it("should delete a todo", async () => {
    const response = await request(app).delete("/todos/1");
    expect(response.statusCode).toBe(200);
  });
});
