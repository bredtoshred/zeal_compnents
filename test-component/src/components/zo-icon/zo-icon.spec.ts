import { flush, render } from '@stencil/core/testing';
import { ZoIcon } from './zo-icon';

describe('zo-icon', () => {
  it.skip('should build', () => {
    expect(new ZoIcon()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [ZoIcon],
        html: '<zo-icon></zo-icon>'
      });
    });

    it('should update alt when type is set', async () => {
        element.type = 'close';
        let imgEl = element.querySelector('img');
        await flush(element);
        expect(imgEl.alt).toEqual('close icon');
    });
    
    it('should update path when type is set', async () => {
        element.type = 'close';
        let imgEl = element.querySelector('img');
        await flush(element);
        expect(imgEl.src).toEqual('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDkgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDkuMiAoNTExNjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmNsb3NlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJjbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIHBvaW50cz0iMS41IDAgNC41IDMgNy41IDAgOSAxLjUgNiA0LjUgOSA3LjUgNy41IDkgNC41IDYgMS41IDkgMCA3LjUgMyA0LjUgMCAxLjUiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+');
    });

  });
});