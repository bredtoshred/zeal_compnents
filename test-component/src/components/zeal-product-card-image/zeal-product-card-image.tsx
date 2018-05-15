import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-product-card-image',
  styleUrl: 'zeal-product-card-image.css',
  shadow: true
})
export class ZealProductCardImage {

  @Prop() imgSrc: string;
  @Prop() imgAlt: string;

  render() {
      
    return (
        <img src={this.imgSrc} alt={this.imgAlt}></img>
    );
  }
}