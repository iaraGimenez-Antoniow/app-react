const CardComponent = ({product, agregarAlCarrito}) => {
    return (
        <div className="card col-4">
            <img className="card-img-top" src={product.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Some quick example text</p>
                <button className="btn btn-primary" onClick={(event) => 
                    {agregarAlCarrito(event,product)}}
                    >Agregar al carrito</button>
            </div>
        </div> 
    )
}
export default CardComponent;