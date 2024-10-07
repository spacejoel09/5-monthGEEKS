import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {plus, minus, plusTen, minusTen, reset} from "../../Redux/reducer";
import styles from "./MainPage.module.css";

const MainPage = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.value);

    return (
        <div className={styles.block}>
            <h1 className={styles.title}>{`Counter (${count})`}</h1>
            <button className={styles.buttons} onClick={() => dispatch(plus())}>+1</button>
            <button className={styles.buttons} onClick={() => dispatch(minus())}>-1</button>
            <button className={styles.buttons} onClick={() => dispatch(plusTen())}>+10</button>
            <button className={styles.buttons} onClick={() => dispatch(minusTen())}>-10</button>
            <button className={styles.buttons} onClick={() => dispatch(reset())}>RESET/ Сброс</button>
        </div>
    );
}

export default MainPage;
