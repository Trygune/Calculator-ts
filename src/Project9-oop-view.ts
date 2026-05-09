import Operation, { type Operator } from "./Project9-oop-logic";
type Action = "delete" | "clear";

class Cal_View {
  #myoperand: Operator | null = null;
  #x: number | string = 0;
  #y: number | string = 0;
  #dot: boolean = false;
  #result: number | string = 0;

  screen_handler = (new_number: number | string): void => {
    const screen = document.getElementById("current-operand");
    if (screen) {
      screen.innerText = String(new_number);
    }
  };

  choose_number = (number: number): void => {
    const current = this.#myoperand ? this.#y : this.#x;
    const value = Number(`${current}${number}`);
    if (this.#myoperand) {
      this.#y = value;
    } else {
      this.#x = value;
    }
    this.screen_handler(value);
  };

  second_screen_handler = (previous_number: string): void => {
    const screen = document.getElementById("previous-operand");
    if (screen) {
      screen.innerText = previous_number;
    }
  };

  active_operand = (operand: Operator): void => {
    this.#myoperand = operand;
    this.#y = 0;
    this.#dot = false;
    this.deactive_operand();
    this.screen_handler(this.#y);
    const op = document.getElementById(operand) as HTMLElement | null;
    op?.classList.add("active");

    switch (operand) {
      case "minus":
        this.second_screen_handler(`${this.#x} -`);
        break;
      case "plus":
        this.second_screen_handler(`${this.#x} +`);
        break;
      case "percent":
        this.second_screen_handler(`${this.#x} %`);
        break;
      case "multiple":
        this.second_screen_handler(`${this.#x} x`);
        break;
      case "divide":
        this.second_screen_handler(`${this.#x} ÷`);
        break;
      default:
        break;
    }
  };

  deactive_operand = (): void => {
    const operators = document.querySelectorAll(
      ".operator",
    ) as NodeListOf<HTMLElement>;
    operators.forEach((item: HTMLElement) => {
      item.classList.remove("active");
    });
  };

  add_dot = (): void => {
    if (!this.#dot) {
      this.#dot = true;
      const current = this.#myoperand ? this.#y : this.#x;
      const newValue = `${current}.`;
      if (this.#myoperand) {
        this.#y = newValue;
      } else {
        this.#x = newValue;
      }
      this.screen_handler(newValue);
    }
  };

  action_operand = (action: Action): void => {
    this.#dot = false;
    if (action === "delete") {
      if (this.#myoperand) {
        this.#y = 0;
        this.screen_handler(this.#y);
      } else {
        this.#x = 0;
        this.screen_handler(this.#x);
      }
    } else {
      this.#x = 0;
      this.#y = 0;
      this.#result = 0;
      this.#myoperand = null;
      this.screen_handler(this.#x);
      this.deactive_operand();
      this.second_screen_handler("");
    }
  };

  equal = (): void => {
    if (
      this.#myoperand &&
      typeof this.#x === "number" &&
      typeof this.#y === "number"
    ) {
      this.#result = Operation.handle_method(this.#myoperand, this.#x, this.#y);
      this.second_screen_handler("");
      this.#x = this.#result;
      this.#y = 0;
      this.#myoperand = null;
      this.screen_handler(this.#x);
      this.deactive_operand();
    }
  };
}

export default Cal_View;
