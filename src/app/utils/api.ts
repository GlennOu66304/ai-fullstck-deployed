

const endpoins = (path)=>{
  
    return window.location.origin + path;
}


export const buildNewUser = async ()=>{

    const response = await fetch(endpoins("/api/journal"),{
        method:"POST"
    })
  
  if(response.ok){
    const data=response.json()
    console.log(data)
    return data;
  }
}