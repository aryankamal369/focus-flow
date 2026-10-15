import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Features from '../pages/Features'
import Contact from '../pages/Contact'
import Login from '../features/Login'
import Dashboard from '../pages/Dashboard'
import MyTasks from '../pages/MyTasks'
import FocusMode from '../pages/FocusMode'
import Analytics from '../pages/Analytics'
import Goals from '../pages/Goals'
import Settings from '../pages/Settings'
import LandingPage from '../pages/LandingPage'

const AppRoutes = () => {

    const routes = [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/features',
            element: <Features/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/landingpage',
            element: <LandingPage/>,
            children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'mytasks',
                element: <MyTasks />
            },
            {
                path: 'focusmode',
                element: <FocusMode />
            },
            {
                path: 'analytics',
                element: <Analytics />
            },
            {
                path: 'goals',
                element: <Goals />
            },
            {
                path: 'settings',
                element: <Settings />
            }  
            ]
        }
    ]



    return (
        <Routes>

          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} >

              {route.children?.map((child) => (
                <Route key={child.path} path={child.path} element={child.element} />
              ))}
              
            </Route>
          ))}

        </Routes>
    )

}

export default AppRoutes
