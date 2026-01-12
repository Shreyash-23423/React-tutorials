import "./Product.css";

function Product({title, price ,features,}){
    // const list= features.map((features)=><li>{features}</li>)
    let styles={backgroundColor:price>30000 ? "yellow":""};
    return (
       <div className="Product" style={styles}>
        <h3>{title}</h3>
        <h5>Price: {price}</h5>
        {price >30000 ? <p>Discount of 5%</p>:null}
        {/* <p>{ features.map((features)=>(              
            <li>{features}</li>
        ) )}</p> */}
        </div>
    );
}
export default Product;