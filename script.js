const input = document.querySelector("input");
const lowerCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#Uppercase span");
const camelCaseOutput = document.querySelector("#Camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kababCaseOutput = document.querySelector("#kababcase span");
const trimCaseOutput = document.querySelector("#trim span");




function capitalizeString(str) {
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1, str.length)
  }

function camelCase(str) {
    const lowerCaseString = str.toLowerCase() // to make setence in lowercase
    const wordsArray = lowerCaseString.split(' ') // to split the words
    const finalArray = wordsArray.map((word , i) => {  
        if (i === 0) return word     // to make sure that the first word of the sentence will not capital
          return capitalizeString(word)
    })   
    return finalArray.join('')
      
 }

 function pascalCase(str) {
    const lowerCaseString = str.toLowerCase() // to make setence in lowercase
    const wordsArray = lowerCaseString.split(' ') // to split the words
    const finalArray = wordsArray.map((word) => {  
          return capitalizeString(word)
    })   
    return finalArray.join('')
      
 }

 function snakeCase(str) {
    return str.replaceAll(' ','_')
 }

 function kababCase(str) {
   return str.replaceAll(' ','-')
}

function trim(str) {
   return str.replaceAll(' ','')
}


 
function updateScreen() {
lowerCaseOutput.innerText = input.value.trim().toLowerCase();
upperCaseOutput.innerText = input.value.trim().toUpperCase();
camelCaseOutput.innerText = camelCase(input.value.trim());
pascalCaseOutput.innerText = pascalCase(input.value.trim());
snakeCaseOutput.innerText = snakeCase(input.value.trim());
kababCaseOutput.innerText = kababCase(input.value.trim());
trimCaseOutput.innerText  = trim(input.value.trim());





}

updateScreen()

input.addEventListener('input',() => {
updateScreen()
   
})



