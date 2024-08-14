async function sendData(values, url) {
    //sending http-request.
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("successful");
            return data;
        } else {
            console.log("Failed");
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}


function logInForm(){
    //Retrieving and hiding all elements belonging to the 'start' class.
    document.getElementById("start").style.display="none";
    //displaying login form.
    document.getElementById("logIn-form").style.display="block";
    
}
function registerForm(){
    document.getElementById("start").style.display="none";
    document.getElementById("register-form").style.display="block";
}