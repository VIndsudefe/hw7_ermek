
let inp1 = document.querySelector(".input1")
let inp2 = document.querySelector(".input2")
let inp3 = document.querySelector(".input3")
let equal = document.querySelector(".equal")
let p = document.querySelector(".answer")

equal.onclick=()=>{
    a=Number(inp1.value)
    console.log(a);
    b=Number(inp3.value)
    console.log(b);
    c=inp2.value
    console.log(c);
    if (c==="+"){
        p.innerHTML=a+b
    }else if(c==="-"){
        p.innerHTML=a-b
    }else if(c==="*"){
        p.innerHTML=a*b
    }else{
        p.innerHTML="error"
    }
}

