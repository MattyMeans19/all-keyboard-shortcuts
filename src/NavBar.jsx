import { NavLink } from "react-router";

function NavBar(){
    return(
      <div className='flex flex-col lg:flex-row justify-around gap-5 pt-10 border-b-10 border-double BG'>
        <h1 className='text-3xl lg:text-4xl text-center pb-5'>⌨️ All Keyboard Shortcuts</h1>
        <div className="sm:place-self-end place-self-center flex flex-nowrap gap-5 lg:gap-20 lg:text-2xl text-center px-5">
            <NavLink to={"/"} className="border-x-2 border-t-2 bg-purple-400 rounded-t-2xl px-5 place-self-end hover:bg-purple-600">Home</NavLink>
            <NavLink to={"/os"} className="border-x-2 border-t-2 bg-purple-400 rounded-t-2xl px-5 place-self-end hover:bg-purple-600">Operating Systems</NavLink>
            <NavLink to={"/applications"} className="border-x-2 border-t-2 bg-purple-400 rounded-t-2xl px-5 place-self-end hover:bg-purple-600">Applications</NavLink>
        </div>
      </div>
    )
}

export default NavBar;