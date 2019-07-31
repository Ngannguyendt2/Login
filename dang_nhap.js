function login() {
    let user=document.getElementById('user').value;
    let pass=document.getElementById('pass').value;

     if(user=='Admin')
    {
       if(pass=='TheMaster')
       {
           alert('Welcome');
       }
       else if(pass=='')
       {
           alert('Cancel');
       }
       else {
           alert('Wrong password');
       }
    }
     else if(user=='')
     {
         alert('Cancel');
     }
     else
     {
         alert('I dont know you');
     }
}
console.error('get error');