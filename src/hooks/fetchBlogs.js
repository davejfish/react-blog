import { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/blogs';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchBlogs();
      setBlogs(data);
    }
    fetchData();
  }, []);

  return { blogs };
}