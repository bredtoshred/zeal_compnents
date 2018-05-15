import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-quote-block',
  styleUrl: 'zeal-quote-block.css',
  shadow: true
})
export class ZealQuoteBlock {

  @Prop() name: string;
  @Prop() quote: string;


  render() {
      return (
        <div class="quoteBlock">
            <div class="quoteText">
                <p>{this.quote}</p>
                <span>- {this.name}</span>
            </div>
        </div>
    );
  }
}