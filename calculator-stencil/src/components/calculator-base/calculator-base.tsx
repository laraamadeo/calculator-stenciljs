import { Component, h, State } from '@stencil/core'

@Component({
  tag: 'calculator-base',
  styleUrl: 'calculator-base.css',
  shadow: false,
})

export class CalculatorBase {
  @State() displayValue: string = '0'
  @State() history: string[] = []
  private buttons: string[][] = [['1', '4', '7', '0'], ['2', '5', '8', '.'], ['3', '6', '9', '='], ['-', '+', '/', 'x']]

  handleButtonClick(value: string) {
    value = value === 'x' ? '*' : value

    if (value === '=') {
      try {
        const result = eval(this.displayValue)
        if (this.history.length > 1) {
          this.history.shift()
        }
        this.history = [...this.history, `${this.displayValue}=${result}`]

        this.displayValue = result.toString()
      } catch (error) {
        this.displayValue = 'Error'
      }
    } else if (value === 'C') {
      this.displayValue = '0'
      this.history = []
    } else {
      if (this.displayValue === '0' || this.displayValue === 'Error') {
        this.displayValue = value
      } else {
        this.displayValue += value
      }
    }
  }

  render() {
    return (
      <div class="calculator">
        <div class='calculator-top'>
          <div class="calculator-display">
            <div class="calculator-display-history">
              {this.history.map((item, index) => <div class='history-number' key={index}>{item}</div>)}
            </div>
            <calculator-display class="calculator-display-screen" displayValue={this.displayValue} />
          </div>
          <calculator-button class={'button-erase'} value="C" onButtonClick={(e) => this.handleButtonClick(e.detail)} />
        </div>
        <div class="keyboard">
          {this.buttons.map(column => <div class="calculator-buttons">
            {column.map(num => <calculator-button value={num} onButtonClick={(e) => this.handleButtonClick(e.detail)} />)}
          </div>)}
        </div>
      </div>
    )
  }
}
