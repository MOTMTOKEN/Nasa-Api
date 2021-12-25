document.querySelector('button').addEventListener('click', getFetch) 

function getFetch(){ 
    const choice = document.querySelector('input').value 
    const url = `https://api.nasa.gov/planetary/apod?api_key=8qI0fKXQ8VO07ngBuDl12kDnWF819jFKaaUbPsr8&date=${choice}` 
    
    fetch(url)
    .then(res => res.json()) 
    .then(data => { 
        console.log(data) 
        if (data.media_type === "video") {
            document.querySelector('iframe').src = data.url
            
        } else if (data.media_type === 'image') {
            document.querySelector('img').src = data.hdurl
        } else {
            alert('Media type not supported try another date')
        }
        
        document.querySelector("h3").innerText = data.explanation 
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 

}