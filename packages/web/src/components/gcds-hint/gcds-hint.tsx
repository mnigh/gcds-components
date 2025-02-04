import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-hint',
  styleUrl: 'gcds-hint.css',
  shadow: false,
  scoped: true,
})
export class GcdsHint {
  @Element() el: HTMLElement;


  /**
   * Props
   */

  /**
   * Hint displayed below the label and above the input field.
   */
  @Prop() hint?: string;

  /**
   * Id attribute for the hint.
   */
  @Prop() hintId: string;

  render() {
    const { hint, hintId } = this;

    return (
      <Host id={`hint-${hintId}`}>
        <p class="gcds-hint">{hint}</p>
      </Host>
    );
  }
}
