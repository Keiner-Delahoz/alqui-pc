import { Routes, Route } from 'react-router-dom'
import Form from '../src/components/Form/Rental_form'
import Invoice from '../src/components/Invoice/Invoice'

import './App.css'

function App() {

  return (
      <Routes>
         <Route path='/' element={<Form/>}/>
         <Route path='/invoice' element={<Invoice/>}/>
      </Routes>
  )
}

export default App
