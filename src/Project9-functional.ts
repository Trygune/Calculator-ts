let x: number | string = 0;
let y: number | string = 0;
let result: number | string = 0;
let myoperand: string | null = null;
let dot: boolean = false;
type Operator = "plus" | "minus" | "multiple" | "divide" | "percent";
type Action = "delete" | "clear";

const screen_handler = (new_number: number | string): void => {
  const screen = document.getElementById("current-operand");
  if (screen) {
    screen.innerText = String(new_number);
  }
};

const choose_number = (number: number): void => {
  const current = myoperand ? y : x;
  const value = Number(`${current}${number}`);
  if (myoperand) {
    y = value;
  } else {
    x = value;
  }
  screen_handler(value);
};

const second_screen_handler = (previous_number: string): void => {
  const screen = document.getElementById("previous-operand");
  if (screen) {
    screen.innerText = previous_number;
  }
};

const deactive_operand = (): void => {
  const operators = document.querySelectorAll(
    ".operator",
  ) as NodeListOf<HTMLElement>;

  operators.forEach((item: HTMLElement) => {
    item.classList.remove("active");
  });
};

const active_operand = (operand: Operator): void => {
  myoperand = operand;
  y = 0;
  dot = false;
  deactive_operand();
  screen_handler(y);
  const op = document.getElementById(operand) as HTMLElement | null;
  op?.classList.add("active");

  switch (operand) {
    case "minus":
      second_screen_handler(`${x} -`);
      break;
    case "plus":
      second_screen_handler(`${x} +`);
      break;
    case "percent":
      second_screen_handler(`${x} %`);
      break;
    case "multiple":
      second_screen_handler(`${x} x`);
      break;
    case "divide":
      second_screen_handler(`${x} ÷`);
      break;
    default:
      break;
  }
};

const action_operand = (action: Action): void => {
  dot = false;
  if (action === "delete") {
    if (myoperand) {
      y = 0;
      screen_handler(y);
    } else {
      x = 0;
      screen_handler(x);
    }
  } else {
    x = 0;
    y = 0;
    result = 0;
    myoperand = null;
    screen_handler(x);
    deactive_operand();
    second_screen_handler("");
  }
};

const equal = (): void => {
  if (myoperand) {
    second_screen_handler("");
    switch (myoperand) {
      case "minus":
        result = (x as number) - (y as number);
        break;
      case "plus":
        result = (x as number) + (y as number);
        break;
      case "percent":
        result = ((x as number) / 100) * (y as number);
        break;
      case "multiple":
        result = (x as number) * (y as number);
        break;
      case "divide":
        result = (x as number) / (y as number);
        break;
      default:
        break;
    }
    x = parseFloat((result as number).toPrecision(12));
    y = 0;
    myoperand = null;
    screen_handler(x);
    deactive_operand();
  }
};
const add_dot = (): void => {
  if (!dot) {
    dot = true;
    const current = myoperand ? y : x;
    const newValue = `${current}.`;
    if (myoperand) {
      y = newValue;
    } else {
      x = newValue;
    }
    screen_handler(newValue);
  }
};
