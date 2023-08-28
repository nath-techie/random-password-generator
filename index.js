const pwbox=document.getElementById("password");

const uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc="abcdefghijklmnopqrstuvwxyz"
const sym="!@#$%^&*(){}[]";
const num="1234567890";
const allchar=uc+lc+sym+num;

function generate(){
    const len=document.getElementById("len").value;
    document.getElementById("error").innerText="";
    pwbox.value="";
    document.getElementById("msg").style.visibility = "hidden";
    if(len<8 || len>20) 
    return document.getElementById("error").innerText="Sorry length of password should be 8 to 20 !";
    let p="";
    while(p.length<len)
    {
   p+=uc[Math.floor(Math.random()*uc.length)];if(p.length==len) break;
   p+=lc[Math.floor(Math.random()*lc.length)];if(p.length==len) break;
   p+=num[Math.floor(Math.random()*num.length)];if(p.length==len) break;
   p+=sym[Math.floor(Math.random()*sym.length)];if(p.length==len) break;
   p+=allchar[Math.floor(Math.random()*allchar.length)];if(p.length==len) break;
    
    }
 pwbox.value=p;

}

function copy() {
    let password_text = pwbox.value;
    navigator.clipboard.writeText(password_text)
      .then(() => {
        if(password_text=="")
        {document.getElementById("msg").style.visibility = "visible";
        document.getElementById("msg").innerText="Nothing to copy🤷‍♂️";}
        else 
        document.getElementById("msg").style.visibility = "visible";
         
      })
      .catch((error) => {
        console.error('Failed to copy password:', error);
      });
  }
  
