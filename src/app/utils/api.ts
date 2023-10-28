

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


export const getQaData =  async ( entries,question) => {
  // console.log(entries,question);
  // console.log(JSON.stringify({ entries, question }));
  const response = await fetch(endpoins("/api/qa"), {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify({ entries, question }),
  });
  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  } else {
    throw new Error("Failed to post QA data");
  }


};
