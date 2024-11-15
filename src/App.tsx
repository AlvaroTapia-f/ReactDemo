import { CssBaseline } from '@mui/material';
import ProductsTable from './components/ProductsTable';
import useProducts from './hooks/useProducts';

function App(){

    //Utils
    const {pending, products, error} = useProducts();

    console.log('Pending: ' + pending);
    
    return(
        <>
        <CssBaseline></CssBaseline>
        <ProductsTable products={products} loading={pending}></ProductsTable>
        </>
    ) 

}

export default App;