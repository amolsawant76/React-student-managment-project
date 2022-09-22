function TableRow(props){
	return(
			 <tbody>
                    {props.data.map((item)=>
                        <tr key={item.fruit_name}>
                            <td>{item.fruit_name}</td>
                            <td>{item.rate}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    )}

                </tbody>
		)
}


export default TableRow;