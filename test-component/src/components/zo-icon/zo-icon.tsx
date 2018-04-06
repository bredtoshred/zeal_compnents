import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'zo-icon',
  styleUrl: 'zo-icon.css',
  shadow: true
})
export class ZoIcon {

  @Prop() first: string;
  @Prop() type: string;

  render() {
        if(this.type=="close"){
            return (<p>x</p>);
        }
        if(this.type=="cart"){
            return (<p>cart</p>);
        }
  }
}



