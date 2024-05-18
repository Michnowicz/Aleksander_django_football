import { RouterProvider, createBrowserRouter  } from 'react-router-dom';

import './App.css'
import Home from './pages/Home/Home';

function App() {

  const pages = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
