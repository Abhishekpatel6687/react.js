import React from 'react'

const PropsMap = (props) => {
console.log(props)
  return (
    <div >
      {/* <h1>{props.data.name}</h1> */}
      {
        props.data.map((items)=>{
            return(
                <div key={items.id}>
                <h1>{items.name} {items.lname}</h1>
                </div>
            )
        })
      }
    </div>
  )
}

export default PropsMap;

