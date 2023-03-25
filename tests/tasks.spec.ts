import { test, expect } from "@playwright/test";
import { TaskModel } from "./fixtures/task.model";
import { deleteTaskByHelper, postTask } from "./support/helpers";

import { TasksPage } from "./support/pages/tasks";

test.only("deve cadastrar uma nova tarefa", async ({ page, request }) => {
  const task: TaskModel = {
    name: "Ler um livro de TypeScript",
    is_done: false,
  };

  await deleteTaskByHelper(request, task.name);
  const taskPage: TasksPage = new TasksPage(page);

  await taskPage.go();
  await taskPage.create(task);
  await taskPage.shouldHaveText(task.name);
});

test("não deve permitir tarefa duplicada", async ({ page, request }) => {
  const task: TaskModel = {
    name: "Comprar ketchup",
    is_done: false,
  };

  await deleteTaskByHelper(request, task.name);
  await postTask(request, task);

  const taskPage: TasksPage = new TasksPage(page);
  await taskPage.go();
  await taskPage.create(task);
  await taskPage.alertHaveText("Task already exists!");
});
