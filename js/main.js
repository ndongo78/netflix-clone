$(document).ready(()=>{
    const email=$("#email").val();
    const password=$("#password").val();
    const username=$("#username").val();
   const btnSubmit = $("#btnSubmit")
//    if(!email){
//     $("#password").addClass("notShow");
//     $("#username").addClass("notShow");
//     }
//    if(!email || !password || !username){
//      btnSubmit.attr("type", "button");
//    }
btnSubmit.click((e)=>{
    e.preventDefault();
    console.log(password);
    if(email ){
        $("#email").hide();
        $("#password").show();
    }else if(password){
        $("#password").hide();
        $("#username").show();
    }
})


 
})