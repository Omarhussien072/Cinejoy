import './index.css';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Movies from './components/Movies/Movies'
import Shows from './components/Shows/Shows'
import MyList from './components/MyList/MyList'
import Layout from './components/Layout/Layout'

function App() {
  const routes = createBrowserRouter([
    {path:'/', element: <Layout /> , children: [
      {index: true, element: <Home />},
      {path: 'movies', element: <Movies />},
      {path: 'series', element: <Shows />},
      {path: 'lists', element: <MyList />}
    ] }
  ])
  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}

export default App
