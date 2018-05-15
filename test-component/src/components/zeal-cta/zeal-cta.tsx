import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-cta',
  styleUrl: 'zeal-cta.css',
  shadow: true
})
export class ZealCta {

  @Prop() linkText: string = "follow";
  @Prop() linkHref: string;



    

  render() {
      
    return (
        <a href={this.linkHref}>{this.linkText}</a>
    );
  }
}