import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email:"",
    };

        add = (e) => {
            e.preventDefault();
            if(this.state.name === "" || this.state.email ===""){
                alert("All the fields are mandatory!");
                return;
            }
            this.props.addContactHandler(this.state);
            this.setState({name:"", email:""});
        };
    render() {
        return(
        <div className="ui main" style={{ textAlign: "center", marginTop:"50px" }}>
            <h2 style={{ marginTop: "150px", marginLeft: "20px", color: "white" }}>Add Contact</h2>
            <form className="ui form" onSubmit={this.add} style={{ marginLeft: "auto", marginRight: "auto", width: "400px" }}>
        <div className="field">
            <label style={{color:"white", marginRight:"400px"}}>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})}/>
        </div>
        <div className="field">
            <label style={{color:"white", marginRight:"400px"}}>Email</label>
            <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})} />
        </div>
            <button className="ui button green" style={{ width: "100px" }}>Add</button>
        </form>
        </div>
        )   
    }
}
 export default AddContact;
