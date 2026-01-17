
// function Navbar() {
//    return (
//       <>
//       </>
//    )
// }

const Navbar = () => {
     return (
      <>
        <div className="navbar">
         <div className="logo">
            <span className="itask">iTask</span>
         </div>
         
         {/* isko bhi flex krdenge as isme para ha and voh bydefault ek block element ha isliye flex krna padega is wale div ko bhi  */}
         <div className="menu">
           <p className="m1">Home</p>
           <p className="m2">Your Tasks</p>
         </div>

        </div>
      </>
     )
}

export default Navbar