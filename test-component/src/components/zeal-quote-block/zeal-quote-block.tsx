import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-quote-block',
  styleUrl: 'zeal-quote-block.css',
  shadow: true
})
export class ZealQuoteBlock {

  @Prop() name: string;
  @Prop() quote: string;
  @Prop() bgImage: string ="https://www.zealoptics.com/_ui/responsive/theme-zealb2c/images/zeal-pattern-light.png";
    
  render() {
    var backgroundStyle = {
        backgroundImage: `url(${this.bgImage})`
    };
    return (
        <div class="quoteBlock" style={backgroundStyle}>
            <div class="quoteText">
                <p>{this.quote}</p>
                <span>- {this.name}</span>
            </div>
        </div>
    );
  }
}