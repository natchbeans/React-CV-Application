import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GeneralInfo from './components/GeneralInfo.jsx'
import EducationExp from './components/EducationExp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <EducationExp />
  </StrictMode>,
)
