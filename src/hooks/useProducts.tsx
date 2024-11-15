import { useEffect, useState } from "react";
import { Products } from "../types/products";

export default function useProducts(){
    //State
    const [pending, setPending] = useState<boolean>(false);
    const [products, setProducts] = useState<Products[]>([]);
    const [error, setError] = useState<String>('');

    //Una buena practica es que nunca haya un fetch en un componente, por eso se hace aca la logica de buscar los productos
    useEffect(()=> {
        (async() =>{
            try{
                setPending(true);
                const resp = await fetch('https://fakestoreapi.com/products');
                const data: Products[] = await resp.json();
                setProducts(data);
                setPending(false);
            } catch (e: any){
                setError(e.message)
            }
        })();
    }, [setProducts, setPending, setError]);

    return {
        pending,
        products,
        error
    };

}