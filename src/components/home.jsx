import React, { Component } from 'react';
import {HomeFilled } from "@ant-design/icons";
import homeimg from "../images/luke-chesser-pJadQetzTkI-unsplash.jpg";

class Home extends Component {
    state = { 
        mode: false,
     }


     componentDidMount(){
         document.addEventListener("DOMContentLoaded", ()=>{

        let value = window.localStorage.getItem("darkmode");
            if(value === "true"){
                document.querySelector(".homeContainer").classList.add("darkContainer")
                this.setState({mode : true});
            }
            else{
                document.querySelector(".homeContainer").classList.remove("darkContainer")
                
            }
        }
         )  
    }


    handleClick=()=>{
        window.localStorage.removeItem("remember");
       this.props.history.push("/");
    }
    changeNight =(value) =>{
        
        if(value){
            document.querySelector(".homeContainer").classList.add("darkContainer")
        }
        else{
            document.querySelector(".homeContainer").classList.remove("darkContainer")

        }
    }


    handeChange = e =>{
        let mode = {...this.state};
            mode = e.target.checked;            
        this.setState({mode});
        window.localStorage.setItem("darkmode", e.target.checked)
        this.changeNight(mode);
    }

    render() { 
        return ( 
            <div className="homeContainer">
                <div className="premisesContainer">
                    <button className="logoutBtn" onClick={this.handleClick}>Logout</button>  

                    <div  className="toggleBtn">
                        <input type="checkbox"
                        id = "darkmode"
                        checked = {this.state.mode}
                        onChange ={e =>this.handeChange(e)}
                        /> 
                        <label htmlFor="darkmode" > Enable Dark mode</label>

                    </div>

                    <div className="content">
                        <HomeFilled className="icon"   />
                        <h1>premises</h1>
                    </div>
                </div>

                <div className="homeimage">
                    <div className="homeIcon"><HomeFilled className="icon"   /></div>
                    <img src={homeimg} alt=""/>
                </div>
            </div>
         );
    }
}
 
export default Home;
