import { Component } from '@stencil/core';

@Component({
  tag: 'zeal-product-card',
  styleUrl: 'zeal-product-card.css',
  shadow: true
})
export class ZealProductCard {

  render() {
    return (
        <div class="card-inner">
            <slot />
        </div>
    );
  }
}