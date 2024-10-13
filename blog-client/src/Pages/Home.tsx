import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../App.css';
import axios from "axios";

interface Post {
  id: string;
  img: string;
  title: string;
  desc: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [cat]);

  const getText = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt={post.title} />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
