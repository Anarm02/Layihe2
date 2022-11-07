let addTask=document.querySelector(".button3");
let lists=document.querySelector(".lists");
let input=document.querySelector(".text");
let sortBtn=document.querySelector(".buttonup");
let reverseBtn=document.querySelector(".buttondown");
let asd=false;
console.log(sortBtn);
function edit(){
    let lisdtdiv=document.querySelectorAll(".lists .task");
    console.log(lisdtdiv);
    if(lisdtdiv.length==0){
        lists.style.display="none";
        }
        else if(lisdtdiv.length!=0){
            lists.style.display="block";
        }
}
addTask.onclick=function(){
    
    if(input.value.length==0){
        alert("Xana boş buraxıla bilməz")
    }
    else{
        lists.innerHTML+=
        `<div class="task">
        ${input.value}
        <div class="btn-2">
        <img src="images/Group 56.png">
        </div>
        </div>`;
        let removeTask=document.querySelectorAll(".btn-2");
        for(let i=0;i<removeTask.length;i++){
            removeTask[i].onclick=function(){
                this.parentElement.remove();
                edit();
            }
        }
        
    }
    edit();
    
    function sortitem(){
        console.log("hello");
        let lisdtdiv2=document.querySelectorAll(".lists .task");
        let arr=[];
        lisdtdiv2.forEach(function(e){
            arr.push(e.innerText)
        })
        arr.sort()
        
        console.log(arr);
        arr.forEach(function(e,i){
    lisdtdiv2[i].innerHTML=e+`        <div class="btn-2">
    <img src="images/Group 56.png">
    </div>`;
    
        })
        let removeTask=document.querySelectorAll(".btn-2");
        for(let i=0;i<removeTask.length;i++){
            removeTask[i].onclick=function(){
                this.parentElement.remove();
                edit();
            }
        }
        console.log(asd);
    }
    function sortitem2(){
        let lisdtdiv2=document.querySelectorAll(".lists .task");
        let arr=[];
        lisdtdiv2.forEach(function(e){
            arr.push(e.innerText)
        })
        arr.sort().reverse();
        
        
        console.log(arr);
        arr.forEach(function(e,i){
    lisdtdiv2[i].innerHTML=e+`        <div class="btn-2">
    <img src="images/Group 56.png">
    </div>`;
    
        })
        let removeTask=document.querySelectorAll(".btn-2");
        for(let i=0;i<removeTask.length;i++){
            removeTask[i].onclick=function(){
                this.parentElement.remove();
                edit();
            }
        }
        console.log(asd);
    }

    sortBtn.onclick=sortitem;
    reverseBtn.onclick=sortitem2;
    

}
edit();


