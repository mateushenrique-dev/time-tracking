import { buscarAPI } from "./service/buscar.js";

(async () => {
  const datas = await buscarAPI();
  const cards = document.querySelector('.cards');

  console.log(datas);

  datas.forEach(({ title }) => {
    const titleFormated = title.toLowerCase().replace(/\s+/g, '');

    cards.innerHTML += `
      <div class="card__wrapper card__${titleFormated}">
        <div class="card">
          <div class="card__header">
            <span class="card__category">${title}</span>
            <span class="card__menu">...</span>
          </div>
          <div class="card__infos">
            <h2 class="card__title">32hrs</h2>
            <p class="card__time">Last Week - 36hrs</p>
          </div>
        </div>
      </div>
    `;
  })
})();
