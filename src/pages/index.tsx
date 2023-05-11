import { useEffect, useState } from 'react';
import { QiitaItem, fetchItems } from '@/utils/api';
import { StyledButton } from '@/components/atoms/Button';
import TopBar from '@/components/organisms/TopBar';
import PostsGrid from '@/components/molecules/DataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { Box, TextField } from '@mui/material';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { apiTokenState } from '@/utils/state';

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
      renderCell: (params) => (
        <Link href={`/detail/${params.row.id}`}>
          <StyledButton variant="contained">Go</StyledButton>
        </Link>
      ),
    },
  ];

  const [rows, setRows] = useState<QiitaItem[]>([]);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useRecoilState(apiTokenState);
  const [searchWord, setSearchWord] = useState<string>('');

  const handleGet = () => {
    fetchItems(setRows, token, searchWord);
  };

  useEffect(() => {
    handleGet();
  }, [token]);

  return (
    <>
      <main>
        <div className="container">
          <TopBar
            token={token}
            setToken={setToken}
            open={open}
            setOpen={setOpen}
          />
          <Box
            m={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {' '}
            <TextField
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              label="Search by words"
              variant="outlined"
              size="small"
              style={{ flex: 1, marginRight: 8 }}
            />
            <StyledButton variant="contained" onClick={handleGet}>
              Serach
            </StyledButton>
          </Box>
          {rows.length !== 0 ? (
            <PostsGrid rows={rows} columns={columnsDefault} />
          ) : (
            <p>
              Loading... or You may have been caught in a rate limit, please
              enter a Qiita API token from the setting button in the upper right
              corner
            </p>
          )}
        </div>
      </main>
    </>
  );
}
