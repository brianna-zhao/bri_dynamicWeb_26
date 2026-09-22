import { useState } from 'react'
import TabPage from './pages/TabPage.jsx'

// Right now App is doing the job of a page. Next week we add routes
// so each of these gets its own url.
const App = () => {
  return (
    <div className="container mx-auto mt-4">
      <TabPage/>
    </div>
  )
}


export default App
