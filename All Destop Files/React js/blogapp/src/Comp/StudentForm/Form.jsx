import React, {useState} from "react";
import styles from "./form.module.css";

const initialValues ={
    firstName:'',
    secondName: '', 
     isShow: false
}

export default function StudentForm(){
    const [state,setState]= useState(initialValues);

    function handleOnChange(e){
        const {name , value} = e.target
        setState({...state, [name]: value })
    }

    function Submit(e){
        e.preventDefault()
        setState({...state, isShow:true})
    }
    

    return(
        <div className={styles.container}>
            <form>
                <span>First Name: </span>
                <input  type="text" value={state.firstName} placeholder="Enter your first name" name={'firstName'} onChange={(event)=>handleOnChange(event)}/><br></br>
                <span>Second Name: </span>
                <input type="text" placeholder="Enter your second name" name={'secondName'} onChange={(event)=>handleOnChange(event)}></input><br></br>
                <span>Mobile Number: </span>
                <input type="number" placeholder="Enter your number" name={'mobile'} onChange={(event)=>handleOnChange(event)}></input><br></br>
                <span>address</span>
               <textarea type="textarea" placeholder="Enter your address" name={'address'} onChange={(event)=>handleOnChange(event)}></textarea><br></br>
               <span>Gender: </span>
               <input type="radio" value="Male" name={'male'} onChange={(event)=>handleOnChange(event)}></input>Male
               <input type="radio" value="Female" name={'female'} onChange={(event)=>handleOnChange(event)}></input>Female
               <input type="radio" value="Other" name={'other'} onChange={(event)=>handleOnChange(event)}></input>Other
               <br></br>
               <span>City</span>
               <select name={'city'} onChange={(event)=>handleOnChange(event)}>
               <option value={''}>Select City</option>
               <option value={'Punjab'}>Punjab</option>
               <option value={'Lucknoe'}>Lucknow</option>
               <option value={'Delhi'}>Delhi</option>
               <option value={'Bengaluru'}>Bengaluru</option>
               <option value={'Chennai'}>Chennai</option>
               </select><br></br>
               <span>State</span>
               <input type="text" placeholder="Enter your state" name={'state'} onChange={(event)=>handleOnChange(event)}></input><br></br>
               <span>Hobbies</span>
               <input type="checkbox" name={''} onChange={(event)=>handleOnChange(event)}></input>cricket
               <input type="checkbox" name={''} onChange={(event)=>handleOnChange(event)}></input>listning music
               <input type="checkbox" name={''} onChange={(event)=>handleOnChange(event)}></input>reading book
               <input type="checkbox" name={''} onChange={(event)=>handleOnChange(event)}></input>travelling
               <br></br>
               <span>Password</span>
               <input type="password" placeholder="Enter your password" name={'password'} onChange={(event)=>handleOnChange(event)}></input><br></br>
               <button onClick={(e)=>Submit(e)}>Submit</button>
               <button>Reset</button>
                

            </form>

                   { state.isShow ? 
                   <div>

                   <h1> {state.firstName}</h1>
            <h1> {state.secondName}</h1>
            <h1> {state.mobile}</h1>
            <h1> {state.address}</h1>
            <h1> {state.male}</h1>
            <h1> {state.female}</h1>
            <h1> {state.other}</h1>
            <h1> {state.city}</h1>
            <h1> {state.state}</h1>
            <h1> {state.state}</h1>
            <h1> {state.password}</h1>
            </div>
            
             : null}
        </div>
    )
}