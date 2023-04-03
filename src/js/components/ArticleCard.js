import { html, nothing } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

import "./Badge";
import "./TextLink";
import "./ArticleWriter";

class ArticleCard extends LitWithoutShadowDom {
  static properties = {
    to: { type: String, reflect: true },
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
      <article>
        <figure class="article-image">
          <img src="${this.imageUrl}" alt="" />
        </figure>
        <div class="article-content">
          <div class="top-content">
            ${categoryItem.map((item) => {
              return html` <badge-category content=${item}></badge-category> `;
            })}
          </div>
          <div class="middle-content">
            <text-link
              to="${this.to}"
              contentText="${this.title}"
              type="h1"
            ></text-link>
            <p>
              ${this.description}
              <text-link
                to="#"
                contentText="Baca selengkapnya"
                type="p"
              ></text-link>
            </p>
          </div>
          <div class="bottom-content">
            <article-writer
              imageUrl=${this.writerImage || nothing}
              name=${this.writerName}
              datetime=${this.datetime}
            ></article-writer>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define("article-card", ArticleCard);
