import React, { useRef } from "react";
import Social from './components/Social.tsx'
import Terminal from './components/Terminal.tsx'
import AsciiClock from './components/AsciiClock.tsx'
import './App.css'

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleTerminate = () => {
    console.log("Terminal closed");
  };

  return (
    <>
    <div className='main-div'>
     <Social/>
     <Terminal onTerminate={handleTerminate} inputRef={inputRef} />
    </div>
    <AsciiClock/>
    </>
  );
}

export default App;
