
import './App.css'
import {useState} from "react"
import Navbar from './components/Navbar'
function App() {

   const [text  , setText] = useState("");
   const [listData , setlistData] = useState([])

  
  const handleAdd = ()=> {
    //setlistData me sare list data ki copy banaleni ha ... spread operator but with this chlega but asynchronous tareeke se chlega ekdum add nhi hoga slow add hoga agar ese likhenge second way callback function ka use krke variable me hold karake return krenge toh voh synchronously mtlb fast ekdum se show hoga sahi dono hai 
      // setlistData([...listData , text])
      setlistData((listData)=> {
          const updatedList = [...listData , text];
          console.log(updatedList)
          setText("")
          return updatedList;
      })
  }

  // const handleEdit = ()=> {
     
  // }

  const handleDelete = (i)=> {
        //basically isme hum listke data ko delete krenge unke index ke basis pe voh ha i uske liye hum use krenge filter method ki filter krdenge list ke data ko index ke basis pe 
        const updatedList = listData.filter((elem , id)=> {
            return i!=id;
        })
        setlistData(updatedList);
  }

  function removeAll() {
      setlistData([])
  }

  return (
    <>
      <Navbar/>
    <div className="outerdiv">
          <h1 className="todoheading">iTask- Manage your todos at one place</h1>
          <h2 className="h2space">Add a Todo</h2>

          <div className="div1">
            <input 
            type="text" 
            placeholder = "Add Your Task"
            className="inputbox" 
            value={text} 
            onChange={(e)=>setText(e.target.value)
            }
            ></input>
           <button onClick = {handleAdd} className="todo-btn">Add</button>
          </div>
         

          {/* <div className="div2">
          <input type="checkbox"></input>
          <p>Show Finished</p>
          </div> */}

           <h2 className="h2space">Your Todos</h2>

           {listData!=[] && listData.map((data , i)=> {
                return (
                  <>
                   <p key={i}>
                     <div className="datadiv">
                      <div className="list-data">{data}</div>
                      <button onClick = {()=>handleDelete(i)} className="todo-btn">Delete</button>
                     </div>
                   </p>
                  </>
                )
           })}

          {/* <div className="div3">
             <input type="checkbox"></input>
             <p id="todo-task"></p>
             <button onClick = {handleEdit} className="todo-btn">Edit</button>
             <button onClick = {handleDelete} className="todo-btn">Delete</button>
          </div> */}
          {listData.length>=1 && <button onClick = {removeAll} className="todo-btn">Remove All Tasks</button>}
          

    </div>
      
    </>
  )
}

export default App
