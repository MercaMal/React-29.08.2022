import { useState, useEffect } from "react";
import styles from "../css/Avaleht.module.css"

function Avaleht () {
  const [postitused, uuendaPostitused] = useState([]);
  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => uuendaPostitused(data))

}, []);


    return ( <div>
    
     <div>See on avaleht, nähtav localhost:3000 aadressil</div> 
     <div>Tere tulemast avalehele</div>

     <img className="avalehe-pilt" src="https://g.nh.ee/images/pix/1600x914/LSr3GFcB35A/aktuaalne-kaamera-err-err-uudistetoimetus-etv-86926649.jpg?up=1" alt="uudistetoimetus" />
     
     {postitused.map(element =>

      <div className={styles.posts}> 

       <div className={styles.userId}>{element.userId}</div>
       <div className={styles.id}>{element.id}</div>
       <div className={styles.title}>{element.title}</div>
       <div className={styles.body}>{element.body}</div>
      </div>
      )}

    </div>)

}

export default Avaleht ;
