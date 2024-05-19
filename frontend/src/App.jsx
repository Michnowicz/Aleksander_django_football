import { RouterProvider, createBrowserRouter  } from 'react-router-dom';

import './App.css'
import Home from './pages/Home/Home';
import PlayersGet from './pages/Backoffice/PlayersGet/PlayersGet';
import TeamsGet from './pages/Backoffice/Teams/Teams';
import PlayersUpdate from './pages/Backoffice/PlayersUpdate/PlayersUpdate';

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
    }
  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
