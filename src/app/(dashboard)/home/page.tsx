// first load the enrty of the loogind user
// then load the list of the entry

const loadEntries = ()=>{
        
}

const Home =  async ()=>{
    const entries = await loadEntries()
    return (
       <h2>this is the home page</h2>
    )
}

export default Home