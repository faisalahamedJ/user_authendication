import React, { Component } from 'react';
import signupimg from "../images/Mail_re_duel.png";
import {Link} from "react-router-dom";

class Signup extends Component {
    state = { 
        account : {
            username : "",
            email : "",
            password : "",
            check : false,
        }
     }

     componentDidMount(){
         document.addEventListener("DOMContentLoaded", ()=>{
            let allInputs = document.querySelectorAll("input");
            let container =  document.querySelector(".container");
            let button = document.querySelector("button");
             if(window.localStorage.getItem("darkmode") === "true"){
                    container.classList.add("darkContainer");
                    allInputs.forEach(ele => {
                        ele.classList.add("inputfield");
                    });
                    button.classList.add("darkmodebtn");
                }
                else{
                    container.classList.remove("darkContainer");
                    allInputs.forEach(ele => {
                        ele.classList.remove("inputfield");
                    });
                    button.classList.remove("darkmodebtn");
            }
        }
         )
     }

     handleChange = e =>{
         const account = {...this.state.account};
         account[e.target.name] = e.target.value;
         this.setState({account});
     }

     handleCheck = () =>{
         const account = {...this.state.account};
         account.check =! account.check
         this.setState({account})

        
     }

    handleSubmit = e =>{
        e.preventDefault();
        let existingUser = JSON.parse(window.localStorage.getItem(this.state.account.email));
        if(existingUser === null)
        {   
            
            window.localStorage.setItem(this.state.account.email, JSON.stringify(this.state.account));
            this.props.history.push("/home");
            
        }
        else{
            document.querySelector(".message").innerHTML = "*E-mail already Exists";

        }
    }


    render() { 

        const {account} = this.state;

        return ( 
            <div className="container">
                <div className="signupContainer">
                    <h1>Signup</h1>
                    <p> See your growth and get consulting support!</p>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="username">Name*</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            placeholder="Name"
                            value = {account.username}
                            onChange = {e => this.handleChange(e)}
                            required
                         />

                        <label htmlFor="email">Email*</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="mail@website.com" 
                            id="email" 
                            value = {account.email}
                            onChange = {e => this.handleChange(e)}
                            required/>
                         <span className="message"></span>

                        <label htmlFor="password">Password*</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Min.8 character" 
                            id="password" 
                            minLength="8" 
                            value = {account.password}
                            onChange = {e => this.handleChange(e)}
                            required /> <br/>

                        <div className="checkboxforgetContent">
                            <div>
                            <input type="checkbox"
                            value= {account.check}
                            onChange={e => this.handleCheck(e)} id="termsandcondition" 
                            required />
                            <label htmlFor="termsandcondition">I agree the</label>
                            <span className="anchor">Term & Condition</span>
                            </div>
                            
                        </div>
                        <button className="loginBtn"  type="submit">Signup</button>
                    </form>
                    <div className="linktoSignup">
                        <div>Alreay have an Account?</div>
                        <div className="anchor"><Link to="/">Sign in</Link></div>
                    </div>
                </div>
                <div className="imageContainer">
                    <img src={signupimg} alt=""/>
                </div>
            </div>
         );
    }
}
 
export default Signup;