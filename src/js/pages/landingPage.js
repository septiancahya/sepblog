const LandingPage = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchData = await fetch("/data/articles.json");
    const responseData = await fetchData.json();
    this._listArticle = responseData.result;
    this._populateArticletoCard(this._listArticle);
  },

  _populateArticletoCard(listArticle = null) {
    if (!(typeof listArticle === "object")) {
      throw new Error(`Parameter responRecords should be an object`);
    }

    if (!Array.isArray(listArticle)) {
      throw new Error(`Parameter listArticle should be an array`);
    }

    const newestArticleSection = document.querySelector("#newest-articles");
    const popularArticleSection = document.querySelector(
      ".popular-articles-wrapper"
    );
    const gallerySection = document.querySelector(".gallery-container");
    let count = 0;

    if (listArticle.length <= 0) {
      newestArticleSection.innerHTML = this._templateEmptyCard();
      return;
    }

    listArticle.forEach((item, idx) => {
      if (count < 3) {
        newestArticleSection.innerHTML += this._templateNewestCard(
          listArticle[idx]
        );
        count++;
      }
      popularArticleSection.innerHTML += this._templatePopularCard(
        listArticle[idx],
        idx
      );
      gallerySection.innerHTML += this._templateGallery(listArticle[idx]);
    });
    newestArticleSection.innerHTML +=
      "<a class='button' href='#'>Tampilkan Semua</a>";
  },

  _templateNewestCard(articleItem) {
    const description = this._truncateString(articleItem.description, 160);
    return `
    <article-card
      imageUrl="${articleItem.imageUrl}"
      title="${articleItem.title}"
      description="${description}"
      to="/single-article.html?id=${articleItem.id}"
      category="${articleItem.category}"
      writerImage="${articleItem.writer["imageUrl"]}"
      writerName="${articleItem.writer["name"]}"
      datetime="${articleItem.date}"
    ></article-card>
    `;
  },

  _templatePopularCard(articleItem, idx) {
    return `
    <article-popular
      rank=${idx + 1}
      title="${articleItem.title}"
      to="#"
      datetime="${articleItem.date}"
    ></article-popular>
    `;
  },

  _templateGallery(imageItem) {
    return `
    <img src="${imageItem.imageUrl}" alt="" />
    `;
  },

  _truncateString(str, num) {
    if (str.length >= num) {
      const lastSpaceIndex = str.lastIndexOf(" ", num);
      if (lastSpaceIndex === -1) {
        return str.slice(0, num) + "...";
      }
      return str.slice(str, lastSpaceIndex) + "...";
    }
    return str;
  },
};

export default LandingPage;
