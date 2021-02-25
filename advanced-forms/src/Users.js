import React from "react";
import User from "./User"
export default function Users(props) {
  
  
  
  
  
  
  return(
          <div>
           {props.allUsers.map((eachUserObj,index)=> (

           <User key={index} eachUserObj={eachUserObj} />
           )
           )}
          </div>







  )
}
