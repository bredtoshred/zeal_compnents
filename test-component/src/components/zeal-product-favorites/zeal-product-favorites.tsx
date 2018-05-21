import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-product-favorites',
  styleUrl: 'zeal-product-favorites.css',
  shadow: true
})
export class ZealProductFavorites {

  @Prop() heading: string ="Product Favorites";

  render() {
    return (
        <div class="productFavorites">
            <h2>{this.heading}</h2>
            <slot />
        </div>
    );
  }
}