import { useEffect, useState } from 'react';
import { QiitaItem, fetchItems } from '@/utils/api';
import { StyledButton } from '@/components/atoms/Button';
import TopBar from '@/components/molecules/TopBar';
import PostsGrid from '@/components/molecules/DataGrid';
import { GridColDef } from '@mui/x-data-grid';

export default function Home() {
  const columnsDefault: GridColDef[] = [
    {
      field: 'title',
      headerName: 'タイトル',
      width: 700,
      cellClassName: 'wrap-cell-text',
      flex: 2,
    },
    { field: 'user_id', headerName: 'ユーザーID', width: 150, flex: 1 },
    { field: 'username', headerName: 'ユーザー名', width: 150, flex: 1 },
    { field: 'created_at', headerName: '投稿日時', width: 220, flex: 1 },
    {
      field: 'detail_button',
      headerName: '詳細ページ',
      sortable: false,
      width: 90,
      flex: 1,
      renderCell: () => (
        <StyledButton variant="contained" onClick={() => {}}>
          Go
        </StyledButton>
      ),
    },
  ];

  const [rows, setRows] = useState<QiitaItem[]>([]);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState<string>('');

  const handleGet = () => {
    fetchItems(setRows, token);
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <TopBar setToken={setToken} open={open} setOpen={setOpen} />
          <PostsGrid rows={rows} columns={columnsDefault}></PostsGrid>
        </div>
      </main>
    </>
  );
}
