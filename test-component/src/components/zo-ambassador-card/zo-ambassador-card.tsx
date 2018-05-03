import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zo-ambassador-card',
  styleUrl: 'zo-ambassador-card.css',
  shadow: true
})
export class MyComponent {

  @Prop() name: string;
  @Prop() activity: string;
  @Prop() bgimage: string;
  @Prop() bgalt: string;
  @Prop() pagelink: string;
  

  render() {
    return (
        <div class="image-card">
            <div class="image-card_inner">
                <a class="image-card_link" href="{this.pagelink}">
                  <img class="image-card_image" src={this.bgimage} alt="{this.bgalt}"></img>
                  <div class="image-card_text">
                    <h4 class="image-card_title">{this.name}</h4>
                    <h5 class="image-card_subtitle">{this.activity}</h5>
                  </div>
                </a>
            </div>
        </div>
    );
  }
}