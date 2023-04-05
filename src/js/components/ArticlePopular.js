import { html, nothing } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

import "./Badge";
import "./TextLink";

class ArticlePopular extends LitWithoutShadowDom {
  static properties = {
    to: { type: String, reflect: true },
    rank: { type: String, reflect: true },
    title: { type: String, reflect: true },
    datetime: { type: String, reflect: true },
  };

  render() {
    return html`
      <div class="main-popular-article">
        <div class="article-rank">
          <h1>${this.rank}</h1>
        </div>
        <div class="article-content">
          <text-link
            to="${this.to}"
            contentText="${this.title}"
            type="h3"
          ></text-link>
          <article-writer datetime=${this.datetime}></article-writer>
        </div>
      </div>
    `;
  }
}

customElements.define("article-popular", ArticlePopular);
