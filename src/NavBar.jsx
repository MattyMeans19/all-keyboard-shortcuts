import Home from "./Home";
import OperatingSystems from "./OperatingSystems";
import Applications from "./Applications";

//NavBar that will display on every screen
function NavBar(props){
  
  //props.page will be used to pass the current page value to App.jsx to be displayed
    return(
      <div className='max-w-full flex flex-col lg:flex-row justify-around gap-5 pt-10 border-b-10 border-double'>
        <h1 className='text-3xl lg:text-4xl text-center pb-5'>⌨️ All Keyboard Shortcuts</h1>
        <div className="sm:place-self-end place-self-center flex flex-nowrap gap-5 lg:gap-20 lg:text-2xl text-center px-5">
            <button className="border-x-2 border-t-2 bg-fuchsia-400 rounded-t-2xl px-5 place-self-end hover:bg-fuchsia-600" onClick={() => (props.page(<Home />))}>Home</button>
            <button  className="border-x-2 border-t-2 bg-fuchsia-400 rounded-t-2xl px-5 place-self-end hover:bg-fuchsia-600" onClick={() => (props.page(<OperatingSystems />))}>Operating Systems</button>
            <button className="border-x-2 border-t-2 bg-fuchsia-400 rounded-t-2xl px-5 place-self-end hover:bg-fuchsia-600" onClick={() => (props.page(<Applications/>))}>Applications</button>
        </div>
      </div>
    )
}

export default NavBar;