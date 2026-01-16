
import './App.css'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <Navbar/>
      <div className="outerdiv">
         <div className="innerdiv">
          <h1 className="todoheading">iTask- Manage your todos at one place</h1>
          <h2 className="h2space">Add a Todo</h2>

          <div className="div1">
            <input type="text" className="inputbox"></input>
           <button className="todo-btn">Save</button>
          </div>
         

          <div className="div2">
          <input type="checkbox"></input>
          <p>Show Finished</p>
          </div>

           <h2 className="h2space">Your Todos</h2>

          <div className="div3">
             <input type="checkbox"></input>
             <p>Your Task </p>
             <button className="todo-btn">Edit</button>
             <button className="todo-btn">Delete</button>
          </div>
      </div>
      </div>
      
    </>
  )
}

export default App
