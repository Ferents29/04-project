import React from 'react';
import styles from "../styles/app.css";
import MyButton from "./UI/Button/MyButton";

const PostItem = (props) => {
    return (
        <div className={styles.post}>
            <strong>{props.number}. {props.post.title}</strong>
            <div className={'post_content'}>
                {props.post.body}
            </div>
            <div className={'post_btns'}>
                <MyButton onClick={() => props.remove(props.post)}>Удалить пост</MyButton>
            </div>
        </div>
    );
}

export default PostItem;