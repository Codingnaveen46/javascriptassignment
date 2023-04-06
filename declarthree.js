{
    // console.log(myLetVar); // Output: undefined
    // console.log(myVarVar); // Output: undefined
    // console.log(myConstVar); // Output: Uncaught ReferenceError: Cannot access 'myConstVar' before initialization
    
    let myLetVar = "This is my let variable.";
    var myVarVar = "This is my var variable.";
    const myConstVar = "This is my const variable.";
  
    console.log(myLetVar); // Output: This is my let variable.
    console.log(myVarVar); // Output: This is my var variable.
    console.log(myConstVar); // Output: This is my const variable.
  }


  