function validate()
{

if(nameValidate())
{
  if(passValidate())
  {
    if(addValidate())
    {
      if(phoneValidate())
      {
        if(mailValidate())
         {
           alert("form submitted without errors");
          // document.getElementById('form1').reset;
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
     alert("please give your phone number");
     document.getElementById("txt3").focus();
     return false;
   }
   else {


  if(phonePatt.test(checkPhone))
   {

      return true;
   }
  else {
    alert(" Phone Number Invalid ");
    document.getElementById("txt3").focus();
     return false;
  }
}

}
function mailValidate()
{
 var a=document.getElementById("txt1");
 if(a == "")
 {
  alert("CANT BE EMPTTY");
  return false;
 }
 else
  {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(a.value.match(mailformat))
  {
  return true;
  }
  else
  {
 alert("You have entered an invalid email address!");
a.focus();
return false;
}
}
}