import Social from './components/Social.tsx'
import Terminal from './components/Terminal.tsx'
import AsciiClock from './components/AsciiClock.tsx'
import './App.css'

function App() {

  return (
    <>
    <div className='main-div'>
     <Social/>
     <Terminal/>
    </div>
    <AsciiClock/>
    </>
  )
}

export default App
