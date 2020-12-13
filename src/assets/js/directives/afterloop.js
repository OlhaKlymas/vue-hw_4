function afterLoop(el, {value}){
    setTimeout(()=>{
        if(el.childNodes.length !== 0 && el.childNodes.length === value){
            alert('Цикл закончился!')
        }
    }, 0)
}
export default afterLoop