import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("deve cadastrar uma nova tarefa", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const inputTaskName = page.locator("input[type=text]");
  await inputTaskName.fill(faker.lorem.words());

  //exemplo básico de como preencher um campo
  //await page.fill("input[type=text]", "Ler um livro de TypeScript");

  //esse código submite o formulário sem clicar no botão simulando o click do
  // botão enter
  // await inputTaskName.press("Enter");

  //exemplo com Xpath
  // await page.click("xpath=//button[contains(text(), 'Create')]");

  await page.click("css=button >> text=Create");

  // //button[contains(text(), "Create")]
});
