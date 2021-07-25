 function fact()
      {
      var n;
       var i;
       n=1;
       var x=document.getElementById("t1").value;
       for(i=1;i<=x;i++)
         {
             n=n*i;
          }
    document.getElementById("id1").innerHTML="FACTORIAL="+n;
      }