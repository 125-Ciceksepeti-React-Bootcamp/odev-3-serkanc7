import './App.scss';
import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header';
import Home from '@/components/Home/Home';
import Footer from '@/components/Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App() {

  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Fetch Posts
    const fetchPosts = async () => {
      const response = await fetch("https://615194d84a5f22001701d2c7.mockapi.io/api/posts");
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    }
    fetchPosts();
  }, []);


  useEffect(() => {
    //Filter Posts
    const filterPosts = () => {
      const filteredData = posts.filter(item =>
        item.title.includes(searchTerm)
        || item.description.includes(searchTerm)
        || item.category.includes(searchTerm)
      );
      setFilteredPosts(filteredData.splice(0, 12));
    }
    filterPosts();
  }, [searchTerm, posts])

  //Delete Post
  const deletePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
    toast.error('Post deleted!', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }

  //Update Post
  const updatePost = (id, updatedPost) => {
    const newPosts = posts.map(post => post.id === id ? updatedPost : post);
    setPosts(newPosts);
    toast.info('Post edited!', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }


  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Home posts={filteredPosts} deletePost={deletePost} updatePost={updatePost} isLoading={isLoading} />
      <Footer />
    </>
  );
}

export default App;
