import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("The counter starts at 0", () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");

  expect(counterElement).toHaveTextContent(0);
});

test("Minus button has correct text in it", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("Plus button has correct text in it", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test("When the plus button is pressed, the counter changes to 1", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the minus button is pressed, the counter changes to -1", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("On/off button has blue color", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("on-off-button");
  expect(buttonElement).toHaveStyle("background-color: blue");
});

test("The +/- buttons are disabled when the on/off button is pressed", () => {
  render(<App />);

  const onoffButtonElement = screen.getByTestId("on-off-button");
  fireEvent.click(onoffButtonElement);

  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();

  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toBeDisabled();
});
