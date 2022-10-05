import { useEffect, useState } from "react";
import CardComponent from "../component/CardComponent";
import InfoBarComponent from "../component/InfoBar";

const ProductsContainer = () => {
    const [carrito, setCarrito] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(async () => {
        let data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=mac');
        let response = await data.json();
        setProducts(response.results);
        return () => {
            console.log('Se esta por morir el comente');
        }
    }, []);    
    const AgregarAlCarrito = (event, product) => {
        carrito.push(product);
        setCarrito([...carrito]);
        console.log(carrito);
    }
    return (
        <div className="container bg-warning">
            <InfoBarComponent carrito={carrito} />
            <div className="row px-2 py-2">
                {products.map((element, index) => {
                    return (
                        <span key={index}>
                            <CardComponent product={element} agregarAlCarrito={AgregarAlCarrito }/>
                        </span>
                    )
                })}
            </div>
        </div> 
    )
}
export default ProductsContainer;