import { TaskModel } from "./../../../fixtures/task.model";
import { Page, expect } from "@playwright/test";

export class TasksPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = this.page;
  }

  async go() {
    await this.page.goto("http://localhost:3000/")
  }

  async create(task: TaskModel) {
    const inputTaskName = this.page.locator("input[type=text]");
    await inputTaskName.fill(task.name);

    await this.page.click("css=button >> text=Create");
  }

  async shouldHaveText(taskName: string) {
    const target = this.page.locator(`css=.task-item p >> text=${taskName}`);
    await expect(target).toBeVisible();
  }

  async alertHaveText(text: string) {
    const target = this.page.locator(".swal2-html-container");
    await expect(target).toHaveText(text);
  }
}
