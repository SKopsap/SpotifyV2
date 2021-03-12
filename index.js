// App imports - my tiny framework specifics to make it all work
import { router } from './router.js'

// pages
import HomePage from './pages/HomePage.js'
import ProfilePage from './pages/ProfilePage.js'

function App() {
  const state = {
    data: [
      {
        title: 'Night Nurse',
        artist: 'Gregory Issacs',
        album: '2011',
        length: 4.09
      },
      {
        title: 'Drive',
        artist: 'The Cars',
        album: 'Complete Greatest Hits',
        length: 3.57
      },
      {
        title: 'Hungry for the power',
        artist: 'Jamie Jones',
        album: '2011',
        length: 3.57
      }
    ],
    user: {
      firstname: 'Sean',
      lastname: 'Knowles',
      email: 's@seanknowles.dev'
    }
  }

  const routes = [
    { path: '/', component: HomePage },
    { path: '/profile', component: ProfilePage }
  ]

  // pass routes object and also global app state down to each page
  router(routes, state)
}

App()
