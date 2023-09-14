import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Switch, Case, Default } from '../dist';

const App = () => {
  return (
    <div>
      <Switch expression="cat">
        <Case value="pig">pig</Case>
        <Case value="monkey">monkey</Case>
        <Case value="cat">cat</Case>
        <Case value="cat">fake cat</Case>
        <Default>nothing</Default>
      </Switch>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
