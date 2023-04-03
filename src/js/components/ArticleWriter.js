import { html, nothing } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class ArticleWriter extends LitWithoutShadowDom {
  static properties = {
    imageUrl: {
      type: String,
      reflect: true,
    },
    name: {
      type: String,
      reflect: true,
    },
    datetime: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <figure>
        <img src="${this.imageUrl || nothing}" alt="" />
        <figcaption>
          <h5>${this.name}</h5>
          <p>${this.datetime}</p>
        </figcaption>
      </figure>
    `;
  }
}

customElements.define("article-writer", ArticleWriter);
