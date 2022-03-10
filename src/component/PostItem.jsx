import React from 'react';
import styles from "../styles/app.module.css";

const PostItem = (props) => {
    return (
        <div className={styles.post}>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div className={'post_content'}>
                {props.post.body}
            </div>
            <div className={'post_btns'}>
                <button>Удалить пост</button>
            </div>
        </div>
    );
};

export default PostItem;