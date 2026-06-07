function Card(props){
    return (
        <div className="card" style={{border:"2px solid black" , padding:"2px"}}>
            <img  src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/kurta/s/f/n/-original-imahjzwctaqbbjjr.jpeg?q=90" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}
export default Card;