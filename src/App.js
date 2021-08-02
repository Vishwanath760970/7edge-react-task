import { useState } from 'react';

import './components/arrayStyles.css';
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
    <div className='App'>
      <div className='container'>
        <div className='row border border-dark'>
          <div className='col-12 col-sm-8 col-md-8 col-lg-10 col-xl-12 text-center shadow-lg'>
            <h1>
              <em>Array sort</em>
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label className='mx-auto'>
                  <h3>Enter Array Number</h3>{' '}
                </label>
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
          </div>
        </div>
      </div>
      {/*un sorted array*/}
      <div className='container'>
        <div className='row'>
          <UnsortedArray arr={arr} />
        </div>
      </div>

      {/*sorted array*/}
      <div className='container'>
        <div className='row'>
          <SortedArray arr={arr} />
        </div>
      </div>
    </div>
  );
}
