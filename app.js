import React ,{useState} from "react";
import ReactDOM from "react-dom/client";

import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";

// header 
// body
//footer 

// dumy data with gpt
const arr = [
  { cloth: "Pant", offer: "60-80% OFF", price: 999, image: "https://source.unsplash.com/300x300/?pants" },
  { cloth: "Jeans", offer: "40-60% OFF", price: 1499, image: "https://source.unsplash.com/300x300/?jeans" },
  { cloth: "Shirt", offer: "20-40% OFF", price: 799, image: "https://source.unsplash.com/300x300/?shirt" },
  { cloth: "Kurti", offer: "50-70% OFF", price: 1299, image: "https://source.unsplash.com/300x300/?kurti" },
  { cloth: "Cap", offer: "10-20% OFF", price: 299, image: "https://source.unsplash.com/300x300/?cap" },
  { cloth: "Lower", offer: "30-50% OFF", price: 699, image: "https://source.unsplash.com/300x300/?joggers" },
  { cloth: "Bra", offer: "25-45% OFF", price: 599, image: "https://source.unsplash.com/300x300/?bra" },
  { cloth: "T-Shirt", offer: "40-80% OFF", price: 499, image: "https://source.unsplash.com/300x300/?tshirt" },
  { cloth: "Hoodie", offer: "35-55% OFF", price: 1799, image: "https://source.unsplash.com/300x300/?hoodie" },
  { cloth: "Sweater", offer: "45-65% OFF", price: 1599, image: "https://source.unsplash.com/300x300/?sweater" },

  { cloth: "Pant", offer: "20-30% OFF", price: 1099, image: "https://source.unsplash.com/300x300/?formal-pants" },
  { cloth: "Jeans", offer: "55-75% OFF", price: 1699, image: "https://source.unsplash.com/300x300/?denim" },
  { cloth: "Shirt", offer: "15-25% OFF", price: 899, image: "https://source.unsplash.com/300x300/?formal-shirt" },
  { cloth: "Kurti", offer: "60-80% OFF", price: 1399, image: "https://source.unsplash.com/300x300/?indian-fashion" },
  { cloth: "Cap", offer: "20-35% OFF", price: 349, image: "https://source.unsplash.com/300x300/?baseball-cap" },
  { cloth: "Lower", offer: "50-70% OFF", price: 799, image: "https://source.unsplash.com/300x300/?track-pants" },
  { cloth: "Bra", offer: "30-40% OFF", price: 649, image: "https://source.unsplash.com/300x300/?lingerie" },
  { cloth: "T-Shirt", offer: "25-50% OFF", price: 549, image: "https://source.unsplash.com/300x300/?casual-tshirt" },
  { cloth: "Hoodie", offer: "60-75% OFF", price: 1899, image: "https://source.unsplash.com/300x300/?hooded-sweatshirt" },
  { cloth: "Sweater", offer: "20-40% OFF", price: 1499, image: "https://source.unsplash.com/300x300/?wool-sweater" },

  { cloth: "Jacket", offer: "50-80% OFF", price: 2499, image: "https://source.unsplash.com/300x300/?jacket" },
  { cloth: "Blazer", offer: "20-35% OFF", price: 2999, image: "https://source.unsplash.com/300x300/?blazer" },
  { cloth: "Saree", offer: "45-70% OFF", price: 2199, image: "https://source.unsplash.com/300x300/?saree" },
  { cloth: "Lehenga", offer: "35-60% OFF", price: 4999, image: "https://source.unsplash.com/300x300/?lehenga" },
  { cloth: "Shorts", offer: "30-55% OFF", price: 599, image: "https://source.unsplash.com/300x300/?shorts" },
  { cloth: "Tracksuit", offer: "55-75% OFF", price: 1799, image: "https://source.unsplash.com/300x300/?tracksuit" },
  { cloth: "Skirt", offer: "25-45% OFF", price: 999, image: "https://source.unsplash.com/300x300/?skirt" },
  { cloth: "Top", offer: "40-65% OFF", price: 699, image: "https://source.unsplash.com/300x300/?women-top" },
  { cloth: "Tank Top", offer: "15-30% OFF", price: 499, image: "https://source.unsplash.com/300x300/?tank-top" },
  { cloth: "Sweatshirt", offer: "50-70% OFF", price: 1399, image: "https://source.unsplash.com/300x300/?sweatshirt" },

  { cloth: "Pant", offer: "35-50% OFF", price: 1199, image: "https://source.unsplash.com/300x300/?trousers" },
  { cloth: "Jeans", offer: "20-45% OFF", price: 1599, image: "https://source.unsplash.com/300x300/?blue-jeans" },
  { cloth: "Shirt", offer: "55-80% OFF", price: 999, image: "https://source.unsplash.com/300x300/?checked-shirt" },
  { cloth: "Kurti", offer: "25-40% OFF", price: 1499, image: "https://source.unsplash.com/300x300/?kurta" },
  { cloth: "Cap", offer: "5-15% OFF", price: 249, image: "https://source.unsplash.com/300x300/?fashion-cap" },
  { cloth: "Lower", offer: "20-35% OFF", price: 749, image: "https://source.unsplash.com/300x300/?sportswear" },
  { cloth: "Bra", offer: "60-80% OFF", price: 699, image: "https://source.unsplash.com/300x300/?women-innerwear" },
  { cloth: "T-Shirt", offer: "30-60% OFF", price: 599, image: "https://source.unsplash.com/300x300/?graphic-tshirt" },
  { cloth: "Hoodie", offer: "25-45% OFF", price: 1699, image: "https://source.unsplash.com/300x300/?winter-hoodie" },
  { cloth: "Sweater", offer: "65-80% OFF", price: 1799, image: "https://source.unsplash.com/300x300/?winter-clothes" },

  { cloth: "Jacket", offer: "30-45% OFF", price: 2699, image: "https://source.unsplash.com/300x300/?leather-jacket" },
  { cloth: "Blazer", offer: "40-60% OFF", price: 3199, image: "https://source.unsplash.com/300x300/?mens-blazer" },
  { cloth: "Saree", offer: "20-50% OFF", price: 1999, image: "https://source.unsplash.com/300x300/?traditional-saree" },
  { cloth: "Lehenga", offer: "60-80% OFF", price: 5499, image: "https://source.unsplash.com/300x300/?bridal-lehenga" },
  { cloth: "Shorts", offer: "10-25% OFF", price: 649, image: "https://source.unsplash.com/300x300/?denim-shorts" },
  { cloth: "Tracksuit", offer: "35-55% OFF", price: 1899, image: "https://source.unsplash.com/300x300/?gym-wear" },
  { cloth: "Skirt", offer: "50-75% OFF", price: 1099, image: "https://source.unsplash.com/300x300/?mini-skirt" },
  { cloth: "Top", offer: "20-35% OFF", price: 749, image: "https://source.unsplash.com/300x300/?crop-top" },
  { cloth: "Tank Top", offer: "40-60% OFF", price: 549, image: "https://source.unsplash.com/300x300/?tanktop" }
];


console.log(arr);


function App(){

    let[arr1,SetArray]=useState(arr); // Array me abhi arr ki value hai 

    function sortArray(){
        arr1.sort((a,b)=>a.price-b.price);// Array ab sort hua hua hai 
        SetArray([...arr1]);// ab sorted Array use ho gaya hai   /// [...Array] pass bhi refrence karo array ko nahi to nahi hoga 
        //console.log(arr1);
    }

    // function priceAbove999(){
    //     //console.log('sandy bhai ');
    //     const Brr=arr.filter((value)=>value.price>999);
    //     SetArray([...Brr]);
    // }
    // correct it and add later 

    return (
        <>
        <Header/>
        <button className="btn1" onClick={sortArray}>Sort By Price</button>
        {/* <button className="btn1" onClick={priceAbove999}>Price Above 999</button> */}
        <div className="middle" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
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
                arr.map((Value,index)=> <Card key={index} cloth={Value.cloth} offer={Value.offer} image={Value.image} price={Value.price}/>)  
            }


        </div>
        <Footer/>
        </>
        
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);