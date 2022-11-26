import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import AllPosts from './components/AllPosts'
import MessageBoard from './components/MessageBoard'
import Navbar from './components/Navbar'
import PostView from './components/PostView'
import Welcome from './components/Welcome'
import './App.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout></Layout>,
    children: [
      {
        path:"",
        element: <MessageBoard></MessageBoard>,
        children: [
        {
          path:":pageNumber",
          element: <AllPosts></AllPosts>,
        },
        {
          path:"post/:postId",
          element: <PostView></PostView>,
        }
        ]
      },
      {      
        path:"welcome",
        element: <Welcome></Welcome>,
      }
    ]
  }
])



function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App

function Layout() {
  return <>
    <Navbar></Navbar>
    <Outlet></Outlet>
  </>
}