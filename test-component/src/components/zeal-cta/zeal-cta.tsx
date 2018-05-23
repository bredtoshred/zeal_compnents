import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-cta',
  styleUrl: 'zeal-cta.css',
  shadow: true
})
export class ZealCta {

  @Prop() linkText: string = "follow";
  @Prop() linkHref: string;
  @Prop() type: string = "default";
  
  render() {
      
    return (
        <a class={this.type} href={this.linkHref}>{this.linkText}</a>
    );
  }
}