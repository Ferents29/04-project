import React, {useMemo, useState} from 'react';
import PostsList from "./component/PostsList";
import PostForm from "./component/PostForm";
import PostFilter from "./component/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id:1,title:'JavaScript',body:'Language of programming'},
        {id:2,title:'php',body:'Language of programming'},
        {id:3,title:'Python',body:'Language of programming'},
        {id:4,title:'C++',body:'Language of programming'},
        {id:5,title:'Ruby',body:'Language of programming'},
    ]);
    const [filter,setFilter] = useState({sort:'',query:''})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
      <>
          <PostForm create={createPost}/>
          <hr style={{margin: 15}} />
              <PostFilter filter={filter}
                          setFilter={setFilter}/>
          {sortedAndSearchedPosts.length !== 0
              ? <PostsList posts={sortedAndSearchedPosts}
                           remove={removePost}
                           title={'Список постов про языки програмирования'}/>
              : <h1 style={{textAlign:"center"}}>Посты отсутсвуют</h1>
          }
      </>
  );
}

export default App;
