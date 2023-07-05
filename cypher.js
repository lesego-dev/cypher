function cyph(myString, shift) 
{
  let result = '';
  
  //the for loop goes through the whole alphabet for the purpose of being cyclical
  for (let i = 0; i < myString.length; i++) 
  {
    let myAlph = myString.charCodeAt(i);									//charCodeAt gives ASCII value of a letter
    if (myAlph >= 65 && myAlph <= 90) 										//capital A is 65 and Z is 90	
	{
      result += String.fromCharCode((myAlph - 65 + shift) % 26 + 65);		// the values being converted into uppercase characters
    }
	else if (myAlph >= 97 && myAlph <= 122)									//when counting 26 letters from 97 which is "a" to 122 which is "z"
	{
      result += String.fromCharCode((myAlph - 97 + shift) % 26 + 97);		//this converts the values into lowercase characters
    }
	else
    {
		result += myString.charAt(i);										//the rest of the other characters stay the same
	}
  }
  
  return result;															//return the result of the cyph 
  
}

console.log (cyph("St T lx Wpdprz",15));               /* calling the function and displaying output in the console,
                                                          it has shifted by 15 letters and returns "Hi I am Lesego" */