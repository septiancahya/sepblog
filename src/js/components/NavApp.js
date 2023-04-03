import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class NavApp extends LitWithoutShadowDom {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <nav>
        <div class="container">
          <brand-logo name="Sep" nameSpan="Blog"></brand-logo>
          <button
            class="mobile-nav-toggle"
            aria-controls="navigation"
            aria-expanded="false"
          ></button>
          <div class="navigation" id="navigation">
            <nav-links></nav-links>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-app", NavApp);
