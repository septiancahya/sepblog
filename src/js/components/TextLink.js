import { html, nothing } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class TextLink extends LitWithoutShadowDom {
  static properties = {
    to: {
      type: String,
      reflect: true,
    },
    contentText: {
      type: String,
      reflect: true,
    },
    contentIcon: {
      type: String,
      reflect: true,
    },
    type: {
      type: String,
      reflect: true,
    },
    classes: {
      type: String,
      reflect: true,
    },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <a href="${this.to}" class="${this.classes || nothing}"
        >${this._textLinkTemplate()}</a
      >
    `;
  }

  _textLinkTemplate() {
    let iconTemplate = "";
    if (this.contentIcon) {
      iconTemplate = html`<i class="${this.contentIcon}"></i>`;
    }

    let textTemplate = "";
    if (this.contentText) {
      if (this.type == "h1") {
        textTemplate = html`<h1>${this.contentText}</h1>`;
      } else if (this.type == "h2") {
        textTemplate = html`<h2>${this.contentText}</h2>`;
      } else {
        textTemplate = html`${this.contentText}`;
      }
    }

    return html`${iconTemplate}${textTemplate}`;
  }
}

customElements.define("text-link", TextLink);
