

const endpoins = (path)=>{
  
    return window.location.origin + path;
}


export const buildNewEntry = async ()=>{

    const response = await fetch(endpoins("/api/journal"),{
        method:"POST"
    })
  
  if(response.ok){
    const data=response.json()
    // console.log(data)
    return data;
  }
}

export const updateJournalEntry = async (id,content)=>{
  // console.log({id:id,content:content})
    const response = await fetch(endpoins(`/api/journal/${id}`),{
        method:"PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
        
    })
  
  if(response.ok){
    const data= await response.json()
    // console.log(data)
    return data;
  }
}