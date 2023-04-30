import { Inter } from '@next/font/google';
import { fetchPosts } from '@/utils/api';
import { StyledButton } from '@/components/atoms/Button';
import TopBar from '@/components/molecules/TopBar';
import PostsGrid from '@/components/molecules/DataGrid';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';

export default function Home() {
  const rows: GridRowsProp = [
    { id: 1, title: 'Hello', author: 'World' },
    { id: 2, title: 'DataGridPro', author: 'is Awesome' },
    { id: 3, title: 'MUI', author: 'is Amazing' },
  ];
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'author', headerName: 'Author', width: 150 },
  ];

  return (
    <>
      <main>
        <div className="container">
          <TopBar />
          <PostsGrid rows={rows} columns={columns}></PostsGrid>
          <StyledButton variant="contained" onClick={fetchPosts}>
            aaa
          </StyledButton>
        </div>
      </main>
    </>
  );
}
