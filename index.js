function on(){
    var d=document.getElementById("black")
    var a=document.getElementById("addnotes")
    d.style.display="flex"
    a.style.display="flex"
}
function del(){
    var de=document.getElementById("del")
    de.parentElement.remove()
}
function cancel(){
    var d=document.getElementById("black")
    var a=document.getElementById("addnotes")
    d.style.display="none"
    a.style.display="none"
}
function add(){
    event.preventDefault(); 
    var d=document.createElement('div')
    var h=document.createElement('h2')
    var n=document.getElementById('input1')
    var m=document.getElementById('input2')
    var p=document.createElement('p')
    var o=document.createElement("button")
    o.textContent="Delete"
    o.setAttribute("id","button")
    o.addEventListener("click",(event)=>{
        event.target.parentElement.remove()
    })
    p.textContent=m.value
    h.textContent=n.value
    d.appendChild(h)
    d.appendChild(p)
    d.appendChild(o)
    d.setAttribute("id","box")
    var j=document.getElementById('container')
    j.appendChild(d)
    var d=document.getElementById("black")
    var a=document.getElementById("addnotes")
    d.style.display="none"
    a.style.display="none"
}
