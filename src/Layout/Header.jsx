import logo from "../images/react.png"

const MainHeader = () => {
    return(
      <div className="pt-2 py-1 pl-2" style={{backgroundColor: "black"}}>
        <img src={logo} style={{ height: "35px", verticalAlign: "top"}}></img>
        <span className="h2 pt-4 text-white-50">React Course - taskOpedia</span>
      </div>
    )
  }

  const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray" 
   }

const SubHeader = () =>{
    return(
      <p style={subHeaderStyle} className="text-center">This is a subheader</p>
    )
  }

  const Header = () =>{
    return(
        <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
        </div>
    )
  }  

  export default Header;