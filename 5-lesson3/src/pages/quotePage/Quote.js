// import React, {useEffect} from 'react';
// import {useDispatch, UseDispatch, useSelector} from "react-redux";
// import UserCard from "../../component/UserCard";
// import {fetchQuote, fetchUserAction} from "../../Redux/actions";
//
// const Quote = () => {
//     const dispatch = useDispatch();
//     const { quote,author, loading, error } = useSelector((state) => state.quoteReducer);
//
//
//     useEffect(() => {
//         dispatch(fetchQuote())
//     }, [dispatch]);
//
//
//     const handleRefresh = () => {
//         dispatch(fetchQuote())
//     }
//
//     return (
//         <div>
//             {loading && <p>loading</p>}
//
//             {error && <p>{error}</p>}
//             {!loading && !error &&
//                 <div>
//                     <p>"{quote}"</p>
//                     <p><i>{author}</i></p>
//                     <button onClick={handleRefresh}>Get Another Quote</button>
//                  </div>}
//
//
//         </div>
//     );
// };
//
// export default Quote;