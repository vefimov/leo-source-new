import React, { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp, getDocs, doc } from 'firebase/firestore';
// @ts-ignore
import { ReactTinyLink } from 'react-tiny-link';

import { db } from './firebase';
import './App.scss';

function App() {
  const [url, setUrl] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts: any = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());

        setPosts(posts);
      });
    };

    loadPosts();
  }, []);

  // FIXME
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await addDoc(collection(db, 'posts'), {
      url,
      createdAt: serverTimestamp(),
    });

    setUrl('');
  };

  return (
    <div className="container-fluid">
      <div className="posts">
        <form onSubmit={handleSubmit}>
          <div className="my-3 row">
            <div className="col">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="url"
                className="form-control"
                id="url"
                aria-describedby="Url"
                required
                placeholder="Url"
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Добавить
              </button>
            </div>
          </div>
        </form>

        {posts.map((post: any) => (
          <ReactTinyLink
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url={post.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
