import Cal_View from "./Project9-oop-view";

declare global {
  interface Window {
    Calculator_View: Cal_View;
  }
}

export {};
