import { useParams } from "react-router-dom";
function YksUudis() {
    const {index} = useParams ();
    const uudisedLS =JSON.parse(localStorage.getItem("uudised")) || []   
    const leitudUudis = uudisedLS[index];
    
    return ( 
    <div>
     <div>{leitudUudis}</div>

    </div> );
}

export default YksUudis;