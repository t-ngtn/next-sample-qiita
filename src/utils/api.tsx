import axios from 'axios';

export type QiitaPostData = {
  id: string;
  title: string;
  user_id: string;
  username: string;
  created_at: string;
};

export const createQiitaPostData = (
  id: string,
  title: string,
  user_id: string,
  username: string,
  created_at: string
): QiitaPostData => {
  return {
    id,
    title,
    user_id,
    username,
    created_at,
  };
};

const ACCESS_TOKEN = '';

export const fetchPosts = async (setRows: Function) => {
  await axios
    .get('https://qiita.com/api/v2/items', {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      params: { page: 1, per_page: 20 },
    })
    .then((response) => {
      return JSON.parse(JSON.stringify(response.data));
    })
    .then((res) => {
      const posts: QiitaPostData[] = res.map((data: any) => {
        return createQiitaPostData(
          data.id,
          data.title,
          data.user.id,
          data.user.name,
          data.created_at
        );
      });
      setRows(posts);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchPost = async (item_id: string) => {
  try {
    const response = await axios.get(
      'https://qiita.com/api/v2/items' + item_id
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
