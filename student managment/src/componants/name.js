function Names(){
    
    var handleEvent = function(event){
        console.log(event)
        var name =event.target.value
        console.log(name) // Check browser consoles
    }

    return (
        <div>
            <input type="text" placeholder="Enter name" onBlur={handleEvent}/>
        </div>
    )
}

export default Names;