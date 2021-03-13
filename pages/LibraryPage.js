import { Sidebar } from '../containers/Sidebar.js'
import { Playbar } from '../components/PlaybarComponent.js'

export default async function LibraryPage() {
  return /*html*/ `
  <div class="d-flex">
    ${Sidebar()}
    <main>
      <h3>AlbumPage</h3>
      <h6></h6>
    </main>
    <footer>
      ${Playbar()}
    </footer>
  </div>
  `
}
