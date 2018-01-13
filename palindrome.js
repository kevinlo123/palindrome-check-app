document.addEventListener("DOMContentLoaded",() => {
    const userInput = document.getElementById("user_Input");
    const userSubmit = document.getElementById("user_submit");
    let userResponse= document.getElementById("user_Response"); 
         
    const checkIfPalindrome = (event) => {
        event.preventDefault();
        let usersWord = userInput.value;        
        let usersWordReversed = usersWord.split("").reverse().join("");            
        if(usersWord === usersWordReversed ){
            console.log(usersWord);
            console.log(usersWordReversed); 
            userResponse.innerHTML = "Your word " + '"' + usersWord + '"' + " was a palindrome.";
        }else{
            console.log(usersWord);
            console.log(usersWordReversed);
            userResponse.innerHTML = "Your word " + '"' + usersWord + '"' + " was not a palindrome.";
        }
        if(usersWord === ""){
            alert("please input a word");
            userResponse.innerHTML = "";           
        }  
    }  
    userSubmit.addEventListener("click" , checkIfPalindrome) ;    
});