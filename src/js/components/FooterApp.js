import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class FooterApp extends LitWithoutShadowDom {
  render() {
    return html`
      <p>&copy; 2023 - Septian Cahya</p>
      <p>Belajar Pemrograman Web - Dicoding</p>
    `;
  }
}

customElements.define("footer-app", FooterApp);
