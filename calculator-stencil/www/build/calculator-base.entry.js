import { r as registerInstance, h } from './index-767514ac.js';

const calculatorBaseCss = ":host{display:block}.calculator{width:100%;display:flex;flex-direction:column;align-items:center;width:300px;margin:auto;padding:20px;border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 5px rgba(0, 0, 0, 0.1);gap:24px;background-color:#fff9c7}.calculator-top{display:flex;width:100%;gap:16px;align-items:end}.calculator-display{width:100%;height:100px;background-color:#422800;display:flex;flex-direction:column;gap:8px;align-items:end;justify-content:end;padding:8px 16px;box-sizing:border-box;border-radius:12px}.calculator-display-history{display:flex;flex-direction:column;gap:8px;width:100%}.history-number{color:beige;font-family:monospace}.calculator-buttons{display:flex;flex-direction:column;width:33.33%;gap:8px}.keyboard{display:flex;width:100%;width:100%;gap:8px}.button-erase{width:100px}";

const CalculatorBase = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttons = [['1', '4', '7', '0'], ['2', '5', '8', '.'], ['3', '6', '9', '='], ['-', '+', '/', 'x']];
        this.displayValue = '0';
        this.history = [];
    }
    handleButtonClick(value) {
        value = value === 'x' ? '*' : value;
        if (value === '=') {
            try {
                const result = eval(this.displayValue);
                if (this.history.length > 1) {
                    this.history.shift();
                }
                this.history = [...this.history, `${this.displayValue}=${result}`];
                this.displayValue = result.toString();
            }
            catch (error) {
                this.displayValue = 'Error';
            }
        }
        else if (value === 'C') {
            this.displayValue = '0';
            this.history = [];
        }
        else {
            if (this.displayValue === '0' || this.displayValue === 'Error') {
                this.displayValue = value;
            }
            else {
                this.displayValue += value;
            }
        }
    }
    render() {
        return (h("div", { key: '834e2197be4dee0a04ce6d1aed69bcb6d9adee2d', class: "calculator" }, h("div", { key: '7d9dea5b175a82a17996f478d5b23fdbdd60dae8', class: 'calculator-top' }, h("div", { key: '5d970100d595d907890e369f10c9755ccdba2dba', class: "calculator-display" }, h("div", { key: 'cfbe67126f1abffa9ea2ec7bdf41ae452cf74018', class: "calculator-display-history" }, this.history.map((item, index) => h("div", { class: 'history-number', key: index }, item))), h("calculator-display", { key: '1bbe37d9e3666c1667a332d76e52eb510c1067bd', class: "calculator-display-screen", displayValue: this.displayValue })), h("calculator-button", { key: '33d5baab2bd45eeb6067fb4ae1b977080a7d8bca', class: 'button-erase', value: "C", onButtonClick: (e) => this.handleButtonClick(e.detail) })), h("div", { key: 'fd894a62aa9cf831a94bd41f32e069f415d30bd4', class: "keyboard" }, this.buttons.map(column => h("div", { class: "calculator-buttons" }, column.map(num => h("calculator-button", { value: num, onButtonClick: (e) => this.handleButtonClick(e.detail) })))))));
    }
};
CalculatorBase.style = calculatorBaseCss;

export { CalculatorBase as calculator_base };

//# sourceMappingURL=calculator-base.entry.js.map