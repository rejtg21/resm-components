import React from 'react';
import {render} from 'react-dom';

import {YieldButton} from '../../src/resm-components';

render(
  <YieldButton className="btn btn-success" btnName="Save" loadingText="Teka Lang" onClick={() => {
    
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(true);
      }, 1000);
    })
  }}/>,
  document.getElementById('root')
);
