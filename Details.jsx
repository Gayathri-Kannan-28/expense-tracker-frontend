import {useEffect, useState }from "react"
import Expense from "./Expense";

const Details=(props)=>{
  
  const[act,setact]=useState("");
  const[exp,setexp]=useState("")
  const{additem,itemoedit}=props;

   const handleTitle=(event)=>{
    setact(event.target.value)
  }
  const handleamt=(event)=>{
    setexp(parseInt(event.target.value))
  }
   const handlesubmit=(event)=>{
      event.preventDefault();
      console.log(act,exp);
      additem(Title,Amount);      
   }
 
   useEffect(()=>{
    setact(itemoedit?.act||"")
    setexp(itemoedit?.exp || 0);
   },[itemoedit])

   var isEdit=itemoedit!==undefined
  return(
    <>
    <div className="form">
        <form>
          <h2>{isEdit?"EDIT":"ADD"} TRANSACTION</h2>
            <label id="det"input="text"><h3>Title</h3></label>
            <input type="text"
            id="spaces"
            value={act}
            onChange={handleTitle}
           />
            <label  id="det"input="text"><h3>Amount</h3></label>
            <input type="text"
            id="space1"
            value={exp}
            onChange={handleamt}
            
          />
            <button className="btn" onClick={handlesubmit}>{isEdit?"Edit":"Add"} Transaction</button>
             </form>
               
    </div>
    
    </>
  )
}
export default Details