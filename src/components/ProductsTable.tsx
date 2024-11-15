import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Products } from '../types/products';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70, },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'price', headerName: 'Price', width: 130 },
  { field: 'image', headerName: 'Image', width: 130, renderCell: (params) => <img src={params.value} height={20}></img> },
  //INVESTIGAR RENDERCELL
];

const paginationModel = { page: 0, pageSize: 5 };

type ProductsTableProps = {
    products: Products[];
    loading: boolean
}

export default function ProductsTable({products, loading}: ProductsTableProps) {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        loading={loading}
      />
    </Paper>
  );
}
