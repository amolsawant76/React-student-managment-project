import EmpRow from "./stdRow"


function stdTable(props){ 

    return(
        <div>
            <table className="table table-hover table-striped"> 
                <thead>
                    <tr>
                        <th>phone</th>
                        <th>std Name</th>
                        <th>dob</th>
                        <th>state</th>
                    </tr>
                </thead>
               <stdRow data={props.data}/>
            </table>
        </div>
    )
}

export default stdTable;