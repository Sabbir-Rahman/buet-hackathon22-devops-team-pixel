import React from 'react';
import axios from 'axios';
import Select from 'react-select'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Addcourse = () => {
    const [coursename, setCourseName] = useState("");
    const [code, setcode] = useState("");
    const [credit, setCredit] = useState(1);
    const [initialState2, setInitialState2] = useState([]);
    const usertoken = localStorage.getItem("admintoken");
    console.log(usertoken);
    //const decodeduser = jwt.decode(usertoken);
    //console.log(decodeduser);

    
    const handleSubmit = async () => {
        // if (decodeduser != null) {
            // const adminID = decodeduser.id; // SUBJECT TO CHANGE
            const newCourse = {
                //adminID,
                coursename,
                code,
                credit
            }
            console.log(newCourse);
            
            try {
                //test run for time validation of reservation
                // if(timeComparison()){
                //     console.log("ok");
                // }
                // else{
                //     console.log("not ok");
                // }



                
                    const response = await axios.post('/reserve/', newCourse); // SUBJECT TO CHANGE 
                    console.log(response);
                    if ((response.status = 200)) {
                        alert("your reservation has been made");
                    }

                //this is working but in line 57 
                //it is not working as it cannot current accss remainig sit 
            } catch (error) {
                console.log(error);
            }
        //}
        // else{
        //     alert("please login to CREATE COURSE");
        // }
    }
    return (
        <div>
            <label>
                Course Name
                <input type="text" onChange={e => setCourseName(e.target.value)} />
            </label>
            <label>
                Course Code
                <input type="text" onChange={e => setcode(e.target.value)} />
            </label>
            <label>
                Course Credit
                <input type="Number" onChange={e => setCredit(e.target.value)} />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />

        </div>);
}

export default Addcourse;