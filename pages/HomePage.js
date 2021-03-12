import { Sidebar } from '../containers/Sidebar.js'
import { Card } from '../components/CardComponent.js'

// testing css in js style api for a card component
const cardCSS = {
  width: '300px'
}

function HomePage(state, path) {
  // creating new card list component using a card component
  function cardList() {
    return `
      ${state.data.map((song) => `${Card(song, cardCSS)}`).join('')}
    `
  }

  return /*html*/ `
    <div class="d-flex">
      <div>
        ${Sidebar(path)}
      </div>
      <main class="container-fluid">
        <h3>Home</h3>
        ${cardList()}
      </main>
    </div>
  `
}

export default HomePage
