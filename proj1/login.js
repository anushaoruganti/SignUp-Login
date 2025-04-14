function handleLoginDetails(eve){
    eve.preventDefault()
    let loginEmail=document.getElementById("email").value.trim()
    let loginPassword=document.getElementById("password").value.trim()

    let allUsers=JSON.parse(localStorage.getItem("allUsers"))

    let userFound=allUsers.find(x=>x.email===loginEmail && x.password ===loginPassword)

    if(userFound){
     alert("Your login Successfull....!")
     localStorage.setItem("loggedInUser",JSON.stringify(userFound.email))
     window.location.href="dashboard.html"
    }
}