import { Inter } from '@next/font/google';
import { QiitaPostData, fetchPosts } from '@/utils/api';
import { StyledButton } from '@/components/atoms/Button';
import TopBar from '@/components/molecules/TopBar';
import PostsGrid from '@/components/molecules/DataGrid';
import { GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

export default function Home() {
  const columnsDefault: GridColDef[] = [
    {
      field: 'title',
      headerName: 'タイトル',
      width: 700,
      cellClassName: 'wrap-cell-text',
    },
    { field: 'user_id', headerName: 'ユーザーID', width: 150 },
    { field: 'username', headerName: 'ユーザー名', width: 150 },
    { field: 'created_at', headerName: '投稿日時', width: 300 },
  ];

  const [rows, setRows] = useState<QiitaPostData[]>([]);

  const handleGet = () => {
    fetchPosts(setRows);
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <TopBar />
          <PostsGrid rows={rows} columns={columnsDefault}></PostsGrid>
        </div>
      </main>
    </>
  );
}
