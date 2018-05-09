import { Component } from '@stencil/core';

@Component({
  tag: 'zeal-card-group',
  styleUrl: 'zeal-card-group.css',
  shadow: true
})
export class ZealCardGroup {

  render() {
    return (
        <slot />
    );
  }
}