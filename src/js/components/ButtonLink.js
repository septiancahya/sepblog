import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class ButtonLink extends LitWithoutShadowDom {
  static properties = {
    to: {
      type: String,
      reflect: true,
    },
    content: {
      type: String,
      reflect: true,
    },
    classes: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.classes = "";
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute("to")) {
      throw new Error(
        `Atribut "to" harus diterpkan pada elemen ${this.localName}`
      );
    }
    if (!this.hasAttribute("content")) {
      throw new Error(
        `Atribut "content" harus diterpkan pada elemen ${this.localName}`
      );
    }
  }

  render() {
    return html`
      <a class="${this.classes}" href=${this.to}> ${this.content} </a>
    `;
  }
}

customElements.define("button-link", ButtonLink);
