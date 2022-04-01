import React, {useMemo, useState} from 'react';
import PostsList from "./component/PostsList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";
import MyModal from "./component/UI/MyModal/MyModal";
import MyButton from "./component/UI/Button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id:1,title:'JavaScript',body:'Language of programming'},
        {id:2,title:'php',body:'Language of programming'},
        {id:3,title:'Python',body:'Language of programming'},
        {id:4,title:'C++',body:'Language of programming'},
        {id:5,title:'Ruby',body:'Language of programming'},
    ]);
    const [filter,setFilter] = useState({sort:'',query:''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
      <div className={'App'}>

          <MyButton onClick={() => setModal(true)}>
              Добавить пост
          </MyButton>

          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
          </MyModal>
          <hr style={{margin: 15}} />
          <PostFilter filter={filter}
                      setFilter={setFilter}/>
          <PostsList posts={sortedAndSearchedPosts}
                     remove={removePost}
                     title={'Список постов про языки програмирования'}/>
      </div>
  );
}

export default App;
