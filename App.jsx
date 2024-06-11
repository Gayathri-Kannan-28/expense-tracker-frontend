import Expense from"./Component/Expense"
import Details from "./Component/Details"
import { useState } from "react"

const expenses=[{act:"Movie",exp:2220,id:1},{act:"Vegetables",exp:-1000,id:2},{act:"Dresses",exp:-4000,id:3},{act:"Fruits",exp:4000,id:4}]  
const App=()=>{    
    const[List,setList]=useState(expenses)
     const handledel=(id)=>{
           const newList=List.filter((item)=>item.id!==id)
           setList(newList)
     }
     const additem=(act,exp)=>{
        setList([...List,{act:act,exp:exp,id:List[List.length-1].id+1}])
     }
     const[editId,seteditId]=useState(null)
     var itemoedit=List.find((item)=>item.id===editId)
     console.log(editId)
     console.log(itemoedit)
          
   {var r=0
    var amt=0
  List.forEach((ele)=>{
    if(ele.exp<0)
    {
      r+=parseInt(ele.exp)
    }
    else{
      amt+=parseInt(ele.exp)
    }
     })
    }

  return(
    <>
    <div className="whole">
    <h1 id="title"><i>EXPENSE TRACKER APP</i></h1>
    <div className="body">
    <div className="inc">
      <h2>INCOME</h2>
      <h3>{amt}</h3>
    </div>
    
    <div className="exp" >      
      <h2>EXPENSE</h2>
      <h3>{r}</h3>
    </div>
    <div className="exp">
      <h2>BALANCE</h2>
      <h3>{amt+r>0?amt+r:0}</h3>
    </div>
    </div>
    <Details additem={additem} itemoedit={itemoedit}/>
    <h4 id="title">HISTORY</h4>   
    {
  List.map((ele) => {
    return <Expense key={ele.id} handledel={handledel} id={ele.id} act={ele.act} exp={ele.exp} seteditId={seteditId} />;
  })
}

 </div>
    </>    
  )
}
export default App