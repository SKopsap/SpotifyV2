import { Navbar } from '../components/NavbarComponent.js'

function Sidebar(path) {
  return /*html*/ `
    <div style="min-height: 100vh; background-color: black; width: 200px">
      ${Navbar(path)}
    </div>
  `
}

export { Sidebar }
