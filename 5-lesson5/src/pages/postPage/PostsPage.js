
import React, {useReducer, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postsInfo} from "../../store/PostsSlice";


const PostsPage = () => {

    const [ input, setInput ] = useState()
    const { title } = useSelector(state => state.postsInfo)
    const dispatch = useDispatch();
    const changeTitleParams = dispatch(withParams(input))
    const changePostsTitle = () => {
        dispatch(postsInfo())
    }
    return (
        <div>
            <h1>{title}</h1>
            <input type="text" value={input} onChange={(e) => changeTitleParams(e.target.value)} />
            <button onClick={changePostsTitle}>change title</button>
            <button onClick={changeTitleParams}>change title with params</button>


            <button>get posts</button>
            <button>delete all</button>
        </div>
    );
};

export default PostsPage;