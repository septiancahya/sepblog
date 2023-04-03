import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class NavLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul aria-label="Primary" role="list" class="nav-list">
        <nav-link content="Home" to="#"></nav-link>
        <nav-link content="Artikel" to="#newest-articles"></nav-link>
        <nav-link content="Galeri" to="#gallery"></nav-link>
      </ul>
    `;
  }
}

customElements.define("nav-links", NavLinks);
