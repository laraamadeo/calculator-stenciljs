import { r as registerInstance, h } from './index-767514ac.js';

const calculatorDisplayCss = ":host{display:block}.calculator-display-number{width:100%;font-size:32px;font-family:monospace;color:beige}";

const CalculatorDisplay = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.displayValue = undefined;
    }
    render() {
        return (h("div", { key: '84d395956a229ee917ce93b4e7f38cf4b88a4bc3', class: 'calculator-display-number' }, h("div", { key: '7e4e38f610379ae8ddbef9d371c079f99bc87aa9' }, this.displayValue), h("slot", { key: '5b9092f74bac15c9e652a82a62cada1e81116ff1' })));
    }
};
CalculatorDisplay.style = calculatorDisplayCss;

export { CalculatorDisplay as calculator_display };

//# sourceMappingURL=calculator-display.entry.js.map