import { useState } from 'react';

import UnsortedArray from './components/UnsortedArray';
import SortedArray from './components/SortedArray';

export default function App() {
  const [arr, setArr] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInput = (e) => {
    const result = e.target.value;
    setInputText(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, inputText]);
    setInputText('');
  };

  // console.log(arr, 'array');
  return (
    <div className='App '>
      <h1>Array sort</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Array Number </label>
          <input
            type='text'
            value={inputText}
            onChange={handleInput}
            placeholder='enter number to add'
          />
        </div>
        <input
          className='btn btn-primary pt-5'
          type='submit'
          value='add number'
        />
      </form>
      <UnsortedArray arr={arr} />
      <SortedArray arr={arr} />
    </div>
  );
}
