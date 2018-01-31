(function () {
    let content = document.querySelector('#content');
    let text = document.querySelector('#text');
    let leftEnter = document.querySelector('#left-enter');
    let rightEnter = document.querySelector('#right-enter');
    let leftExit = document.querySelector('#left-exit');
    let rightExit = document.querySelector('#right-exit');

    let leftEnterBtn = () => {
        if (text.value >= 0 && text.value < 10 && text.value !== '') {
            let span = document.createElement('span');
            span.textContent = text.value;
            //content.insertBefore(span, content.firstChild);
            content.insertBefore(span, content.firstElementChild);
            //content.insertBefore(span, content.childNodes[1]);
            //content.insertBefore(span, content.children[0]);
        } else {
            alert('请输入正确数字');
            text.value = '';
        }
    };
    let rightEnterBtn = () => {
        if (text.value >= 0 && text.value < 10 && text.value !== '') {
            let span = document.createElement('span');
            span.textContent = text.value;
            content.appendChild(span);
        } else {
            alert('请输入正确数字');
            text.value = ''
        }
    };
    let leftExitBtn = () => content.removeChild(content.firstChild);
    let rightExitBtn = () => content.removeChild(content.lastChild);
    let removeBtn = ev => {
        if (ev.target.nodeName == 'SPAN') {
            alert(ev.target.textContent);
            content.removeChild(ev.target);
        }
    };

    leftEnter.addEventListener('click', leftEnterBtn);
    rightEnter.addEventListener('click', rightEnterBtn);
    leftExit.addEventListener('click', leftExitBtn);
    rightExit.addEventListener('click', rightExitBtn);
    content.addEventListener('click', removeBtn);
})()