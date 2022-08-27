import { useState, useEffect } from 'react'
import SplashScreen from './components/UI/SplashScreen';
import Desktop from './components/main/Desktop';
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 6000)
  }, [])

  return (
    <>
     {showSplash && <SplashScreen />}
     <Desktop />
    </>
  )
}

export default App
