import React from 'react'
import './Payroll-form.css'
import logo from '../../assets/logo.png'
import profile3 from '../../assets/download1.jpg'
import profile1 from '../../assets/download2.jpg'
import profile7 from '../../assets/download3.jpg'
import profile8 from '../../assets/download4.jpg'
import { Link } from 'react-router-dom';
//import Employees from '../../Service/employees'
//import { isValidDateValue } from '@testing-library/user-event/dist/utils';
function Add() {
    // const allDepartment = ["HR", "Sales", "Finance", "Engineer", "Others"]
    // const [formValue, setForm] = useState({
    //     name: "",
    //     profilePic: "",
    //     gender: "",
    //     department: [],
    //     salary: "",
    //     startDate: "",
    //     notes: "",
    //     isUpdate: false,
    // });


    // const onCheckChange = (name) => {
    //     let index = formValue.department.indexOf(name);

    //     let checkArray = [...formValue.department];

    //     if (index > -1) checkArray.splice(index, 1);
    //     else checkArray.push(name);

    //     setForm({ ...formValue, department: checkArray });
    // };
    // const onReset = () => {
    //     setForm({
    //         name: "",
    //         profilePic: "",
    //         gender: "",
    //         department: [],
    //         salary: "",
    //         startDate: "",
    //         notes: ""
    //     });
    // };
    // const save = async(event) => {
    //     event.preventDefault();
    //     console.log("save");
    //     if (await isValidDateValue()){
    //         return;
    //     }
    //     let employeeObject = {
    //         name: formValue.name,
    //         department: formValue.department,
    //         gender: formValue.gender,
    //         salary: formValue.salary,
    //         profilePic: formValue.profilePic,
    //         startDate: `${formValue.year}-${formValue.month}-${formValue.day}`,
    //         notes: formValue.notes
    //     };
    //     Employees.addEmployee(employeeObject).then((response) => {
    //         console.log(response);
    //         alert("Data Added Successfully ", response);
    //     })
    //     localStorage.setItem('EmployeeList', JSON.stringify(employeeObject));
    //     console.log(employeeObject);
    //     alert('Employee ${formValue.name} has been added')
    // }-

    // const onNameChange = (event) => {
    //     setForm({ ...formValue, [event.target.name]: event.target.value });
    //     console.log('value for', event.target.name, event.target.value);
    // }

    return (
        <div>
            <header class="header-content header">
            <div class="logo-content">
                <img src={logo} alt="logo"/>
                <div>
                    <span class="emp-text">EMPLOYEE</span>
                    <span class="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
            </header>
            <div class="form-content">
            <form class="form" action="#" onreset="resetForm()"
                onsubmit="save()">
                    
                <div class="row-content">
                    <label for="name" class="label text">Name</label>
                    <input type="text" class="input" id="name" name="name"
                        placeholder="Your name.." required />
                    <error-output class="text-error" for="name"></error-output>
                </div>
                <div class="row-content">
                    <label class="label text" for="profile">Profile image</label>
                    <div class="profile-radio-content">
                        <label>
                            <input type="radio" id="profile1"
                                value="../../assets/download2.jpg"
                                name="profile1"/>
                            <img class="profile" id="image1"
                                src={profile1}/>
                        </label>
                        <label>
                            <input type="radio" id="profile7"
                                value="../../assets/download3.jpg"
                                name="profile2"/>
                            <img class="profile" id="image2"
                                src={profile7}/>
                        </label>
                        <label>
                            <input type="radio" id="profil8"
                                value="../../assets/download4.jpg"
                                name="profile3"/>
                            <img class="profile" id="image3"
                                src={profile3}/>
                        </label>
                        <label>
                            <input type="radio" id="profile3"
                                value="./../assets/download1.jpg"
                                name="profile4"/>
                            <img class="profile" id="image4"
                                src={profile8}/>
                        </label>
                    </div>
                </div>
                <div class="row-content">
                    <label for="gender" class="label text">Gender</label>
                    <div>
                        <input type="radio" id="male" name="gender"
                            value="male"/>
                        <label for="male" class="text">Male</label>
                        <input type="radio" id="female" name="gender"
                            value="female"/>
                        <label for="female" class="text">Female</label>
                    </div>
                </div>
                <div class="row-content">
                    <label for="department" class="label text">Department</label>
                    <div>
                        <input type="checkbox" class="checkbox" id="hr"
                            name="department" value="HR"/>
                        <label for="hr" class="text">HR</label>
                        <input type="checkbox" class="checkbox" id="sales"
                            name="department" value="Sales"/>
                        <label for="sales" class="text">Sales</label>
                        <input type="checkbox" class="checkbox" id="finance"
                            name="department" value="Finance"/>
                        <label for="finance" class="text">Finance</label>
                        <input type="checkbox" class="checkbox" id="engineer"
                            name="department" value="Engineer"/>
                        <label for="engineer" class="text">Engineer</label>
                        <input type="checkbox" class="checkbox" id="others"
                            name="department" value="Others"/>
                        <label for="others" class="text">Others</label>
                    </div>
                </div>
                <div class="row-content">
                    <label for="salary" class="label text">Choose your salary:
                    </label>
                    <input type="range" class="input" name="salary" id="salary"
                        min="300000" max="500000" step="100" value="400000"/>
                    <output class="salary-output text" for="salary">400000</output>
                </div>
                <div class="row-content">
                    <label class="label text" for="startDate">Start Date</label>
                    <div>
                        <select id="day" name="Day">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select name="Month" id="month">
                            <option value="Jan">January</option>
                            <option value="Feb">Febuary</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>
                        <select name="Year" id="year">
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </div>
                </div>
                <div class="row-content">
                    <label for="notes" class="label text">Notes</label>
                    <textarea id="notes" class="input" name="Notes"
                        placeholder=""></textarea>
                </div>
                <div class="buttonParent">
                    <Link to="/" class="resetButton
                        button cancelButton">Cancel</Link>
                    <div class="submit-reset">
                        <button class="button submitButton" id="submitButton"
                            type="submit">Submit</button>
                        <button type="reset" class="resetButton button">Reset</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Add;