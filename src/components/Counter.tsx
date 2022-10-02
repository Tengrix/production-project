import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [state, setState] = useState(0)
    return (
        <div className={classes.btn}>
                {state}
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    );
};

export default Counter;