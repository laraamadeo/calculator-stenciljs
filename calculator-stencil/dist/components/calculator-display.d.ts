import type { Components, JSX } from "../types/components";

interface CalculatorDisplay extends Components.CalculatorDisplay, HTMLElement {}
export const CalculatorDisplay: {
    prototype: CalculatorDisplay;
    new (): CalculatorDisplay;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
