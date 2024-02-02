import { EventEmitter } from '../../stencil-public-runtime';
export declare class CalculatorButton {
    value: string;
    class: string;
    buttonClick: EventEmitter<string>;
    handleClick(): void;
    render(): any;
}
