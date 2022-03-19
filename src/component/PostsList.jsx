import React from 'react';
import styles from "../styles/app.module.css";
import PostItem from "./PostItem";

const PostsList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <div className={styles.App}>
                {posts.map((post, index) => {
                    return <PostItem post={post} number={index + 1} />
                })}
            </div>
        </div>
    );
};

export default PostsList;