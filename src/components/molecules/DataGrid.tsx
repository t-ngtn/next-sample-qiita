import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from '@mui/x-data-grid';
import { Box } from '@mui/material';

type PostsGridProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
};

export default function PostsGrid({ rows, columns }: PostsGridProps) {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        checkboxSelection={true}
      />
    </Box>
  );
}
