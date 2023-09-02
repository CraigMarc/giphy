const img = document.querySelector('img');
const button = document.querySelector('#newImage');
const h3 = document.querySelector('h3');
const h1 = document.querySelector('h1');


button.addEventListener("click", (e) => {
getImage()

})


let searchArray = ['Beach']
changeTitle()
getImage()



function changeTitle() {
h1.textContent = searchArray[0];
}

//function with promise
/*
function getImage () {

try{
fetch('https://api.giphy.com/v1/gifs/translate?api_key=v2YDF1ePtZC4F8HUx7ymmyQd8fP8aSO9&s='+searchArray[0], {mode: 'cors'})


.then(function(response) {

console.log(response)

return response.json();


})



.then(function(response) {


if (response.data  == []) {
   h3.textContent = "No Images Found";
}


console.log(response.data.images.original.url);
img.src = response.data.images.original.url;

});
}
catch (error) {
console.error("There has been a problem with your fetch operation:", error);
}



}
*/

//function with async await

async function getImage() {
    let src = document.getElementById("img").src;
console.log(src)

    try{
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=v2YDF1ePtZC4F8HUx7ymmyQd8fP8aSO9&s='+searchArray[0], {mode: 'cors'})

    const catData = await response.json();



    if (catData  == []) {
        h3.textContent = "No Images Found";
     }
     
     if (catData.data.images.original.url != src) {
   img.src = catData.data.images.original.url;
     }
     else getImage()
    }
    catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
        }
  }

 
//function with .catch no try block
/*
async function getImage() {

    
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=v2YDF1ePtZC4F8HUx7ymmyQd8fP8aSO9&s='+searchArray[0], {mode: 'cors'})

    const catData = await response.json();

    if (catData  == []) {
        h3.textContent = "No Images Found";
     }


    img.src = catData.data.images.original.url;
     console.log(img.src)
    
   
  
        
  }
*/
  //getImage().catch (alert) 

document.getElementById("form").addEventListener("submit", (e) => {
e.preventDefault();
const data = Object.fromEntries(new FormData(e.target).entries());


searchArray[0] = data.search

getImage(searchArray[0])
changeTitle()

});
