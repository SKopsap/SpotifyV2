import { Sidebar } from '../containers/Sidebar.js'

function ProfilePage({ user }, path) {
  const state = {}

  return /*html*/ `
      <div class="d-flex">
        ${Sidebar(path)}
        <main>
          <h3>Profile</h3>
          <h6>${user.firstname}</h6>
        </main>
      </div>
    `
}

export default ProfilePage
