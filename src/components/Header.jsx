import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { selectUsers } from "../store/usersSlice";

function Header({pageTitle}) {
  const dispatch = useDispatch()

  function handleLogOut(){
    if(confirm('Are u sure u want to log out?')){
      
      signOut(auth).then(() => {
        dispatch(selectUsers(null));
  }).catch((error) => {
    console.log(error)
  });
    }
  }

    return (
      <>


            <h1>{pageTitle}</h1>

            <div className="header-btns">

                    <NavLink to="/">
                      <button className="btn">
                          Book List
                      </button>
                    </NavLink>

                    <NavLink to="/add-book">
                      <button className="btn">
                          Add Book +
                      </button>
                    </NavLink>

                    <button onClick={handleLogOut} className="btn transparent">
                      Logout
                    </button>

               
            </div>
    
      </>
    )
  }
  
  export default Header
  