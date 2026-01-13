import Product from "./Product";

function ProductTab(){
   let styles = {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    };
    return(
        <div style={styles}>
       <Product title="samsung galaxy s25" idx={0}/>
       <Product title="portronics hydra 10" idx={1}/>
       <Product title="Boat nirvana anc" idx={2}/>
       <Product title="acer nitro 5 144Hz" idx={3}/>
        </div>
    );
}

export default ProductTab;