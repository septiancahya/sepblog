const LandingPage = {
  async init() {
    await this._initialData();

    const hero = document.querySelector("#hero > .container");
    const styles = window.getComputedStyle(hero);

    const main = document.querySelector("main > .container");
    const aside = document.querySelector("aside > .container");

    function setMarginInline() {
      const marginLeft = styles.getPropertyValue("margin-left");
      main.style.marginInlineStart = marginLeft;
      aside.style.marginInlineEnd = marginLeft;
    }

    window.addEventListener("load", () => setMarginInline());
    window.addEventListener("resize", () => setMarginInline());
  },

  async _initialData() {
    const fetchData = await fetch("/data/articles.json");
    const responseData = await fetchData.json();
    this._listArticle = responseData.result;
    this._populateArticletoCard(this._listArticle);
    this._populateImagetoGallery(this._listArticle);
  },

  _populateArticletoCard(listArticle = null) {
    if (!(typeof listArticle === "object")) {
      throw new Error(`Parameter responRecords should be an object`);
    }

    if (!Array.isArray(listArticle)) {
      throw new Error(`Parameter transactionHistory should be an array`);
    }

    const newestArticleSection = document.querySelector("#newest-articles");
    const gallerySection = document.querySelector(".gallery-container");
    let count = 0;

    newestArticleSection.innerHTML = "";
    if (listArticle.length <= 0) {
      newestArticleSection.innerHTML = this._templateEmptyCard();
      return;
    }

    newestArticleSection.innerHTML = "<h2 class='section-title'>Artikel</h2>";
    listArticle.forEach((item, idx) => {
      if (count < 3) {
        newestArticleSection.innerHTML += this._templateCard(listArticle[idx]);
        count++;
      }
      gallerySection.innerHTML += this._templateGallery(listArticle[idx]);
    });
    newestArticleSection.innerHTML +=
      "<a class='button' href='#'>Tampilkan Semua</a>";
  },

  _templateCard(articleItem) {
    return `
    <article-card
      imageUrl="${articleItem.imageUrl}"
      title="${articleItem.title}"
      description="${articleItem.description}"
      to="#"
      category="${articleItem.category}"
      writerImage="${articleItem.writer["imageUrl"]}"
      writerName="${articleItem.writer["name"]}"
      datetime="${articleItem.date}"
    ></article-card>
    `;
  },

  _templateGallery(imageItem) {
    return `
    <img src="${imageItem.imageUrl}" alt="" />
    `;
  },
};

export default LandingPage;
