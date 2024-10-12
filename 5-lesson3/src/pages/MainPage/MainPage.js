// import React from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import { changeTitleAction, withParamsAction } from "../../Redux/actions";
//
// const MainPage = () => {
//
//     const title = useSelector(state => state.mainPageReducer.title);
//     const dispatch = useDispatch();
//     const changeTitle = () => {
//         dispatch(changeTitleAction())
//     }
//
//
//
//     const withParams = () => {
//         dispatch(withParamsAction("Hello"))
//     }
//
//     return (
//         <div>
//             <h1>{title}</h1>
//             <button onClick={changeTitle}> change title</button>
//             <button onClick={withParams}>with params</button>
//
//
//         </div>
//     );
// };
//
// export default MainPage;