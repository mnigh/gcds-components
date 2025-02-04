import { newSpecPage } from '@stencil/core/testing';
import { GcdsGrid} from '../gcds-grid';

describe('gcds-grid', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GcdsGrid],
      html: `
        <gcds-grid columns="1fr 1fr" tag="ul" />
      `,
    });
    expect(root).toEqualHtml(`
      <gcds-grid columns="1fr 1fr" tag="ul">
        <mock:shadow-root>
          <ul class="container-full display-grid gcds-grid" style="grid-template-columns: 1fr 1fr;">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </gcds-grid>
    `);
  });
});
