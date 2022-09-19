import { checkError, client } from './client';

export async function fetchBlogs() {
  const response = await client
    .from('blogs')
    .select('*');
  return checkError(response);
}