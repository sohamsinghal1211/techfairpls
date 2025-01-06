user_name=''
pass_word=''

function signUp(){
    user_name=document.getElementById("user_name").value;
pwd=document.getElementById("password").value;
    if(user_name=="" || pwd==""){
alert("Username and Password cant be empty")
    }

}
function login(){
    document.getElementById("msg").innerHTML="";
    login_username=document.getElementById("login_username").value;
    login_password=document.getElementById("login_password").value;
    if(user_name != "" && pwd != "" && login_username != "" && login_password != ""){
        if(user_name==login_username && pwd==login_password){
            window.location="navigate.html"
                }
                else{
            document.getElementById("msg").innerHTML="Invalid Username or Password"
                }
    }
  else{
    document.getElementById("msg").innerHTML="Username and Password can not be Empty/Invalid"    
  }
}
function onSignIn(googleUser) {
    // alert("sign in");
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    window.location="navigate.html"

       
  }
  