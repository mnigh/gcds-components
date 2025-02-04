import { newSpecPage } from '@stencil/core/testing';

jest.mock('../assets/sig-blk-en.svg', () => ("Government of Canada"));
jest.mock('../assets/sig-blk-fr.svg', () => ("Gouvernement du Canada"));
jest.mock('../assets/wmms-spl-en.svg', () => ("Symbol of the Government of Canada"));
jest.mock('../assets/wmms-spl-fr.svg', () => ("Symbole du Gouvernement du Canada"));

import { GcdsSignature } from '../gcds-signature';

describe('gcds-signature', () => {
  it('renders: Signature - English - no link', async () => {
    const page = await newSpecPage({
      components: [GcdsSignature],
      html: `<gcds-signature type="signature" lang="en"></gcds-signature>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-signature lang="en" type="signature">
        <div>
          Government of Canada
        </div>
      </gcds-signature>
    `);
  });
  it('renders: Signature - English - has link', async () => {
    const page = await newSpecPage({
      components: [GcdsSignature],
      html: `<gcds-signature type="signature" lang="en" has-link="true"></gcds-signature>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-signature lang="en" type="signature" has-link="true">
        <a href="https://canada.ca/en.html">
          Government of Canada
        </a>
      </gcds-signature>
    `);
  });
  it('renders: Signature - French - no link', async () => {
    const page = await newSpecPage({
      components: [GcdsSignature],
      html: `<gcds-signature type="signature" lang="fr"></gcds-signature>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-signature lang="fr" type="signature">
        <div>
          Gouvernement du Canada
        </div>
      </gcds-signature>
    `);
  });
  it('renders: Signature - French - has link', async () => {
    const page = await newSpecPage({
      components: [GcdsSignature],
      html: `<gcds-signature type="signature" lang="fr" has-link="true"></gcds-signature>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-signature lang="fr" type="signature" has-link="true">
        <a href="https://canada.ca/fr.html">
          Gouvernement du Canada
        </a>
      </gcds-signature>
    `);
  });

  it('renders: wordmark - English', async () => {
    const page = await newSpecPage({
      components: [GcdsSignature],
      html: `<gcds-signature type="wordmark" lang="en"></gcds-signature>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-signature lang="en" type="wordmark">
        <div>
          Symbol of the Government of Canada
        </div>
      </gcds-signature>
    `);
  });
  it('renders: wordmark - French', async () => {
    const page = await newSpecPage({
      components: [GcdsSignature],
      html: `<gcds-signature type="wordmark" lang="fr"></gcds-signature>`,
    });
    expect(page.root).toEqualHtml(`
      <gcds-signature lang="fr" type="wordmark">
        <div>
          Symbole du Gouvernement du Canada
        </div>
      </gcds-signature>
    `);
  });
});
