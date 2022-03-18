import React, {useRef, useState} from 'react';
import PostsList from "./component/PostsList";
import MyButton from "./component/UI/Button/MyButton";
import MyInput from "./component/UI/Input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id:1,title:'JavaScript',body:'Language of programming'},
        {id:2,title:'php',body:'Language of programming'},
        {id:3,title:'Python',body:'Language of programming'},
        {id:4,title:'C++',body:'Language of programming'},
        {id:5,title:'Ruby',body:'Language of programming'},
    ]);
    const [title, setTitle] = useState('');
    const bodyTitlePost = useRef();

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyTitlePost.current.value)
    }

  return (
      <>
          <form>
              {/*управляемый компонент.*/}
              <MyInput type={'text'}
                       value={title}
                       onChange={e => setTitle(e.target.value)}
                       placeholder={'название поста'}/>
              {/*Неуправляемый компонент.*/}
              <MyInput type={'text'}
                       ref={bodyTitlePost}
                       placeholder={'Описание поста'}/>
              <MyButton onClick={addNewPost}>Добавить пост</MyButton>
          </form>
        <PostsList posts={posts}
                   title={'Список постов про языки програмирования'}/>
      </>
  );
}

export default App;
