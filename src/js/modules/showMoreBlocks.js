import {getResourse} from "../services/requests";

const showMoreBlocks = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  // cards.forEach(card => {
  //   card.classList.add('animated', 'fadeInUp');
  // });

  // btn.addEventListener('click', () => {
  //   cards.forEach(card => {
  //     card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //     card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //   });
  //   btn.remove();
  // });

  btn.addEventListener('click', function () {
    getResourse('http://localhost:3000/styles')
      .then(res => createCards(res))
      .catch(() => {
        let statusMessage = document.createElement('div');
        statusMessage.textContent = "Ошибка! Что-то пошло не так.";
        statusMessage.classList.add('_status-msg', 'animated', 'fadeIn');
        document.querySelector(wrapper).appendChild(statusMessage);
      });

    this.remove();
  });

  function createCards(response) {
    response.forEach(({src, title, link}) => {
      let card = document.createElement('div');

      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

      card.innerHTML = `
        <div class= "styles-block">
          <img src=${src} alt="style">
          <h4>${title}</h4> 
          <a href=${link}>Подробнее</a> 
        </div>      
      `;

      document.querySelector(wrapper).appendChild(card);
    });
  }
};

export default showMoreBlocks;