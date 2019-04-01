import React from "react"

function TitleFilter ({val="",TitleFilterChange= () => {}}){
return (<div className ="filter">
    <input className="search" type="text" val={val} onChange={(e)=>TitleFilterChange(e.target.value)}/>
    <button className="buttom">Search</button>

</div>
)

}

export default TitleFilter