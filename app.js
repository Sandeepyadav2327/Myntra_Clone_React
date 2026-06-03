import React from "react";
import ReactDOM from "react-dom/client";

// header 
// body
//footer 

// dumy data with gpt
const arr = [
  { cloth: "Pant", offer: "60-80% OFF", image: "https://source.unsplash.com/300x300/?pants" },
  { cloth: "Jeans", offer: "40-60% OFF", image: "https://source.unsplash.com/300x300/?jeans" },
  { cloth: "Shirt", offer: "20-40% OFF", image: "https://source.unsplash.com/300x300/?shirt" },
  { cloth: "Kurti", offer: "50-70% OFF", image: "https://source.unsplash.com/300x300/?kurti" },
  { cloth: "Cap", offer: "10-20% OFF", image: "https://source.unsplash.com/300x300/?cap" },
  { cloth: "Lower", offer: "30-50% OFF", image: "https://source.unsplash.com/300x300/?joggers" },
  { cloth: "Bra", offer: "25-45% OFF", image: "https://source.unsplash.com/300x300/?bra" },
  { cloth: "T-Shirt", offer: "40-80% OFF", image: "https://source.unsplash.com/300x300/?tshirt" },
  { cloth: "Hoodie", offer: "35-55% OFF", image: "https://source.unsplash.com/300x300/?hoodie" },
  { cloth: "Sweater", offer: "45-65% OFF", image: "https://source.unsplash.com/300x300/?sweater" },

  { cloth: "Pant", offer: "20-30% OFF", image: "https://source.unsplash.com/300x300/?formal-pants" },
  { cloth: "Jeans", offer: "55-75% OFF", image: "https://source.unsplash.com/300x300/?denim" },
  { cloth: "Shirt", offer: "15-25% OFF", image: "https://source.unsplash.com/300x300/?formal-shirt" },
  { cloth: "Kurti", offer: "60-80% OFF", image: "https://source.unsplash.com/300x300/?indian-fashion" },
  { cloth: "Cap", offer: "20-35% OFF", image: "https://source.unsplash.com/300x300/?baseball-cap" },
  { cloth: "Lower", offer: "50-70% OFF", image: "https://source.unsplash.com/300x300/?track-pants" },
  { cloth: "Bra", offer: "30-40% OFF", image: "https://source.unsplash.com/300x300/?lingerie" },
  { cloth: "T-Shirt", offer: "25-50% OFF", image: "https://source.unsplash.com/300x300/?casual-tshirt" },
  { cloth: "Hoodie", offer: "60-75% OFF", image: "https://source.unsplash.com/300x300/?hooded-sweatshirt" },
  { cloth: "Sweater", offer: "20-40% OFF", image: "https://source.unsplash.com/300x300/?wool-sweater" },

  { cloth: "Jacket", offer: "50-80% OFF", image: "https://source.unsplash.com/300x300/?jacket" },
  { cloth: "Blazer", offer: "20-35% OFF", image: "https://source.unsplash.com/300x300/?blazer" },
  { cloth: "Saree", offer: "45-70% OFF", image: "https://source.unsplash.com/300x300/?saree" },
  { cloth: "Lehenga", offer: "35-60% OFF", image: "https://source.unsplash.com/300x300/?lehenga" },
  { cloth: "Shorts", offer: "30-55% OFF", image: "https://source.unsplash.com/300x300/?shorts" },
  { cloth: "Tracksuit", offer: "55-75% OFF", image: "https://source.unsplash.com/300x300/?tracksuit" },
  { cloth: "Skirt", offer: "25-45% OFF", image: "https://source.unsplash.com/300x300/?skirt" },
  { cloth: "Top", offer: "40-65% OFF", image: "https://source.unsplash.com/300x300/?women-top" },
  { cloth: "Tank Top", offer: "15-30% OFF", image: "https://source.unsplash.com/300x300/?tank-top" },
  { cloth: "Sweatshirt", offer: "50-70% OFF", image: "https://source.unsplash.com/300x300/?sweatshirt" },

  { cloth: "Pant", offer: "35-50% OFF", image: "https://source.unsplash.com/300x300/?trousers" },
  { cloth: "Jeans", offer: "20-45% OFF", image: "https://source.unsplash.com/300x300/?blue-jeans" },
  { cloth: "Shirt", offer: "55-80% OFF", image: "https://source.unsplash.com/300x300/?checked-shirt" },
  { cloth: "Kurti", offer: "25-40% OFF", image: "https://source.unsplash.com/300x300/?kurta" },
  { cloth: "Cap", offer: "5-15% OFF", image: "https://source.unsplash.com/300x300/?fashion-cap" },
  { cloth: "Lower", offer: "20-35% OFF", image: "https://source.unsplash.com/300x300/?sportswear" },
  { cloth: "Bra", offer: "60-80% OFF", image: "https://source.unsplash.com/300x300/?women-innerwear" },
  { cloth: "T-Shirt", offer: "30-60% OFF", image: "https://source.unsplash.com/300x300/?graphic-tshirt" },
  { cloth: "Hoodie", offer: "25-45% OFF", image: "https://source.unsplash.com/300x300/?winter-hoodie" },
  { cloth: "Sweater", offer: "65-80% OFF", image: "https://source.unsplash.com/300x300/?winter-clothes" },

  { cloth: "Jacket", offer: "30-45% OFF", image: "https://source.unsplash.com/300x300/?leather-jacket" },
  { cloth: "Blazer", offer: "40-60% OFF", image: "https://source.unsplash.com/300x300/?mens-blazer" },
  { cloth: "Saree", offer: "20-50% OFF", image: "https://source.unsplash.com/300x300/?traditional-saree" },
  { cloth: "Lehenga", offer: "60-80% OFF", image: "https://source.unsplash.com/300x300/?bridal-lehenga" },
  { cloth: "Shorts", offer: "10-25% OFF", image: "https://source.unsplash.com/300x300/?denim-shorts" },
  { cloth: "Tracksuit", offer: "35-55% OFF", image: "https://source.unsplash.com/300x300/?gym-wear" },
  { cloth: "Skirt", offer: "50-75% OFF", image: "https://source.unsplash.com/300x300/?mini-skirt" },
  { cloth: "Top", offer: "20-35% OFF", image: "https://source.unsplash.com/300x300/?crop-top" },
  { cloth: "Tank Top", offer: "40-60% OFF", image: "https://source.unsplash.com/300x300/?tanktop" },
  { cloth: "Sweatshirt", offer: "30-50% OFF", image: "https://source.unsplash.com/300x300/?casual-sweatshirt" }
];

function Card(props){
    return (
        <div style={{border:"2px solid black" , padding:"2px"}}>
            <img src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/kurta/s/f/n/-original-imahjzwctaqbbjjr.jpeg?q=90" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

function App(){
    return (
        // header 
        // body
        <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
            {/* <Card cloth="T-Shirt" Offer="40-60% Off" />
            <Card cloth="Shirt" Offer="10-30% Off" />
            <Card cloth="T-Shirt" Offer="40-60% Off" />
            <Card cloth="T-Shirt" Offer="40-60% Off" />
            <Card cloth="T-Shirt" Offer="30-40% Off" />
            <Card cloth="Paijama" Offer="40-60% Off" />
            <Card cloth="Kurti" Offer="40-46% Off" />
            <Card cloth="Jeans" Offer="05-10% Off" />
            <Card cloth="T-Shirt" Offer="40-60% Off" />
            <Card cloth="Cap" Offer="40-60% Off" />
            <Card cloth="T-Shirt" Offer="40-60% Off" />
            <Card cloth="Bra" Offer="15-35% Off" /> */}
            

            {/* arr.map=> array of card bana k dega  */}
            {/* // dummy car with array  for loop array dega so use it ye array return kar k dega  */}
            {
                arr.map((Value,index)=> <Card key={index} cloth={Value.cloth} offer={Value.offer} image={Value.image}/>)  
            }


        </div>
        // footer
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);