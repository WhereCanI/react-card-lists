import React from 'react'
import { useMyHook } from '@themikeandersen/react-card-lists'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App