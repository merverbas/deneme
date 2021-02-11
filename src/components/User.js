import React, { Component } from 'react'

class User extends Component {

    onClickEvent = (e) => {
        console.log(e.target);
        console.log(this);
       
    }

    render() {
        const {name,department,salary} = this.props;
        return (
            <div className ="col-md-8 mb-4">
                <div className = "card">
                    <div className = "card-header d-flex justify-content-between">
                        <h4 className = "d-inline" onClick = {this.onClickEvent} >{name}</h4>
                        <i className = "fas fa-ban" style = {{cursor : 'pointer'}}></i>
                    </div>
                    <div className = "card-body">
                        <p className ="card-text">Maaş : {salary}</p>
                        <p className ="card-text">Departman : {department}</p>

                    </div>
                </div>
               
            </div>
        )
    }
}
export default User;
