import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createClient } from '@supabase/supabase-js'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

const supabase = createClient(
  "https://nmyqsypazgzfwvfvkyzz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5teXFzeXBhemd6Znd2ZnZreXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MTA5NjMsImV4cCI6MjA2MzA4Njk2M30.OjoQSkl9J9l8MSGSAZLRfgEInKakx5Ms6rNdi2lnsdc"
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </StrictMode>,
)
