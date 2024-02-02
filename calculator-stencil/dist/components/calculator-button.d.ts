import type { Components, JSX } from "../types/components";

interface CalculatorButton extends Components.CalculatorButton, HTMLElement {}
export const CalculatorButton: {
    prototype: CalculatorButton;
    new (): CalculatorButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
