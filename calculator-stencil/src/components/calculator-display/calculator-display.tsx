import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'calculator-display',
  styleUrl: 'calculator-display.css',
  shadow: false,
})

export class CalculatorDisplay {
  @Prop() displayValue: string

  render() {
    return (
      <div class='calculator-display-number'>
        <div>{this.displayValue}</div>
        <slot></slot>
      </div>
    )
  }
}
