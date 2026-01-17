
import './App.css'
import {useState} from "react"
import Navbar from './components/Navbar'
function App() {

   const [text  , setText] = useState("");
   const [listData , setlistData] = useState([])

  
  const handleAdd = ()=> {
    //setlistData me sare list data ki copy banaleni ha ... spread operator but with this chlega but asynchronous tareeke se chlega ekdum add nhi hoga slow add hoga agar ese likhenge second way callback function ka use krke variable me hold karake return krenge toh voh synchronously mtlb fast ekdum se show hoga sahi dono hai 
      // setlistData([...listData , text]) // merko array ki copy bananegi padegi varna joh purani value ha usko overwrite krdegi nayi value copy create krne se nhi hoga esa aur new value alag ayegi 
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
        //basically isme hum list ke data ko delete krenge unke index ke basis pe voh ha i uske liye hum use krenge filter method ki filter krdenge list ke data ko index ke basis pe 
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

      {/* //map concept of rendering  */}
      {/* const IPL = ["CSK" , "MI" , "RCB" , "CSK"] 
      //Key we use here as we know which element which we need in our list if all are unique then u can direclty use the same variable which u used for rendering here it is data  and keys are unique 
      //so here when in array datas are unique then it will work but here csk is 2 times so its not unique data so we use key = i where i is index of array as index changes as we render and traverse 
      const result = IPL.map((data)=><h1 key={data}>{data}</h1>) */}

 {/* // here i is index which changes as we traverse so no issue in console of unique keys just pass 2 parameter in parenthesis and use that in key  */}
      {/* const result = IPL.map((data , i)=> <h1 key={i}>{data}</h1>) */}

      {/* //list ko render karvane ke liye hum map ka istamal krte ha  */}
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


