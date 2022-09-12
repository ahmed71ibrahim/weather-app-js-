function myFunction(){
    let x = document.getElementById("cid").value;
    x = parseInt(x);
    // console.log("x" + x);
    if(!x){ alert("Please Enter City ID  ");
      document.getElementById("cid").value = ""; }
     if( isNaN(x)  ) 
    { alert("Please Enter Integer Value ");
      document.getElementById("cid").value = "";
    }}



    function sgt() {alert("you can try => 2643743 OR 3163858 OR 3163852 ")}