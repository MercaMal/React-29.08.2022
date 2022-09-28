import {useRef, useState} from "react"
function Tagasiside() {     
    //                                                     0         1           2             3
    const [tagasisided, määraTagasisided] = useState (["Oli hea", "Huvitav", "Teistsugune", "Põnev" ]);
    const tagasisideRef = useRef();

    function kustuta(index){
      tagasisided.splice (index,1);
      määraTagasisided(tagasisided.slice());
    }
   function lisaUusTagasiside() {
      tagasisided.push(tagasisideRef.current.value);
      määraTagasisided(tagasisided.slice());
    }
     
    
    return ( 
      <div>Tagasisided: 
        {tagasisided.map((element, index)=>
        <div>
          <span>{element}</span>
          <button onClick={()=> kustuta(index)}>X</button>
        </div>)}
        <label>Lisa uus tagasiside: </label>
        <input ref={tagasisideRef} type="text" />
        <button onClick={() =>lisaUusTagasiside ()}>Sisesta</button>

        
      {/* .sort .slice on mingi funktsionaalsus muutuja pihta */}
    
    </div>)

 
}

export default Tagasiside;