import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-secondary-hero',
  styleUrl: 'zeal-secondary-hero.css',
  shadow: true
})
export class ZealSecondaryHero {

  @Prop() heading: string;
  @Prop() preHeading: string;
  @Prop() bgImage: string;


  render() {
      var backgroundStyle = {
        backgroundImage: `url(${this.bgImage})`
    };
      
    return (
        <div class="secondaryHeader" style={backgroundStyle}>
            <div class="heroContent">
                <h2>{this.preHeading}</h2>
                <h1>{this.heading}</h1>
            </div>
        </div>
    );
  }
}