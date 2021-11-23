var dateOfBirth = document.querySelector(".dob");
var luckyNo = document.querySelector(".luckyNumber");
var buttonCheck = document.querySelector(".check");
var msg=document.querySelector(".message");
console.log(dateOfBirth.value)
buttonCheck.addEventListener("click",function clickHandler(){
    if(dateOfBirth.value==null ||dateOfBirth.value=="" ,luckyNo.value ==null||luckyNo.value==""){
        msg.innerText="Please Fill All Required Fields";
    }else{
        add(dateOfBirth.value)
    }

    
})
function add(x){
    var y = x.replaceAll("-","");
    let sum=0;
    for(let i=0;i<y.length;i++){
        sum=sum+Number(y.charAt(i))
    }
    checkingLuck(sum,luckyNo.value)
}
function checkingLuck(x,y){
    if(x%y==0){
        msg.innerText="Your birthday is lucky!!"
    }else{
        msg.innerText="Oh no!! Your birthday is not lucky."
    }
}