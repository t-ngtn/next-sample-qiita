import axios from 'axios';

export type QiitaItem = {
  id: string;
  title: string;
  user_id: string;
  username: string;
  created_at: string;
};

export const createQiitaItem = (
  id: string,
  title: string,
  user_id: string,
  username: string,
  created_at: string
): QiitaItem => {
  return {
    id,
    title,
    user_id,
    username,
    created_at,
  };
};

export const fetchItems = async (
  setRows: Function,
  token: string,
  word: string
) => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

  const params = word
    ? { page: 1, per_page: 20, query: word }
    : { page: 1, per_page: 20 };

  await axios
    .get('https://qiita.com/api/v2/items', {
      headers: headers,
      params: params,
    })
    .then((response) => {
      return JSON.parse(JSON.stringify(response.data));
    })
    .then((res) => {
      const posts: QiitaItem[] = res.map((data: any) => {
        return createQiitaItem(
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

export type QiitaItemDetal = {
  id: string;
  title: string;
  rendered_body: string;
};

export const createQiitaItemDetail = (
  id: string,
  title: string,
  rendered_body: string
): QiitaItemDetal => {
  return {
    id,
    title,
    rendered_body,
  };
};

export const fetchItem = async (id: string, token: string) => {
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

  await axios
    .get(`https://qiita.com/api/v2/items/${id}`, {
      headers: headers,
    })
    .then((response) => {
      return JSON.parse(JSON.stringify(response.data));
    })
    .then((res) => {
      const post: QiitaItemDetal = createQiitaItemDetail(
        res.id,
        res.title,
        res.rendered_body
      );
      console.log(post);
    })
    .catch((error) => {
      console.log(error);
    });
};
