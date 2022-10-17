import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";

// 1. teete kuskil koolitusel/Youtube/Udemys asja kaasa, jätate meelde ja kui on vaja kasutada, siis otsite üles
// 2. kui teete kuskil suuremas projektis arendust, siis otsite samasugust funktsionaalsust kuskil teises failis
// 3. otsida Google otsingu abiga kuidas seda teha
// 4. teete ise peast

// [{},{},{},{}] 120tk KÕIK productsFromFile
// [{},{},{}] 59tk FILTREERITUD KUJUL categoryProducts
// [{},{}] 20tk  MIDA NÄITAN KASUTAJALE products


function Products() {
    
                                                                // 60tk/59tk/1tk - kuhu filtreeritakse ja mille seast lehekülgede kaupa liigutakse
    const [categoryProducts, setCategoryProducts] = useState(productsFromFile.slice());
    const [products, setProducts] = useState(productsFromFile.slice(0,20)) ; // 20tk - mida välja näidatakse lehekülje kaupa.
                                                                    // nullist hakkab võtma, 20-ndat ei võta, viimane, mille võtab on 19            
    
    const categories = [...new Set (productsFromFile.map(element => element.category))];

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
    for (let index = 0; index <categoryProducts.length/20; index++) {
     pages.push(index + 1);
    }

    // useState-st et on muutuv väärtus, muutuvad lk numbrid

    const sortAZ = ()=> {
        categoryProducts.sort((a,b)=>a.name.localeCompare(b.name)); //.sort sulud siin enam ei toimi
        setProducts(categoryProducts.slice(0,20)); // meil on tegemist objektidega, tavaline sort ei toimi.
        setActivePage(1);
    }

    
    const sortZA = ()=> {
        categoryProducts.sort((a,b)=>b.name.localeCompare(a.name));
        setProducts(categoryProducts.slice(0,20));
        setActivePage(1);

    }

    const sortPriceAsc = ()=> {
        categoryProducts.sort((a,b)=>a.price - b.price);
        setProducts(categoryProducts.slice(0,20));
        setActivePage(1);

    }
   const sortPriceDesc = ()=>{
    categoryProducts.sort((a,b)=>b.price - a.price);
        setProducts(categoryProducts.slice(0,20));
        setActivePage(1);

    }
    const sortIdAsc = ()=> {
        categoryProducts.sort((a,b)=>a.id - b.id);
        setProducts(categoryProducts.slice(0,20));
        setActivePage(1);

    }
   const sortIdDesc = ()=>{
    categoryProducts.sort((a,b)=>b.id - a.id);
        setProducts(categoryProducts.slice(0,20));
        setActivePage(1);
    }
    const showByCategory = (categoryClicked) =>{
    const result = productsFromFile.filter(element => element.category === categoryClicked);
    setCategoryProducts(result); // siia kuulub 59  või 61 tk
    setProducts(result.slice(0,20));
    setActivePage(1);
    }

    const changeActivePage = (pageClicked) =>{
        setActivePage(pageClicked);
        setProducts(categoryProducts.slice(pageClicked*20-20,pageClicked*20)); // 20 kaupa näidatavat muudan
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
           <img src={element.image} alt=""/>
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