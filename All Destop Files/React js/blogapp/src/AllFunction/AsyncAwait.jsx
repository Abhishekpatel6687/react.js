import React from 'react'

const AsyncAwait = () => {
  const user = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(user) 
  user.then(function (data){
    console.log(data); 
  })
  return ( 
    <div>
        
    </div>
  )
};

export default AsyncAwait;
  