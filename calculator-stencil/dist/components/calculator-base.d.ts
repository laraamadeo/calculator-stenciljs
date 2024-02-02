import type { Components, JSX } from "../types/components";

interface CalculatorBase extends Components.CalculatorBase, HTMLElement {}
export const CalculatorBase: {
    prototype: CalculatorBase;
    new (): CalculatorBase;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
