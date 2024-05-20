import { RouterProvider, createBrowserRouter  } from 'react-router-dom';

import './App.css'
import Home from './pages/Home/Home';
import PlayersGet from './pages/Backoffice/PlayersGet/PlayersGet';
import TeamsGet from './pages/Backoffice/Teams/Teams';
import PlayersUpdate from './pages/Backoffice/PlayersUpdate/PlayersUpdate';
import TeamUpdate from './pages/Backoffice/TeamUpdate/TeamUpdate';
import Players from './pages/Players/Players';
import UniquePlayer from './pages/UniquePlayer/UniquePlayer';
import Teams from './pages/Teams/Teams';
import UniqueTeam from './pages/UniqueTeam/UniqueTeam';

function App() {

  const pages = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/backoffice/players",
      element:<PlayersGet/>,
    },
    {
      path:"/backoffice/teams",
      element:<TeamsGet/>,
    },
    {
      path:"/backoffice/players/:id",
      element:<PlayersUpdate/>
    },
    {
      path:"/backoffice/teams/:id",
      element:<TeamUpdate/>
    },
    {
      path:"/players",
      element:<Players/>
    },
    {
      path:"/players/:id",
      element:<UniquePlayer/>
    },
    {
      path:"/teams",
      element:<Teams/>
    },
    {
      path:"/teams/:id",
      element:<UniqueTeam/>
    },
  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
