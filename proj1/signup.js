function handleSignUpDetails(){
    let signUpName=document.getElementById("name").value.trim()
    let signUpEmail=document.getElementById("email").value.trim()
    let signUpPassword=document.getElementById("password").value.trim()

   
    let allUsers=JSON.parse(localStorage.getItem("allUsers")) || []
    const existedUser = allUsers.find((x)=> x.email===signUpEmail)
    if (existedUser){
        return confirm("are u new user")
    }
    let newUsers = {
        name:signUpName,
        email:signUpEmail,
        password:signUpPassword
    }

    allUsers.push(newUsers)

    localStorage.setItem("allUsers",JSON.stringify(allUsers))
    window.location.href="login.html"

}