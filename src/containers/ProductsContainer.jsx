import { useEffect, useState } from "react";
import CardComponent from "../component/CardComponent";
import InfoBarComponent from "../component/InfoBar";

const ProductsContainer = () => {
    const [carrito, setCarrito] = useState([])
    const [products, setProducts] = useState([]);


    useEffect(() => {
        //cuando se esta por montar un component
        //llamada a una API
        const data = [
            {id:1,name:'shoes',
            img:'https://cdn.soyunperro.com/wp-content/uploads/perrocontento.jpg'},
            {id:1,name:'shoes',
            img:'https://cdn.soyunperro.com/wp-content/uploads/perrocontento.jpg'},
            {id:1,name:'shoes',
            img:'https://cdn.soyunperro.com/wp-content/uploads/perrocontento.jpg'},
            {id:1,name:'shoes',
            img:'https://cdn.soyunperro.com/wp-content/uploads/perrocontento.jpg'},
        ]
        setProducts(data);

        return () => {
            //cuando se esta por morir un component
            console.log('Se esta por morir el comente');
        }
    }, []);    
    const AgregarAlCarrito = (event, name) => {
        carrito.push(name);
        setCarrito([...carrito]);
    }

    return (
        <div className="container bg-warning">
            <InfoBarComponent carrito={carrito} />
            <div className="row px-2 py-2">
            <CardComponent title ={'Hola...'} img={'https://cdn.soyunperro.com/wp-content/uploads/perrocontento.jpg'} agregarAlCarrito={AgregarAlCarrito }/>
            <CardComponent title ={'Hola...'} img={'https://cdn.soyunperro.com/wp-content/uploads/perrocontento.jpg'} agregarAlCarrito={AgregarAlCarrito }/>
            <CardComponent title ={'Hola...'} img={'https://cdn.soyunperro.com/wp-content/uploads/perrocontento.jpg'} agregarAlCarrito={AgregarAlCarrito }/>
            </div>
        </div> 
    )
}
export default ProductsContainer;