import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
BrowserRouter
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
// Create a client
const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
         <QueryClientProvider  client={queryClient}> 
          <App />
        </QueryClientProvider>
    </BrowserRouter>
    
 
)
