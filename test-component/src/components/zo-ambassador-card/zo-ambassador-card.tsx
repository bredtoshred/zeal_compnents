import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zo-ambassador-card',
  styleUrl: 'zo-ambassador-card.css',
  shadow: true
})
export class ZoAmbassadorCard {

  @Prop() name: string;
  @Prop() activity: string;
  @Prop() bgImage: string;
  @Prop() pagelink: string;

  render() {
      var backgroundStyle = {
        backgroundImage: `url(${this.bgImage})`
    };
      
    return (
        <div class="image-card">
            <div class="image-card_inner" style={backgroundStyle}>
                <a href={this.pagelink} class="image-card_link" target="_blank">
                  <div class="image-card_text">
                    <h4 class="image-card_title">{this.name}</h4>
                      <hr/>
                    <h5 class="image-card_subtitle">{this.activity}</h5>
                  </div>
                </a>
            </div>
        </div>
    );
  }
}

//function renderCardGroup(){
//    return (
//        <div><slot/></div>
//    )
//    
//}