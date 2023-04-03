import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class Badge extends LitWithoutShadowDom {
  static properties = {
    content: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
  }

  render() {
    return html` <span class="badge">${this.content}</span> `;
  }
}

customElements.define("badge-category", Badge);
