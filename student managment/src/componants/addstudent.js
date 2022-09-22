import { useState } from "react";
import "./Style.css"
import EmpTable from "./EmpTable";

function AddEmp() {
    var [Emps,setEmps] = useState([])

    var handleSubmit = (event)=>{
        event.preventDefault() 
        var temp = {
            std_Id : event.target.std_Id.value,
            std_Name : event.target.std_Name.value,
            std_Salary : event.target.std_Salary.value
        }
        setEmps([...std,temp])
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-evenly align-items-center" style={{height:"100vh"}}>
                <div className="col-4 p-5 shadow myblock">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="number" placeholder="phone" name="phone" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="text" placeholder="Emp_name" name="Emp_Name" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="number" placeholder="dob" name="dob" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="date" placeholder="start_date" name="start_date" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="date" placeholder="end_date" name="end_date" className="form-control" />
                        </div>
                        <div className="mb-3" style={{textAlign:"center"}}>
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
                <div className="col-5">
                    <stdtable data={Emps}/>
                </div>
            </div>
        </div>
    )
}
export default AddEmp;