import React, { Component } from 'react';
import LogInimage from "../images/Hiring_re_yk5n.png";
import {Link} from "react-router-dom";

class Login extends Component {
    state = { 
        account : {
            email : "",
            password : "",
            remember : false,
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


             let check = JSON.parse(window.localStorage.getItem("remember"));
             if(check != null){
                this.props.history.push("/home");
             }
             
         })
     }



     handleChange = e =>{
        const account = {...this.state.account};
        account[e.target.name] = e.target.value;
        this.setState({account});
     }

     validate = () =>{
         let existingUser = JSON.parse(window.localStorage.getItem(this.state.account.email));
         if(existingUser != null){
             if(existingUser.password === this.state.account.password){
                 if(this.state.account.remember)
                 {
                     window.localStorage.setItem("remember", JSON.stringify(this.state.account))
                     this.props.history.push("/home");
                 }
                 else{
                    this.props.history.push("/home");
                 }
             }
             else{
                document.querySelector(".passwordmsg").innerHTML = "*Incorrect Password";
                 
             }
             
         }
         else{
             document.querySelector(".message").innerHTML = "Please Signup"
         }
     }

     handleCheck = () =>{
         const account = {...this.state.account};
         account.remember = !account.remember;
         this.setState({account})
     }


    handleSubmit = e =>{
        e.preventDefault();
        this.validate();
    }


    render() { 
        const {account} = this.state;
        return ( 
            <div className="container">
                <div className="loginContainer">
                    <h1>Login</h1>
                    <p> See your growth and get consulting support!</p>
                    <form onSubmit = {e => this.handleSubmit(e)}>
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" placeholder="mail@website.com" id="email" onChange={e =>  this.handleChange(e)} value={account.email} required/>
                        <label htmlFor="password">Password*</label>
                        <input type="password" name="password" placeholder="Min.8 character" id="password" onChange={e =>  this.handleChange(e)} value={account.password} required /> 
                        <span className="passwordmsg"></span>

                        <div className="checkboxforgetContent">
                            <div>
                            <input type="checkbox" id="rememberme" 
                            onChange = {this.handleCheck} value={account.remember}
                             />
                            <label htmlFor="rememberme">Remember me</label>
                            </div>
                            <span className="anchor">Forget password?</span>
                        </div>
                        <span className="message"></span>
                        <button className="loginBtn"  type="submit">Login</button>
                    </form>
                    <div className="linktoSignup">
                        <div>Not registered yet?</div>
                        <div className="anchor"><Link to="/signup">Create an Account</Link></div>
                    </div>
                </div>
                <div className="imageContainer">
                    <img src={LogInimage} alt=""/>
                </div>
            </div>
         );
    }
}
 
export default Login;