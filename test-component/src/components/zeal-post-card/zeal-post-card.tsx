import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-post-card',
  styleUrl: 'zeal-post-card.css',
  shadow: true
})
export class ZealPostCard {

  @Prop() image: string;
  @Prop() title: string;
  @Prop() description: string;
  @Prop() linkHref: string;
  @Prop() linkText: string;
    
  render() {
    return (
        <div class="postcard">
            <img src={this.image}></img>
            
            
            <div class="prepretitle">
                <slot name="pptitle"/>
            </div>
                
            <div class="pretitle">
                <slot name="ptitle"/>
            </div>
            <h3>{this.title}</h3>
            <p class="long-text">{this.description}</p>
            <zeal-cta link-href={this.linkHref} link-text={this.linkText}></zeal-cta>
        </div>
    );
  }
}