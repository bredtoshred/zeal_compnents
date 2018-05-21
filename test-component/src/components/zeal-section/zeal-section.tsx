import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-section',
  styleUrl: 'zeal-section.css',
  shadow: true
})
export class ZealSection {

  @Prop() heading: string;
  @Prop() text: string;
  @Prop() bgImage: string;
  @Prop() linkText: string;
  @Prop() linkHref: string;
  @Prop() imagePos: string = "left";
    

  render() {
      var backgroundStyle = {
        backgroundImage: `url(${this.bgImage})`
    };
      
    return (
        <div class={`sectionContainer ${this.imagePos || 'left'}`}>
            <div class="image" style={backgroundStyle}></div>
            <div class="text">
                <h2>{this.heading}</h2>
                <p>{this.text}</p>
                <zeal-cta link-href={this.linkHref} link-text={this.linkText}></zeal-cta>
            </div>
        </div>
    );
  }
}