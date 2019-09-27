let res = document.querySelector("#res");
document.querySelector("#btn0").addEventListener("click", () => {write(res, "0")});
document.querySelector("#btn1").addEventListener("click", () => {write(res, "1")});
document.querySelector("#btnEql").addEventListener("click", () => {eql(res)});
document.querySelector("#btnSum").addEventListener("click", () => {write(res, "+")});
document.querySelector("#btnSub").addEventListener("click", () => {write(res, "-")});
document.querySelector("#btnMul").addEventListener("click", () => {write(res, "*")});
document.querySelector("#btnDiv").addEventListener("click", () => {write(res, "/")});
document.querySelector("#btnClr").addEventListener("click", () => {clr(res)});

function write(e, str){
    e.innerHTML = e.innerHTML + str;
}

function clr(e){
    e.innerHTML = "";
}

function eql(e){
    let operation = e.innerHTML.match(/[+\-\*\/]/)[0];
    let nums = e.innerHTML.split(operation);
    let $1 = parseInt(nums[0], 2);
    let $2 = parseInt(nums[1], 2);
    let result = 0;
    switch(operation){
        case '+':
            result = Number($1) + Number($2);
            break;
        case '-':
            result = Number($1) - Number($2);
            break;
        case '*':
            result = Number($1) * Number($2);
            break;
        case '/':
            result = Number($1) / Number($2);
            break;
    }
    e.innerHTML = result.toString(2);
}
