import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-tech-block',
  styleUrl: 'zeal-tech-block.css',
  shadow: true
})
export class ZealTechBlock {

  @Prop() heading: string;
  @Prop() subHeading: string;
  @Prop() description: string;
  @Prop() image: string;
  @Prop() imageAlt: string ="Zeal product image";
  @Prop() bgImage: string ="https://www.zealoptics.com/_ui/responsive/theme-zealb2c/images/zeal-pattern-light.png";


  render() {
      var backgroundStyle = {
        backgroundImage: `url(${this.bgImage})`
    };
      
    return (
        <div class="tech-block" style={backgroundStyle}>
            <div class="content">
                <h2>{this.heading}</h2>
                <p class="subHeading">{this.subHeading}</p>
                <p class="description">{this.description}</p>
                <img src={this.image} alt={this.imageAlt}></img>
                <slot />
            </div>
        </div>
    );
  }
}