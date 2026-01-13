import "./Product.css";
import Price from "./Price"

     let oldPrices=["89,999","1,999","1899","51,999"]
     let newPrices=["85,999","1,699","1599","49,999"]
     let Description=[
     ["a flagship smartphone","14 5g bands"],
     ["a budget keyboard","RGB liting"],
     [" noise cancelling ","24 hrs life"],
     ["performance gaming laptop","RTX 4050 gpu"]]
function Product({title,idx}){
   return (
       <div className="Product" >
        <h3>{title}</h3>
        <p>{Description[idx][0]}</p>
        <p>{Description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}
export default Product;