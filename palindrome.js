document.addEventListener("DOMContentLoaded",() => {
    const userInput = document.getElementById("user_Input");
    const userSubmit = document.getElementById("user_submit");
    let userResponse= document.getElementById("user_Response"); 
         
    const checkIfPalindrome = () => {
        let usersWord = userInput.value;        
        let usersWordReversed = usersWord.split("").reverse().join("");            
        userInput.value = "";
        if(usersWord === usersWordReversed ){
            console.log(usersWord);
            console.log(usersWordReversed); 
            userResponse.innerHTML = "Your word was a palindrome";
        }else{
            console.log(usersWord);
            console.log(usersWordReversed);
            userResponse.innerHTML = "Your word was not palindrome";
        }   
    }  
    userSubmit.addEventListener("click" , checkIfPalindrome) ;    
});