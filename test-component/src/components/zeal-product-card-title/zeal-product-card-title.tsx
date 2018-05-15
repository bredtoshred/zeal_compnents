import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-product-card-title',
  styleUrl: 'zeal-product-card-title.css',
  shadow: true
})
export class ZealProductCardTitle {

  @Prop() title: string;

  render() {
      
    return (
        <h5>{this.title}</h5>
    );
  }
}