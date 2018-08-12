# yied-button
A React component that handle the disabling of button when clicked synchronous/asynchronously and changing the english text of it to progressive form.

# Prerequisite
- ReactJS

# Installation

```
working in progress
```

# Usage
- For Webpack use `import {YieldButton} from 'resm-react-components';`
- For Gulp/Grunt use `require 'resm-react-components';`

- Reserved Props: 
  - `btnName` - Text in button to be displayed to user.
  - `loadingText` - If for instance you want your own translation for the loading text.
```
import React from 'react';
import {render} from 'react-dom';

import {YieldButton} from '../../src/resm-components';

render(
  <YieldButton className="btn btn-success" btnName="Save" loadingText="Teka Lang" onClick={this.sampleFunction}/>,
  document.getElementById('root')
);
```
- It will automatically disable the button and adjust the text specified on a progressive form. e.g. `Save` becomes `Saving ...`
- For asynchronous function for the component to know when it will end. You need to return the promise.
```
function sampleFunction() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(true);
      }, 1000);
    })
}
```

# To Be Updated
- Test Script
