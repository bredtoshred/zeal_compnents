import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponentOld {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        <p>Hello, World! I'm {this.first} {this.last}</p>
      </div>
    );
  }
}