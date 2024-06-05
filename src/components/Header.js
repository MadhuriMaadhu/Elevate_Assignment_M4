import React from "react";

const Header = () => {
    
    return(
        <div className="ui fixed menu" style={{ height: "55px", backgroundColor: "red" }}>
        <div className="ui container center" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{color:"white"}}>Contact Manager</h1>
        </div>
      </div>
      
    );
};
export default Header;