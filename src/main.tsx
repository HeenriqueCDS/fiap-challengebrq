import React from 'react'
import ReactDOM from 'react-dom/client'
import { SaasProvider } from '@saas-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import { GaragePage } from './pages/garage'

import { theme } from './styles/theme'
import { SecurityPage } from './pages/security'
import { HousePage } from './pages/house'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <GaragePage />
      },
      {
        path: "/security",
        element: <SecurityPage />
      },
      {
        path: "/house",
        element: <HousePage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SaasProvider theme={theme}>
      <RouterProvider router={router} />
    </SaasProvider>
  </React.StrictMode>
)
