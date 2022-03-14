import React from 'react';
import styles from "../styles/app.module.css";
import PostItem from "./PostItem";

const PostsList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <div className={styles.App}>
                {posts.map((post) => {
                    return <PostItem post={post} />
                })}
            </div>
        </div>
    );
};

export default PostsList;