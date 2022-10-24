import './App.css';
import { useState, useRef } from "react";
import Header from './components/Header';
import ButtonBox from './components/ButtonBox';

function App() {
  const [title] = useState("calc");
  const inputRef = useRef(null);
  
  const handleButtonClick = (e) => {
    e.preventDefault();
    if(e.target.innerHTML === 'X') {
      inputRef.current.value += '*';
    } else if(e.target.innerHTML === '=' && e.target.innerHTML === '.') {
        alert("Please enter a valid mathmatical expression.")
    } else if(e.target.innerHTML === 'DEL') {
      inputRef.current.value = inputRef.current.value.toString().slice(0, -1);
    } else if(e.target.innerHTML === 'RESET') {
      inputRef.current.value = '';
    } else if(e.target.innerHTML === '=') {
      inputRef.current.value = eval(inputRef.current.value);
    } else {
      inputRef.current.value += e.target.innerHTML;
    }

  }
  return (
   <div className="m-5 flex xl:h-screen justify-center items-center space-x-4">
    <main className="mx-auto w-[30em] rounded-md shadow-xl z-[100]">
     
      <Header title={title} />

      <input ref={inputRef} id="inputBox" type="text" name="output" placeholder="0" disabled="disabled" className="disabledInput bg-[#181f32] p-6 text-5xl text-right font-bold text-white rounded-md w-[100%]" />

      <ButtonBox handleButtonClick={handleButtonClick} />

    </main>
  </div>
  );
}

export default App;
