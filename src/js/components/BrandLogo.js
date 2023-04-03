import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class BrandLogo extends LitWithoutShadowDom {
  static properties = {
    name: {
      type: String,
      reflect: true,
    },
    nameSpan: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute("name")) {
      throw new Error(
        `Atribut "name" harus diterapkan pada elemen ${this.localName}`
      );
    }
  }

  render() {
    return html`
      <div class="logo" id="logo">
        <a href="#"
          ><h1>${this.name}<span>${this.nameSpan}</span></h1></a
        >
      </div>
    `;
  }
}

customElements.define("brand-logo", BrandLogo);
