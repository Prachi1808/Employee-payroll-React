import React from "react";
import './Dashboard.css';
import logo from '../../assets/logo.png';
import icons1 from '../../assets/Add.jpg'
import icons2 from '../../assets/download.png'
import icons3 from '../../assets/download edit.png'
import { Link } from 'react-router-dom';

function Dashboard() {
// 	constructor(props){
//         super(props)
//         this.state = {
//             employees:[],
//         }
//     }


//     employees = [];

//     componentDidMount=()=>{
//         EmployeePayrollService.getAllEmployee().then(response =>{
//             const employee = response.data;
//             this.setState({employees :employee });
//         })
//     }


//     deleteEmployee=(id)=> {
//         const value = parseInt(id);
//         EmployeePayrollService.delete(value);
//         window.location.assign(`http://localhost:3000/`);
//     }


//     updateEmployee = (employeeId) => {
//         console.log(employeeId)
//         //this.props.history.push("/form/:employeeId",{ employeeId});
//         this.props.history.push({
//             pathname: "/form/",
//             state: employeeId,
//           });
//         //console.log(`${employeeId}`)
//    };
	 return (
		   <div>
		        <header class="header-content header">
		            <div class="logo-content">
		                 <div>
		                     <span class="emp-text">EMPLOYEE</span><br/>
		                 <span class="emp-text emp-payroll">PAYROLL</span>
		                </div>
		            </div>
	         </header>
		         <div class="main-content">
			<div class="header-content">
				<div class="emp-detail-text">
		 			Employee Details<div class="emp-count">10</div>
		 		</div>
		 		<a><Link to="/add" class="add-button">
		 		<img src="{icons1}" alt="" /> Add User</Link></a>
		 	</div>
	
		 	<div class="table-main">
		 		<table id="table-display" class="table">
	 			<tr>
		 				<th></th>
		 				<th>Name</th>
						<th>Gender</th>
		 				<th>Department</th>
		 				<th>Salary</th>
		 				<th>Start Date</th>
		 				<th>Actions</th>
		 			</tr>
		 			<tr>
					<td><img class="profile" alt="" src="../../assets/download2.jpg"/></td>
					<td>Priyam</td>
					<td>Male</td>
					<td><div class='Dept-label'>Engineer</div></td>
					<td>40000</td>
					<td>15 Oct 2020</td>
					<td>
						<img id="1" onclick="remove(this)"
                        src={icons2}
                        alt="delete"/>
                    <img id="1" onclick="update(this)"
                        alt="edit"/>
					</td> 
				</tr>
			</table>
            <script defer src="../js/dashboard.js"></script>
        <script defer src="../js/utility.js"></script>
		</div>
	</div>

        </div>
    )
}

export default Dashboard;