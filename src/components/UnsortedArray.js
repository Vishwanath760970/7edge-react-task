import React from 'react';

import './arrayStyles.css';

const UnsortedArray = ({ arr }) => {
  return (
    <div>
      <p>i am unsorted array</p>
      <div className='sorted-array'>
        {arr.length >= 1 &&
          arr.map((item, i) => {
            return (
              <div key={i} className='array-item'>
                <p>
                  <strong>{item}</strong>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UnsortedArray;
