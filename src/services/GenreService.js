const baseURL = "http://10.10.12.205:8080/genre";

const getAllGenres = async () =>{
    const genres = await fetch(baseURL +"/genres");
    return await genres.json();
}

const updateGenres = async (form) =>{
    const genre = await fetch (baseURL,{
        method :'PUT', 
        headers :{
            'Content-Type':'application/json', 
            Accept:'application/json'}, 
        body : JSON.stringify(form)});
    return await genre.json();
}

const createGenre = async (form) => {
    console.log('form', form);
    
    const genre = await fetch("http://10.10.12.205:8080/genre",{
        method: 'POST',
        headers: {
            'Content-Type':'application/json', 
                Accept:'application/json'},
        body: JSON.stringify(form)
    })
    return await genre.json();
}

const deleteGenre = async (id) => {
    const genre = await fetch (baseURL+`/${id}`,{
        method: 'DELETE',
        headers : {
            'Content-Type':'application/json',
                Accept:'application/json'
            },
        
    })
    return genre;
}

export {getAllGenres, updateGenres, createGenre, deleteGenre}