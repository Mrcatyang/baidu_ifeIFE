(function () {
    let content = document.querySelector('#content');
    let text = document.querySelector('#text');
    let leftEnter = document.querySelector('#left-enter');
    let rightEnter = document.querySelector('#right-enter');
    let leftExit = document.querySelector('#left-exit');
    let rightExit = document.querySelector('#right-exit');
    let textSearch = document.querySelector('#textSearch');
    let search = document.querySelector('#search');
    
    let create = (x) => {
        let arr = x.split(/[^\u4e00-\u9fa5\w]+/);
        let arrFilter = arr.filter(item => item !=='')
        for(let i=0;i<arrFilter.length;i++){
            let span = document.createElement('span');
            span.textContent = arrFilter[i];
            if(window.event.target.id === 'left-enter'){
                content.insertBefore(span,content.firstElementChild)
            }else{
                content.appendChild(span);
            }  
        }
    };

    let searchBtn = () =>{
        let allSpan = document.querySelectorAll('span');
        for (let i=0;i<allSpan.length;i++){
            allSpan[i].innerHTML = allSpan[i].textContent.replace(textSearch.value,`<a>${textSearch.value}</a>`)
        }
    };
                         
    let leftEnterBtn = () => {
        let allSpan = document.querySelectorAll('span');
        if (allSpan.length < 60) {
            if (text.value !== '') {
                create(text.value);  
            } else {
                alert('请输入正确数字');
                text.value = '';
            }
        } else {
            alert('无法继续添加元素')
        }
    };
    let rightEnterBtn = () => {
        let allSpan = document.querySelectorAll('span');
        if (allSpan.length < 60) {
            if (text.value !== '') {
                 create(text.value);             
            } else {
                alert('请输入正确数字');
                text.value = '';
            }
        } else {
            alert('无法继续添加元素')
        }
    };
    let leftExitBtn = () => content.removeChild(content.firstElementChild);
    let rightExitBtn = () => content.removeChild(content.lastElementChild);
    let removeBtn = ev => {
        if (ev.target.nodeName == 'SPAN') {
            content.removeChild(ev.target);
        }else if(ev.target.nodeName == 'A'){
            content.removeChild(ev.target.parentNode);
        }
    };
 
    leftEnter.addEventListener('click', leftEnterBtn);
    rightEnter.addEventListener('click', rightEnterBtn);
    leftExit.addEventListener('click', leftExitBtn);
    rightExit.addEventListener('click', rightExitBtn);
    content.addEventListener('click', removeBtn);
    search.addEventListener('click',searchBtn);
   
})()