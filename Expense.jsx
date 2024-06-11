

const Expense=(props)=>{

  
  const{act,exp,handledel,id,seteditId}=props
  const expenseitem=act

  const deleteitem=()=>{
    handledel(id)
  }

  const handleedit=()=>{
     seteditId(id)
    
  }
   
  return(
    <>
    
    <div className={`${exp >=0?"positive":"negative"} expenseitem`}  >
     <div className="expense">       
      <h3>{props.act}</h3>
      <h3>{props.exp}</h3>           
    </div>
    <button id="del" onClick={deleteitem}>Delete</button>
    <button id="edit" onClick={handleedit}>Edit</button>
    </div>
    
         </>
     
)
}
export default Expense