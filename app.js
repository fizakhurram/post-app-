function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dp = document.getElementById('Dp').value || "https://via.placeholder.com/50";
    if (!name || !email || !password) {
        alert("please filled all required fields");
        return;
    }

    const user = { name, email, password, dp };//object line
    localStorage.setItem("user", JSON.stringify(user));
//Local Storage is like a small box inside your web browser
//where websites can save information permanently — even if you close the tab or //turn off your computer.
        //It’s a built -in feature of every modern browser(like Chrome, Edge, Firefox, etc.).
// JSON -> localStorage always accept the data in textform like single or key value pair("user", "fiza") so JSON is converted "object line" into text than save..
            alert("Account successfully created!");
    window.location.href = "post.html";//You can set location.href to go to another page:This tells the browser:
//“Open the page called post.html in the current tab”
}

const savedData = JSON.parse("user")

function createPost(){
if(savedData){
    document.getElementById("userDp").src = savedData.dp
    document.getElementById("userName").src = savedData.name
}else {
    alert("No user found. Please sign up first.");
    window.location.href = "signup.html";
}
}


