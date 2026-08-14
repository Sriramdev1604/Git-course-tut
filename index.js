function helloFunction(name,a,b){
    alert("Hello " + name);
    console.log("Hello " + name);
    

    
    const add = (a,b) => a + b;

    console.log(add(a,b));

    //primary task subraction method also been added successfully.
    const sub = (a,b) => a - b;

    console.log(sub(a,b));

} 

 

// Non primary task (in development mode)
const welcomeBanner = () => {
    alert("Welcome to the Git Fundamentals ");
}

welcomeBanner();
