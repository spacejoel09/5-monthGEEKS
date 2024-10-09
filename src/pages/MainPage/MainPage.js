import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, minus, multi, sqrt,  } from '../../Redux/actions';
import styles from './MainPage.module.css';
import  '../../Redux/reducers/mainPageReducer'

function App() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(1);
    const result = useSelector((state) => state.calculator.result);
    const dispatch = useDispatch();

    const handleInput1Change = (e) => {
        setInput1(Number(e.target.value));
    };

    const handleInput2Change = (e) => {
        setInput2(Number(e.target.value));
    };
    return (
        <div className={styles.app}>
            <h1>Calculator</h1>

            <div>
                <input
                    type="number"
                    value={input1}
                    onChange={handleInput1Change}
                    placeholder="Input 1"
                />
                <input
                    type="number"
                    value={input2}
                    onChange={handleInput2Change}
                    placeholder="Input 2"
                />
            </div>

            <div>
                <button onClick={() => dispatch(add(input1 + input2))}>+</button>
                <button onClick={() => dispatch(minus(input1 - input2))}>-</button>
                <button onClick={() => dispatch(multi(input1 * input2))}>*</button>
                <button onClick={() => dispatch(sqrt(input1 / input2))}>/</button>
            </div>

            <div>
                <h2>Result:{result} </h2>
            </div>
        </div>
    );
}

export default App;
