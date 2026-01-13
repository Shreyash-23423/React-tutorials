export default function Price({oldPrice,newPrice}){
    let oldstyle={
        textDecoration: "line-through",
    };
    let newstyle={
        fontWeight: "bold",
    };
    let styles={
        backgroundColor: "#490600",
        height: "30px",
        borderRadius: "20px",
    
    };
    return(
        <div style={styles}>
           <span style={oldstyle}>{oldPrice}</span>
           &nbsp;&nbsp;&nbsp;
           <span style={newstyle}>{newPrice}</span>
        </div>
    )
};