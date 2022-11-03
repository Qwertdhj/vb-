let searchable = [
    '<a href="./bas/Gentlemen.html"><img class="search_img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/300x450"><p class="search_name">Джентльмены</p></a>',
    '<a href="./bas/Gentlemen.html"><img class="search_img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5ad7f814-8bb5-472c-b6f3-43fa75b65c46/300x450"><p class="search_name">Гоголь. Начало</p></a>',
    '<a href="./bas/Seven-psychopaths.html"><img class="search_img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/a01f767d-adaf-4a00-a9d4-b9d69772feaa/300x450"><p class="search_name">Семь психопатов</p></a>',
    '<a href="./bas/hous_dragon.html"><img class="search_img" src="https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/4939065f-efa2-4192-a3c2-cec534e79e01/300x450"><p class="search_name">Дом Дракона</p></a>',

  ];
  
  const searchInput = document.getElementById('search');
  const searchWrapper = document.querySelector('.wrapper');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
  });
  
  function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  }
  