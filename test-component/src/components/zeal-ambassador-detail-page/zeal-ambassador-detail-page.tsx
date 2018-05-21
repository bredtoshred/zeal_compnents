import { Component} from '@stencil/core';

@Component({
  tag: 'zeal-ambassador-detail-page',
  styleUrl: 'zeal-ambassador-detail-page.css',
  shadow: true
})
export class ZealAmbassadorDetailPage{

  render() {
    return (
        <slot />
    );
  }
}