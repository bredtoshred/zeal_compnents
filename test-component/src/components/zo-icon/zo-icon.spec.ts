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
        expect(imgEl.src).toEqual('asdfasdfs');
    });

  });
});