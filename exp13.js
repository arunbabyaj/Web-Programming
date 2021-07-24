function validate()
{

if(nameValidate())
{
  if(phoneValidate())
  {
    if(mailValidate())
    {
      if(addValidate())
      {
        if(passValidate())
         {
           alert("form submitted without errors");
           document.getElementById('form1').reset;
         }
      }
    }
  }
}
event.preventDefault();

}
function nameValidate()
{ var checkName=document.getElementById('txt2').value;
  if(checkName=='')
   {
      alert(" Name can not be blank ");
      document.getElementById("txt2").focus();
      return false;

   }
  else {
     return true;
  }
}


function passValidate()
{ var checkpas1=document.getElementById('txt5').value;
var checkpas2=document.getElementById('txt6').value;
  if(checkpas1=='')
   {
      alert(" password can not be blank ");
      document.getElementById("txt5").focus();
      return false;
   }
  else if (checkpas2=='') {
    alert(" confirm password can not be blank ");
    document.getElementById("txt6").focus();
    return false;

  }
  else if (checkpas1!=checkpas2) {
    alert(" password doesnt match ");
    document.getElementById("txt5").focus();
    return false;

  }
  else {
    return true;
  }
}
function addValidate()
{ var checkadd=document.getElementById('txt4').value;
  if(checkadd=='')
   {
      alert(" address can not be blank ");
      document.getElementById("txt4").focus();
      return false;
   }
  else {
     return true;
  }
}

function phoneValidate()
{ var checkPhone=document.getElementById('txt3').value;

   var phonePatt=/^[6-9]\d{9}$/;
   if(checkPhone=='')
   {
     alert("Phone Number empty");
     document.getElementById("txt3").focus();
     return false;
   }
   else {


  if(phonePatt.test(checkPhone))
   {

      return true;
   }
  else {
    alert(" Phone Number wrong ");
    document.getElementById("txt3").focus();
     return false;
  }
}

}
function mailValidate()
{
var mailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
var checkmail=document.getElementById('id5').value;
if(checkmail=='')
{
  alert("email empty");
  document.getElementById("id4").focus();
  return false;
}
else {
if(mailformat.test(checkmail))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
document.getElementById("id5").focus();
return false;
}
}
}
