import React, { useState } from 'react';

const SortedArray = ({ arr }) => {
  const [display, setDisplay] = useState(false);

  const sortedArr = arr;

  const countObj = {};
  const sortFunc = () => {
    // console.log('sortFunc called');
    // console.log(sortedArr.sort((a, b) => a - b));
    for (const key of sortedArr.sort((a, b) => a - b)) {
      if (countObj.hasOwnProperty(key)) {
        countObj[key] += 1;
      } else {
        countObj[key] = 1;
      }
    }
    // console.log(countObj);
    const result = Object.entries(countObj).sort((a, b) => b[1] - a[1]);
    // console.log(result);
    console.log(Object.entries(countObj).sort((a, b) => b[1] - a[1]));
    let input = [];
    for (let i = 0; i < result.length; i++) {
      console.log(result[i][0], result[i][1]);
      input.push(result[i][0].repeat(result[i][1]).split(''));
    }
    return input.flat(1);
  };

  const handleDisplay = () => {
    sortFunc();
    // console.log('display clicked');
    if (window.confirm('are you sure?')) {
      setDisplay(!display);
    } else {
      alert('sorting aborted.');
    }

    //arr.sort((a,b)=>a-b)
  };

  return (
    <div>
      <h4>i am sorted array</h4>
      <button className='btn btn-warning' onClick={handleDisplay}>
        Sort
      </button>
      {display && (
        <div className='sorted-array'>
          {sortedArr.length >= 1 &&
            sortFunc().map((item, i) => {
              return (
                <div key={i} className='array-item'>
                  <p>
                    <strong>{item}</strong>
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SortedArray;
