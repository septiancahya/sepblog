const SingleArticle = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch("/data/articles.json");
    const responseRecords = await fetchRecords.json();
    const articlesData = responseRecords.result;

    this._populateArticletoCard(articlesData);
  },

  _populateArticletoCard(articleData) {
    const articleId = Number(this._getArticleId());
    if (!articleId) {
      alert("Data dengan id yang dicari tidak ditemukan");
      return;
    }

    if (!(typeof articleData === "object")) {
      throw new Error(`Parameter responRecords should be an object`);
    }

    const articleItem = articleData.find((item) => item.id === articleId);
    const singleArticleSection = document.querySelector("#single-article");
    singleArticleSection.innerHTML += this._templateSingleArticle(articleItem);

    if (!Array.isArray(articleData)) {
      throw new Error(`Parameter listArticle should be an array`);
    }

    const popularArticleSection = document.querySelector(
      ".popular-articles-wrapper"
    );

    articleData.forEach((item, idx) => {
      popularArticleSection.innerHTML += this._templatePopularCard(
        articleData[idx],
        idx
      );
    });
  },

  _templateSingleArticle(articleItem) {
    return `
    <article-single
      imageUrl="${articleItem.imageUrl}"
      title="${articleItem.title}"
      description="${articleItem.description}"
      category="${articleItem.category}"
      writerImage="${articleItem.writer["imageUrl"]}"
      writerName="${articleItem.writer["name"]}"
      datetime="${articleItem.date}"
    ></article-single>
    `;
  },

  _templatePopularCard(articleItem, idx) {
    return `
    <article-popular
      rank=${idx + 1}
      title="${articleItem.title}"
      to="/single-article.html?id=${articleItem.id}"
      datetime="${articleItem.date}"
    ></article-popular>
    `;
  },

  _getArticleId() {
    const searchParam = new URLSearchParams(window.location.search);
    return searchParam.has("id") ? searchParam.get("id") : null;
  },
};

export default SingleArticle;
