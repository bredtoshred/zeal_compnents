import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-product-card',
  styleUrl: 'zeal-product-card.css',
  shadow: true
})
export class ZealProductCard {
    
    @Prop() link: string;

  render() {
    return (
        <div class="card-inner">
            <a href={this.link} target="_blank">
                <slot />
            </a>
        </div>
    );
  }
}