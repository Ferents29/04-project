import React, {useMemo, useState} from 'react';
import PostsList from "./component/PostsList";
import PostForm from "./component/PostForm";
import MySelect from "./component/UI/select/MySelect";
import MyInput from "./component/UI/Input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id:1,title:'JavaScript',body:'Language of programming'},
        {id:2,title:'php',body:'Language of programming'},
        {id:3,title:'Python',body:'Language of programming'},
        {id:4,title:'C++',body:'Language of programming'},
        {id:5,title:'Ruby',body:'Language of programming'},
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    /*function getSortedPosts() {
        if (selectedSort) {
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }
    const sortedPosts = getSortedPosts()*/

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

  return (
      <>
          <PostForm create={createPost}/>
          <hr style={{margin: 15}} />
          <div>
              <MyInput value={searchQuery}
                       onChange={e => setSearchQuery(e.target.value)}
                       placeholder={'Поиск...'} />
              <br /><br/>
            <MySelect defaultValue={'Сортировка по: '}
                      options={[
                          {value: 'title', name: 'По названию'},
                          {value: 'body', name: 'По описанию'}
                      ]}
                      value={selectedSort}
                      onChange={sortPosts} />
          </div>
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
