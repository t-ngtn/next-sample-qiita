import axios from 'axios';

export const fetchPosts = async () => {
  try {
    const response = await axios.get('https://qiita.com/api/v2/items', {
      params: { page: 1, per_page: 20 },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
