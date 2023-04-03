import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import "./TextLink";

class IconLinks extends LitWithoutShadowDom {
  render() {
    return html`
      <ul class="socmed-list">
        <li>
          <text-link
            to="https://www.instagram.com/sepcaa/"
            contentIcon="fa-brands fa-instagram fa-xl"
          ></text-link>
        </li>
        <li>
          <text-link
            to="#"
            contentIcon="fa-brands fa-linkedin fa-xl"
          ></text-link>
        </li>
        <li>
          <text-link
            to="https://github.com/septiancahya"
            contentIcon="fa-brands fa-github fa-xl"
          ></text-link>
        </li>
      </ul>
    `;
  }
}

customElements.define("icon-links", IconLinks);
