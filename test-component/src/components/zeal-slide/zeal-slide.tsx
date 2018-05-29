import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zeal-slide',
  styleUrl: 'zeal-slide.css',
  shadow: true
})
export class ZealSlide {
    
    @Prop() heading: string;
    @Prop() subHeading: string;
    @Prop() bgImage: string;
    @Prop() linkText: string;
    @Prop() href: string;

    render() {
        var backgroundStyle = {
            backgroundImage: `url(${this.bgImage})`
        };
        return (
            <div class="slide" style={backgroundStyle}>
                <div class="content">
                    <h2>{this.heading}</h2>
                    <h3>{this.subHeading}</h3>
                    <zeal-cta link-text="learn more" type="orange"></zeal-cta>
                </div>
            </div>
        );
    }
}