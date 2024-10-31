import React, {useEffect, useState} from 'react';
import classes from "./post.module.css"


const Posts = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(data => {
            const posts = data
            setPost(posts)
        })
    }, []);


    return (
        <div className={classes.body}>
                {post.map((post) => (

                    <div key={post.title} className={classes.child}>

                        <h3 className={classes.title}>{post.title}</h3>
                        <p className={classes.des}>{post.body}</p>

                    </div>
                ))}

        </div>
    );
};

export default Posts;