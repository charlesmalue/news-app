const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

function displayNews(articles) {
  const newsDiv = document.querySelector('#news');

  for (const article of articles) {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    const title = document.createElement('h4');
    title.textContent = article.title;
    articleDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = article.description;
    articleDiv.appendChild(description);

    const link = document.createElement('a');
    link.href = article.url;
    link.textContent = 'Read More';
    articleDiv.appendChild(link);

    newsDiv.appendChild(articleDiv);
  }
}

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    displayNews(data.articles);
  } catch (error) {
    console.error('There was an error!', error);
  }
}

fetchNews();
