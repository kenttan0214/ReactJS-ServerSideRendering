import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello }  from '../common/components/dummyCard/dummyCard';

ReactDOM.render(
    <div>
      <Hello compiler="TypeScript" framework="React"/>
    </div>,
    document.querySelector('[data-role="app"]')
);
