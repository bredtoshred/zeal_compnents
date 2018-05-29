import { Component} from '@stencil/core';

@Component({
  tag: 'zeal-slider',
  styleUrl: 'zeal-slider.css',
  shadow: true
})
export class ZealSlider {

    render() {
        return (
            <div class="slider">
                <div class="buttons">
                    <a href="#" class="left"></a>
                    <a href="#" class="right"></a>
                </div>
                
                <slot />
            </div>
        );
    }
}