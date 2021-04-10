
function validate(callback){

    var username=document.getElementById('username');
    var password=document.getElementById('password');
    if(username.value==""&& password.value==""){
        document.getElementById('span1').innerHTML=" *Fields cannot be blank";
        document.getElementById('span2').innerHTML=" *Fields cannot be blank";
        //  return false;
    }
    if(username.value==="user"&& password.value=="12345"){
        
        callback();
    }
    else{
        alert(" Wrong login credentials ");
         return false;
    }
}
function callback(){
    window.location.assign("home.html");

}