import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import "./IconLinks";

class WriterAbout extends LitWithoutShadowDom {
  static properties = {
    imageUrl: {
      type: String,
      reflect: true,
    },
    name: {
      type: String,
      reflect: true,
    },
    address: {
      type: String,
      reflect: true,
    },
    email: {
      type: String,
      reflect: true,
    },
  };

  render() {
    return html`
      <div class="main-writer">
        <div class="writer-image">
          <img src="${this.imageUrl}" alt="${this.name}" />
        </div>
        <div class="writer-description">
          <ul>
            <li><strong>${this.name}</strong></li>
            <li>${this.address}</li>
            <li>${this.email}</li>
          </ul>
        </div>
        <div class="writer-socmed">
          <icon-links></icon-links>
        </div>
      </div>
    `;
  }
}

customElements.define("writer-about", WriterAbout);
