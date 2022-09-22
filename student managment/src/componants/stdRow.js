function EmpRow(props){
	return(
			 <tbody>
                    {props.data.map((item)=>
                        <tr key={item.Emp_Id}>
                            <td>{item.Emp_Id}</td>
                            <td>{item.Emp_Name}</td>
                            <td>{item.Emp_Salary}</td>
                        </tr>
                    )}

                </tbody>
		)
}


export default EmpRow;