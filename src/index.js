import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    return (
        <div>
            <HookSwitcher />
        </div>
    )
};

const HookSwitcher = () => {

    return (
        <div style={{ padding: '10px', backgroundColor: 'white'}}>
            <button onClick={() => {}}>Dark</button>
            <button onClick={() => {}}>Light</button>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
