import React from 'react';

import './arrayStyles.css';

const UnsortedArray = ({ arr }) => {
  return (
    <div className='col-12 col-sm-6 col-md-8 col-lg-10 col-xl-12 text-center'>
      <h3>I am unsorted array</h3>
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
