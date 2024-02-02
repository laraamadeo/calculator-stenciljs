import { Component, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'calculator-button',
  styleUrl: 'calculator-button.css',
  shadow: false,
})

export class CalculatorButton {
  @Prop() value: string
  @Prop() class: string
  @Event() buttonClick: EventEmitter<string>

  handleClick() {
    this.buttonClick.emit(this.value)
  }

  render() {
    return <button class={`calculator-button ${this.class}`} onClick={() => this.handleClick()}>{this.value}</button>
  }
}