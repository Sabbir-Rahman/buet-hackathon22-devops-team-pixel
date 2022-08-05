import React from 'react';
import axios from 'axios';
//import Select from 'react-select'
import { useEffect, useState } from 'react';

// creating a function to view all courses
const ViewCourse = () => {
    const [courses, setCourses] = useState([]);
    const usertoken = localStorage.getItem("admintoken");
    console.log(usertoken);
    const decodeduser = 'jwt cholle eikhane jwt thakbe';
    console.log(decodeduser);
    const handleSubmit = async () => {
        if (decodeduser != null) {
            const adminID = decodeduser.id; // SUBJECT TO CHANGE
            try {
                const response = await axios.get('http://68.183.191.149:5010/api/v1/admin/course/view'); // SUBJECT TO CHANGE 
                console.log(response);
                if ((response.status = 200)) {
                    setCourses(response.data.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        else{
            alert("please login to VIEW COURSE");
        }
    }
    return (
        <div>
            <label>
                <button onClick={handleSubmit}>View Course</button>
            </label>
            <table>
                <tr>
                    <th>Course Name</th>
                     <th>Course description</th>
                    {/* <th>Course Credit</th> */}
                </tr>
                {courses.map(course => (
                    <tr>
                        <td>{course.name}</td>
                         <td>{course.description}</td>
                        {/*<td>{course.credit}</td> */}
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default ViewCourse;