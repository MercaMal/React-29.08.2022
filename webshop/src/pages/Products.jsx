// import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useEffect } from "react";

// 1. teete kuskil koolitusel/Youtube/Udemys asja kaasa, jätate meelde ja kui on vaja kasutada, siis otsite üles
// 2. kui teete kuskil suuremas projektis arendust, siis otsite samasugust funktsionaalsust kuskil teises failis
// 3. otsida Google otsingu abiga kuidas seda teha
// 4. teete ise peast

// [{},{},{},{}] 120tk KÕIK productsFromFile
// [{},{},{}] 59tk FILTREERITUD KUJUL categoryProducts
// [{},{}] 20tk  MIDA NÄITAN KASUTAJALE products


function Products() {
    
    const [dbProducts, setDbProducts] = useState ([]);                             
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [products, setProducts] = useState([]); 
                                                                        
     const [categories, setCategories] = useState([]);
  

    const addToCart = (productClicked)=>{ // VÕTAN VASTU SULGUDE SEES
        let cartLS=localStorage.getItem("cart"); //pane nimi, mida tahad kasutama jääda "cart"
        cartLS=JSON.parse(cartLS) || []; // jutumärgid maha, kui ei ole midagi, siis võtan tühja array
        const index = cartLS.findIndex(element=> element.product.id === productClicked.id); // käib ostukorvi läbi
        if (index=== -1){ //kui jrk nr on -1, siis järelikult pole teda olemas, kui on olemas, index : 0,1, 2,3
        cartLS.push ({product:productClicked, quantity:1}); //lisan ühe juurde
        } else {
          cartLS[index].quantity = cartLS[index].quantity +1;

        }

        cartLS=JSON.stringify(cartLS); //jutumärgid tagasi-seda nõuab localStorage
        localStorage.setItem("cart", cartLS);
         
}
     

    const [activePage, setActivePage] = useState (1);
    const pages = [];
    for (let index = 0; index <categoryProducts.length/3; index++) {
     pages.push(index + 1);
    }

    // useState-st et on muutuv väärtus, muutuvad lk numbrid

    const sortAZ = ()=> {
        categoryProducts.sort((a,b)=>a.name.localeCompare(b.name)); //.sort sulud siin enam ei toimi
        setProducts(categoryProducts.slice(0,3)); // meil on tegemist objektidega, tavaline sort ei toimi.
        setActivePage(1);
    }

    
    const sortZA = ()=> {
        categoryProducts.sort((a,b)=>b.name.localeCompare(a.name));
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);

    }
    useEffect(() => { // kui lehele tulen ja koheselt (mitte nupuvajutusega) tehakse API päring (teise rakendusse)
        const api = new WooCommerceRestApi({
          url: "http://localhost/wordpress/",
          consumerKey: "ck_c479a7e5e2f4058f5dd3aacac8ed17091013a3ed",
          consumerSecret: "cs_c881e311671be8b038fb92a9d08bad9073e470cd",
          version: "wc/v3",
        
          axiosConfig: {
            headers: {}
          }
        });
        api.get("products", {
          per_page: 100, // 20 products per page
        })
          .then((response) => {
            // Successful request
            setDbProducts(response.data.slice(0,3));
            setCategoryProducts(response.data);
            setCategories([...new Set(response.data.map(element => element.categories[0].name))])
          })
      }, []);
    
 
    const sortPriceAsc = ()=> {
        categoryProducts.sort((a,b)=>a.price - b.price);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);

    }
   const sortPriceDesc = ()=>{
    categoryProducts.sort((a,b)=>b.price - a.price);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);

    }
    const sortIdAsc = ()=> {
        categoryProducts.sort((a,b)=>a.id - b.id);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);

    }
   const sortIdDesc = ()=>{
    categoryProducts.sort((a,b)=>b.id - a.id);
        setProducts(categoryProducts.slice(0,3));
        setActivePage(1);
    }
    const showByCategory = (categoryClicked) =>{
    const result = dbProducts.filter(element => element.categories[0].name === categoryClicked);
    setCategoryProducts(result); // siia kuulub 59  või 61 tk
    setProducts(result.slice(0,3));
    setActivePage(1);
    }
// db meil on vaja mingisugust arrayd mille sees on kõik tooted. tuleb uus useState
    const changeActivePage = (pageClicked) =>{
        setActivePage(pageClicked);
        setProducts(categoryProducts.slice(pageClicked*3-3,pageClicked*3)); // 20 kaupa näidatavat muudan
    }

    return ( 
    <div>
        <Pagination>
            {pages.map(number =>
            <Pagination.Item key={number} onClick={() => changeActivePage (number)} active = {number === activePage}>
                {number}
            </Pagination.Item>)}
        </Pagination>

      {categories.map(element=> 
       <Button variant="primary" key={element} onClick={()=>showByCategory(element)}>
        {element}
        </Button>)}
        <div>Tooteid on {categoryProducts.length} tk</div>
       <button onClick={sortAZ}>Sorteeri A-Z</button>
       <button onClick={sortZA}>Sorteeri Z-A</button>
       <button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</button>
       <button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</button>
       <button onClick={sortIdAsc}>Sorteeri vanemad enne</button>
       <button onClick={sortIdDesc}>Sorteeri uuemad enne</button>

        {products.map(element=>
        <div key={element.id}>
           { element.images[0] && <img src={element.images[0].src} alt="" />}
           <div>{element.name}</div>
           <div>{element.price}</div>
           <Button onClick={()=>addToCart(element)} variant="primary">Lisa ostukorvi</Button> 
          </div>
          // elemendi sees on loogelisest loogeliseni, võivad olla samad nimed (funktsioonis ja all buttonis)
        )}

    </div> );
}

export default Products;


        // KOLLASED on funktsioonid ja neil on lõpus sulud. Funktsioone kutsutakse välja sulgudega HTML-s
        // SININE MUUTUJAD - pärineb ülevalt, useState sees
        // HELESININE- loodud sulgude seest, katan nad üle. LOODUD, ja saab väärtuse, HTML ütleb, mis seal sees on. 
        // Kui on välja kutsutud, siis tuleb anda ka väärtus. Kui tahan avalehele ostukorvi sisu, siis teeksin useState
        // let kasutan ühekordselt, kõik kaetakse letiga.

        // localStorage , JSON- Jsi enda muutujad, neid tuleb kasutada nagu nad kirjas on
        // localStorage-saan browseri lsile ligi. Kõik, mis on temaga teha saab näeb sisestades localStorage.clear, getItem, key jne
        // clear-tühjendada kogu LS
        // getItem- võtta võtme alusel
        // key(3)- mitmendat järjekorras võtta tahan
        // length -property key value mitu tk. Siia võiks teha console.logi
        // removeItem- saan eemaldada seda võti-väärtus paari
        // setItem (võti, väärtus)- saan võtme alusel lisada väärtust

        // const midagi = JSON.parse("sõna")jutumärgid maha 
        // const string = JSON.stringify(cartLS) jutumärgid peale

        // console.log- JAVAs-sisse kirjutatud
        //console.log("ffff");