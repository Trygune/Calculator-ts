export type Operator = "plus" | "minus" | "multiple" | "divide" | "percent";
class Operation {
  static plus = (x: number, y: number): number => x + y;
  static divide = (x: number, y: number): number => x / y;
  static minus = (x: number, y: number): number => x - y;
  static multiple = (x: number, y: number): number => x * y;
  static percent = (x: number, y: number): number => (x / 100) * y;

  static handle_method = (method: Operator, x: number, y: number): number => {
    switch (method) {
      case "plus":
        return Operation.plus(x, y);
      case "minus":
        return Operation.minus(x, y);
      case "multiple":
        return Operation.multiple(x, y);
      case "divide":
        return Operation.divide(x, y);
      case "percent":
        return Operation.percent(x, y);
    }
  };
}

export default Operation;
