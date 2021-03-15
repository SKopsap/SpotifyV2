import { Card } from '../components/CardComponent.js'

function Section(title, data) {
  // make more cards
  function cardList() {
    return `
      ${data.map((data) => `${Card(data.title, data.name, data.cover_medium, data.picture_medium)}`).join('')}
    `
  }

  return /*html*/ `
    <section class="mt-3">
      <h4 class="text-white mb-3">${title}</h4>
      <div class="row flex-nowrap">
        ${cardList()}
      </div>
    <section>
  `
}

export { Section }
