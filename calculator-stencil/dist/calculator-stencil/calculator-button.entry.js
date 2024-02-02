import { r as registerInstance, a as createEvent, h } from './index-767514ac.js';

const calculatorButtonCss = ":host{display:block}.calculator-button{width:100%;background-color:#fbeee0;border:2px solid #422800;border-radius:12px;box-shadow:#422800 4px 4px 0 0;color:#422800;cursor:pointer;display:inline-block;font-family:monospace;font-weight:600;font-size:18px;padding:8px;text-align:center}.calculator-button:hover{background-color:#fae8cc}.calculator-button:active{box-shadow:#422800 2px 2px 0 0;transform:translate(2px, 2px)}";

const CalculatorButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClick = createEvent(this, "buttonClick", 7);
        this.value = undefined;
        this.class = undefined;
    }
    handleClick() {
        this.buttonClick.emit(this.value);
    }
    render() {
        return h("button", { key: '0ea5357ae911a147bc88a80e7e92ec323d3cb743', class: `calculator-button ${this.class}`, onClick: () => this.handleClick() }, this.value);
    }
};
CalculatorButton.style = calculatorButtonCss;

export { CalculatorButton as calculator_button };

//# sourceMappingURL=calculator-button.entry.js.map