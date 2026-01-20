
import './App.css'
import {useState} from "react"
import Navbar from './components/Navbar'
function App() {

   const [text  , setText] = useState("");
   const [listData , setlistData] = useState([])

  
  const handleAdd = ()=> {
    //setlistData me sare list data ki copy banaleni ha ... spread operator but with this chlega but asynchronous tareeke se chlega ekdum add nhi hoga slow add hoga agar ese likhenge second way callback function ka use krke variable me hold karake return krenge toh voh synchronously mtlb fast ekdum se show hoga sahi dono hai 

     //jabh list me state change krte ha tabh mujhe list ki copy banani padti ha spread operator se as varna purani values overwrite hojati ha 

      // setlistData([...listData , text]) // merko array ki copy bananegi padegi varna joh purani value ha usko overwrite krdegi nayi value copy create krne se nhi hoga esa aur new value alag ayegi 
      setlistData((listData)=> {
          const updatedList = [...listData , text];
          // console.log(updatedList)
          setText("") // ki abh click krdiya button pe iss se abh placeholder ko khali krdiya 
          return updatedList;
      })
  }

  // const handleEdit = ()=> {
     
  // }

  const handleDelete = (i)=> {

 // basically yeh function accept krega uska index jisko tum click kroge delete krne ke liye voh pass hoga then usss se compare hongi sari id joh code me likha humne joh return i!=id ko satisfy nhi kr rhi voh return nhi hogi mtlb voh delete hojayegi aur joh satisfy kr rhi ha voh delete nhi hogi aur vohi chaiye hume to delete which we click not all

        //basically isme hum list ke data ko delete krenge unke index ke basis pe voh ha i uske liye hum use krenge filter method ki filter krdenge list ke data ko index ke basis pe 

// filter: to delete filter is best not directly delete 
// loops through every element
// returns only those elements for which condition is true

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
            {/* //“React inputs are controlled via state, so onChange is required to update state and reflect UI changes.” */}
            <input 
            type="text" 
            placeholder = "Add Your Task"
            className="inputbox" 
            value={text} 
            onChange={(e)=>setText(e.target.value)}
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
      //Key we use here as we know which element we need in our list if all are unique then u can direclty use the same variable which u used for rendering here it is data  and keys are unique so choose variable which changes not data as data can be same here we take index as it changes or else it will give error 
      //so here when in array datas are unique then it will work but here csk is 2 times so its not unique data so we use key = i where i is index of array as index changes as we render and traverse 
      const result = IPL.map((data)=><h1 key={data}>{data}</h1>) */}

 {/* // here i is index which changes as we traverse so no issue in console of unique keys just pass 2 parameter in parenthesis and use that in key which is index not data   */}
      {/* const result = IPL.map((data , i)=> <h1 key={i}>{data}</h1>) */}

      {/* //list ko render karvane ke liye hum map ka istamal krte ha  */}
           {listData!=[] && listData.map((data , i)=> {
                return (
                  <>
                   <div key={i}>
                     <div className="datadiv">
                      <div className="list-data">{data}</div>
                      <button onClick = {()=>handleDelete(i)} className="todo-btn">Delete</button>
                     </div>
                   </div>
                  </>
                )
           })}

          {/* <div className="div3">
             <input type="checkbox"></input>
             <p id="todo-task"></p>
             <button onClick = {handleEdit} className="todo-btn">Edit</button>
             <button onClick = {handleDelete} className="todo-btn">Delete</button>
          </div> */}

          {/* //as listdata is eventually an array so we can use length prototype */}
  {listData.length>=1 && <button onClick = {removeAll} className="todo-btn">Remove All Tasks</button>}
          

    </div>
      
    </>
  )
}

export default App


