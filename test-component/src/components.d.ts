/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {
  interface HTMLMyComponentElement extends HTMLStencilElement {
    'first': string;
    'last': string;
  }
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-component': JSXElements.MyComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}


declare global {
  interface HTMLZealAmbassadorDetailPageElement extends HTMLStencilElement {

  }
  var HTMLZealAmbassadorDetailPageElement: {
    prototype: HTMLZealAmbassadorDetailPageElement;
    new (): HTMLZealAmbassadorDetailPageElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-ambassador-detail-page': HTMLZealAmbassadorDetailPageElement;
  }
  interface ElementTagNameMap {
    'zeal-ambassador-detail-page': HTMLZealAmbassadorDetailPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-ambassador-detail-page': JSXElements.ZealAmbassadorDetailPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealAmbassadorDetailPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLZealCardGroupElement extends HTMLStencilElement {

  }
  var HTMLZealCardGroupElement: {
    prototype: HTMLZealCardGroupElement;
    new (): HTMLZealCardGroupElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-card-group': HTMLZealCardGroupElement;
  }
  interface ElementTagNameMap {
    'zeal-card-group': HTMLZealCardGroupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-card-group': JSXElements.ZealCardGroupAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealCardGroupAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLZealCtaElement extends HTMLStencilElement {
    'linkHref': string;
    'linkText': string;
  }
  var HTMLZealCtaElement: {
    prototype: HTMLZealCtaElement;
    new (): HTMLZealCtaElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-cta': HTMLZealCtaElement;
  }
  interface ElementTagNameMap {
    'zeal-cta': HTMLZealCtaElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-cta': JSXElements.ZealCtaAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealCtaAttributes extends HTMLAttributes {
      'linkHref'?: string;
      'linkText'?: string;
    }
  }
}


declare global {
  interface HTMLZealPostCardElement extends HTMLStencilElement {
    'description': string;
    'image': string;
    'linkHref': string;
    'linkText': string;
    'title': string;
  }
  var HTMLZealPostCardElement: {
    prototype: HTMLZealPostCardElement;
    new (): HTMLZealPostCardElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-post-card': HTMLZealPostCardElement;
  }
  interface ElementTagNameMap {
    'zeal-post-card': HTMLZealPostCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-post-card': JSXElements.ZealPostCardAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealPostCardAttributes extends HTMLAttributes {
      'description'?: string;
      'image'?: string;
      'linkHref'?: string;
      'linkText'?: string;
      'title'?: string;
    }
  }
}


declare global {
  interface HTMLZealProductCardImageElement extends HTMLStencilElement {
    'imgAlt': string;
    'imgSrc': string;
  }
  var HTMLZealProductCardImageElement: {
    prototype: HTMLZealProductCardImageElement;
    new (): HTMLZealProductCardImageElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-product-card-image': HTMLZealProductCardImageElement;
  }
  interface ElementTagNameMap {
    'zeal-product-card-image': HTMLZealProductCardImageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-product-card-image': JSXElements.ZealProductCardImageAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealProductCardImageAttributes extends HTMLAttributes {
      'imgAlt'?: string;
      'imgSrc'?: string;
    }
  }
}


declare global {
  interface HTMLZealProductCardTitleElement extends HTMLStencilElement {
    'title': string;
  }
  var HTMLZealProductCardTitleElement: {
    prototype: HTMLZealProductCardTitleElement;
    new (): HTMLZealProductCardTitleElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-product-card-title': HTMLZealProductCardTitleElement;
  }
  interface ElementTagNameMap {
    'zeal-product-card-title': HTMLZealProductCardTitleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-product-card-title': JSXElements.ZealProductCardTitleAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealProductCardTitleAttributes extends HTMLAttributes {
      'title'?: string;
    }
  }
}


declare global {
  interface HTMLZealProductCardElement extends HTMLStencilElement {
    'link': string;
  }
  var HTMLZealProductCardElement: {
    prototype: HTMLZealProductCardElement;
    new (): HTMLZealProductCardElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-product-card': HTMLZealProductCardElement;
  }
  interface ElementTagNameMap {
    'zeal-product-card': HTMLZealProductCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-product-card': JSXElements.ZealProductCardAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealProductCardAttributes extends HTMLAttributes {
      'link'?: string;
    }
  }
}


declare global {
  interface HTMLZealProductFavoritesElement extends HTMLStencilElement {
    'heading': string;
  }
  var HTMLZealProductFavoritesElement: {
    prototype: HTMLZealProductFavoritesElement;
    new (): HTMLZealProductFavoritesElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-product-favorites': HTMLZealProductFavoritesElement;
  }
  interface ElementTagNameMap {
    'zeal-product-favorites': HTMLZealProductFavoritesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-product-favorites': JSXElements.ZealProductFavoritesAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealProductFavoritesAttributes extends HTMLAttributes {
      'heading'?: string;
    }
  }
}


declare global {
  interface HTMLZealQuoteBlockElement extends HTMLStencilElement {
    'name': string;
    'quote': string;
  }
  var HTMLZealQuoteBlockElement: {
    prototype: HTMLZealQuoteBlockElement;
    new (): HTMLZealQuoteBlockElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-quote-block': HTMLZealQuoteBlockElement;
  }
  interface ElementTagNameMap {
    'zeal-quote-block': HTMLZealQuoteBlockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-quote-block': JSXElements.ZealQuoteBlockAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealQuoteBlockAttributes extends HTMLAttributes {
      'name'?: string;
      'quote'?: string;
    }
  }
}


declare global {
  interface HTMLZealSecondaryHeroElement extends HTMLStencilElement {
    'bgImage': string;
    'heading': string;
    'preHeading': string;
  }
  var HTMLZealSecondaryHeroElement: {
    prototype: HTMLZealSecondaryHeroElement;
    new (): HTMLZealSecondaryHeroElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-secondary-hero': HTMLZealSecondaryHeroElement;
  }
  interface ElementTagNameMap {
    'zeal-secondary-hero': HTMLZealSecondaryHeroElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-secondary-hero': JSXElements.ZealSecondaryHeroAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealSecondaryHeroAttributes extends HTMLAttributes {
      'bgImage'?: string;
      'heading'?: string;
      'preHeading'?: string;
    }
  }
}


declare global {
  interface HTMLZealSectionElement extends HTMLStencilElement {
    'bgImage': string;
    'heading': string;
    'imagePos': string;
    'linkHref': string;
    'linkText': string;
    'text': string;
  }
  var HTMLZealSectionElement: {
    prototype: HTMLZealSectionElement;
    new (): HTMLZealSectionElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-section': HTMLZealSectionElement;
  }
  interface ElementTagNameMap {
    'zeal-section': HTMLZealSectionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-section': JSXElements.ZealSectionAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealSectionAttributes extends HTMLAttributes {
      'bgImage'?: string;
      'heading'?: string;
      'imagePos'?: string;
      'linkHref'?: string;
      'linkText'?: string;
      'text'?: string;
    }
  }
}


declare global {
  interface HTMLZealCardElement extends HTMLStencilElement {
    'activity': string;
    'bgImage': string;
    'name': string;
    'pagelink': string;
  }
  var HTMLZealCardElement: {
    prototype: HTMLZealCardElement;
    new (): HTMLZealCardElement;
  };
  interface HTMLElementTagNameMap {
    'zeal-card': HTMLZealCardElement;
  }
  interface ElementTagNameMap {
    'zeal-card': HTMLZealCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zeal-card': JSXElements.ZealCardAttributes;
    }
  }
  namespace JSXElements {
    export interface ZealCardAttributes extends HTMLAttributes {
      'activity'?: string;
      'bgImage'?: string;
      'name'?: string;
      'pagelink'?: string;
    }
  }
}


declare global {
  interface HTMLZoIconElement extends HTMLStencilElement {
    'thing': string;
  }
  var HTMLZoIconElement: {
    prototype: HTMLZoIconElement;
    new (): HTMLZoIconElement;
  };
  interface HTMLElementTagNameMap {
    'zo-icon': HTMLZoIconElement;
  }
  interface ElementTagNameMap {
    'zo-icon': HTMLZoIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zo-icon': JSXElements.ZoIconAttributes;
    }
  }
  namespace JSXElements {
    export interface ZoIconAttributes extends HTMLAttributes {
      'thing'?: string;
    }
  }
}


declare global {
  interface HTMLZoPromoBarElement extends HTMLStencilElement {
    'message': string;
  }
  var HTMLZoPromoBarElement: {
    prototype: HTMLZoPromoBarElement;
    new (): HTMLZoPromoBarElement;
  };
  interface HTMLElementTagNameMap {
    'zo-promo-bar': HTMLZoPromoBarElement;
  }
  interface ElementTagNameMap {
    'zo-promo-bar': HTMLZoPromoBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'zo-promo-bar': JSXElements.ZoPromoBarAttributes;
    }
  }
  namespace JSXElements {
    export interface ZoPromoBarAttributes extends HTMLAttributes {
      'message'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
