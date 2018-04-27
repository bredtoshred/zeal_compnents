import { Component, Prop, State, Watch, Element } from '@stencil/core';

const svgList = {
    close: {
        type: 'close',
        path: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDkuMiAoNTExNjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmNsb3NlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJjbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMS41IDAgNC41IDMgNy41IDAgOSAxLjUgNiA0LjUgOSA3LjUgNy41IDkgNC41IDYgMS41IDkgMCA3LjUgMyA0LjUgMCAxLjUiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
        alt: 'close icon',
        width: '9',
        height: '9'
    },
    cart: {
        type: 'cart',
        path: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMzAgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jYXJ0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0yLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJjYXJ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS40LDAuNiBMMjUsMC42IEMyNC44LDAuNiAyNC42LDAuOCAyNC41LDEgTDIyLjgsOC4xIEwwLjYsOC4xIEMwLjQsOC4xIDAuMyw4LjIgMC4yLDguMyBDMC4xLDguNSAwLjEsOC42IDAuMiw4LjggTDQsMjAgQzQuMSwyMC4yIDQuMywyMC4zIDQuNSwyMC4zIEwyMCwyMC4zIEwxOS42LDIxLjggTDYuMiwyMS44IEM0LjksMjEuOCAzLjgsMjIuOSAzLjgsMjQuMiBDMy44LDI1LjUgNC45LDI2LjYgNi4yLDI2LjYgQzcuNSwyNi42IDguNiwyNS41IDguNiwyNC4yIEM4LjYsMjMuNyA4LjQsMjMuMiA4LjIsMjIuOCBMMTguMSwyMi44IEMxNy44LDIzLjIgMTcuNywyMy43IDE3LjcsMjQuMiBDMTcuNywyNS41IDE4LjgsMjYuNiAyMC4xLDI2LjYgQzIxLjQsMjYuNiAyMi41LDI1LjUgMjIuNSwyNC4yIEMyMi41LDIzLjEgMjEuNywyMi4yIDIwLjcsMjEuOSBMMjUuNSwxLjYgTDI5LjUsMS42IEMyOS44LDEuNiAzMCwxLjQgMzAsMS4xIEMzMCwwLjggMjkuNywwLjYgMjkuNCwwLjYgWiBNNC43LDE5LjQgTDEuMyw5LjEgTDIyLjYsOS4xIEwyMC4yLDE5LjMgTDQuNywxOS4zIEw0LjcsMTkuNCBaIE03LjYsMjQuMyBDNy42LDI1LjEgNywyNS43IDYuMiwyNS43IEM1LjQsMjUuNyA0LjgsMjUuMSA0LjgsMjQuMyBDNC44LDIzLjUgNS40LDIyLjkgNi4yLDIyLjkgQzcsMjIuOSA3LjYsMjMuNSA3LjYsMjQuMyBaIE0yMS40LDI0LjMgQzIxLjQsMjUuMSAyMC44LDI1LjcgMjAsMjUuNyBDMTkuMiwyNS43IDE4LjYsMjUuMSAxOC42LDI0LjMgQzE4LjYsMjMuNSAxOS4yLDIyLjkgMjAsMjIuOSBDMjAuOCwyMi45IDIxLjQsMjMuNSAyMS40LDI0LjMgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
        alt: 'cart icon',
        width: '20',
        height: '20'
    }
    
}

@Component({
  tag: 'zo-icon',
  styleUrl: 'zo-icon.css',
  shadow: true
})
export class ZoIcon {
    @Element() el: HTMLElement;

    @State() path: string = '';
  @State() alt: string = '';
  
  

  @Prop() thing: string;
  
  @Watch('thing')
  handleTypeChange(val:string) {
    console.log(val)
    this.path = svgList[val].path;
    this.alt = svgList[val].alt;
  }
  
  

    /*if having issues runnit try "npm install"*/
    
  render() {
  
    let src = this.path
    let alt = this.alt
      return (
        <img src={src} alt={alt}/>
    );
    
  }
}  





