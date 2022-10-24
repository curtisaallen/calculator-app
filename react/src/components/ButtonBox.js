import React from 'react'

const ButtonBox = props => {
    return (
        <div className="bg-[#181f32] p-6 mt-5 text-white rounded-md">

            <div className="grid grid-cols-4 gap-3">
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">7</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">8</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">9</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#64719d] p-4 rounded-md font-bold text-white text-2xl hover:bg-[#a2b3e1]">DEL</button>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-3">
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">4</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">5</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">6</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">+</button>
            </div>


            <div className="grid grid-cols-4 gap-3 mt-3">
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">1</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">2</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">3</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">-</button>
            </div>


            <div className="grid grid-cols-4 gap-3 mt-3">
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">.</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">0</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">/</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#eae3db] p-4 rounded-md font-bold text-[#3e4454] text-2xl hover:bg-white">X</button>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#64719d] p-4 rounded-md font-bold text-white text-2xl hover:bg-[#a2b3e1]">RESET</button>
            <button onClick={e => props.handleButtonClick(e)} className="bg-[#d13f30] p-4 rounded-md font-bold text-white text-2xl hover:bg-[#f96c5b]">=</button>
            </div>

        </div>
    )
  }

  export default ButtonBox;