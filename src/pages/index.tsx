import { useEffect, useState } from 'react';
import { QiitaPostData, fetchPosts } from '@/utils/api';
import { StyledButton } from '@/components/atoms/Button';
import TopBar from '@/components/molecules/TopBar';
import PostsGrid from '@/components/molecules/DataGrid';
import { GridColDef } from '@mui/x-data-grid';
import Link from 'next/link';

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
    { field: 'created_at', headerName: '投稿日時', width: 220 },
    {
      field: 'detail_button',
      headerName: '詳細ページ',
      sortable: false,
      width: 90,
      renderCell: (url) => <StyledButton variant="contained">Go</StyledButton>,
    },
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
