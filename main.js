const display=document.getElementById('display');
const numbers=document.querySelectorAll('.button-number');
const symbol=document.querySelectorAll('.button-symbol')
const reset=document.getElementById('reset');
const deleteValue=document.getElementById('delete');
const equal=document.getElementById('equal');

numbers.forEach(element=>{
    element.addEventListener('click',(e)=>{
        let numbers=e.target.textContent
        display.textContent=display.textContent+numbers
    })
})
symbol.forEach(element=>{
    element.addEventListener('click',(e)=>{
        let symbols=e.target.textContent
        handleDisplay(display,symbols)
    })
})
function handleDisplay(display,symbols){
    if(!(display.textContent.endsWith('/')||display.textContent.endsWith('%')||display.textContent.endsWith('x')||display.textContent.endsWith('-')||display.textContent.endsWith('+')||display.textContent.endsWith('.'))){
        display.textContent=display.textContent+symbols
    }
}
reset.addEventListener('click',(e)=>{
    display.textContent=null
})
deleteValue.addEventListener('click',(e)=>{
    let newValue=display.textContent.slice(0,-1)
    display.textContent=newValue
})
equal.addEventListener('click',e=>{
    display.textContent=handleErrors(display)
})
function handleErrors(display){
    let result=eval(handleMultiplication(display)).toFixed(2)
    if(isNaN(result)){
        return 'Error'
    }else{
        return result
    }
}
function handleMultiplication(display){
    return display.textContent.replace(/x/,"*")
}
