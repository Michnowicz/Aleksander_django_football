import { RouterProvider, createBrowserRouter  } from 'react-router-dom';

import './App.css'
import Home from './pages/Home/Home';
import PlayersGet from './pages/Backoffice/PlayersGet/PlayersGet';
import TeamsGet from './pages/Backoffice/Teams/Teams';

function App() {

  const pages = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/Backoffice/players",
      element:<PlayersGet/>,
    },
    {
      path:"/Backoffice/teams",
      element:<TeamsGet/>,
    },
  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
