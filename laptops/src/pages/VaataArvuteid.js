function VaataArvuteid() {
 const margid = JSON.parse(localStorage.getItem("margid"))||[];
 const mudelid = JSON.parse(localStorage.getItem("mudelid"))||[];
 const maksumused = JSON.parse(localStorage.getItem("maksumused"))||[];

    return ( <div className="vaata-arvuteid">Vaata arvuteid


   {margid.map(margid=> <div key={margid}>{margid}</div>)}
   {mudelid.map(mudelid=> <div key={mudelid}>{mudelid}</div>)}
   {maksumused.map(maksumused=> <div key={maksumused}>{maksumused}</div>)}


    </div> );
}

export default VaataArvuteid;