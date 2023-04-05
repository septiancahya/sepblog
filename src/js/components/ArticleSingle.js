import { html, nothing } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

import "./Badge";
import "./TextLink";

class ArticleSingle extends LitWithoutShadowDom {
  static properties = {
    title: { type: String, reflect: true },
    imageUrl: { type: String, reflect: true },
    category: { type: String, reflect: true },
    description: { type: String, reflect: true },
    writerImage: { type: String, reflect: true },
    writerName: { type: String, reflect: true },
    datetime: { type: String, reflect: true },
  };

  render() {
    const categoryItem = this.category.split(",");
    return html`
      <article class="single-article">
        ${categoryItem.map((item) => {
          return html` <badge-category content=${item}></badge-category> `;
        })}
        <text-link
          to="${this.to}"
          contentText="${this.title}"
          type="h2"
        ></text-link>
        <span>Oleh: <b>${this.writerName}</b>, ${this.datetime}</span>
        <figure class="article-image">
          <img src="${this.imageUrl}" alt="" />
        </figure>
        <p>${this.description}</p>
      </article>
    `;
  }
}

customElements.define("article-single", ArticleSingle);
