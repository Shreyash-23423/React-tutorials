import Product from "./Product";

function ProductTab(){
    let options=["high-performance","durable","fast"];
    return(
        <>
        { <Product title="Phone"price={20000} features={options}/> }
        <Product title="Laptop" price={40000}features={{a:"high-performance",b:"durable",c:"fast"}}/>
        <Product title="pen" price={10}/>
        </>
    );
}

export default ProductTab;