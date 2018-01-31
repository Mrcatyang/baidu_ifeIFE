(function () {
    let content = document.querySelector('#content');
    let text = document.querySelector('#text');
    let leftEnter = document.querySelector('#left-enter');
    let rightEnter = document.querySelector('#right-enter');
    let leftExit = document.querySelector('#left-exit');
    let rightExit = document.querySelector('#right-exit');
    let bubble = document.querySelector('#bubble');
    let start = document.querySelector('#start');

    let create = x => {
        let span = document.createElement('span');
        span.textContent = x;
        span.style.height = x + 'px';
        return span;
    };
    let startBtn = () => {
        let num = 0;
        let allSpan = document.querySelectorAll('span');
        if (allSpan.length <= 50 ) {
            for (let i = 0;; i++) {
                let x = Math.floor(Math.random() * 101);
                if (x < 10) {
                    continue;
                } else {
                    let span = create(x);
                    content.appendChild(span);
                    num++;
                    if (num == 10) {
                        break;
                    }
                }
            }
        } else {
            alert('无法初始化')
        }
    };
    let leftEnterBtn = () => {
        let allSpan = document.querySelectorAll('span');
        if (allSpan.length < 60) {
            if (text.value >= 10 && text.value <= 100 && text.value !== '') {
                let span = create(text.value);
                content.insertBefore(span, content.firstElementChild);
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
            if (text.value >= 10 && text.value <= 100 && text.value !== '') {
                let span = create(text.value);
                content.appendChild(span);
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
        }
    };

    //冒泡排序
    let bubbleBtn = () => {
        let allSpan = document.querySelectorAll('span');

        for (let i = 0; i < allSpan.length - 1; i++) {
            for (let j = 0; j < allSpan.length - 1 - i; j++) {
                if (allSpan[j].offsetHeight > allSpan[j + 1].offsetHeight) {
                    var temp = allSpan[j].offsetHeight;
                    allSpan[j].style.height = allSpan[j + 1].offsetHeight + 'px';
                    allSpan[j].textContent = allSpan[j + 1].offsetHeight;
                    allSpan[j + 1].style.height = temp + 'px';
                    allSpan[j+1].textContent = temp;
                }
            }
        }
    };

    leftEnter.addEventListener('click', leftEnterBtn);
    rightEnter.addEventListener('click', rightEnterBtn);
    leftExit.addEventListener('click', leftExitBtn);
    rightExit.addEventListener('click', rightExitBtn);
    content.addEventListener('click', removeBtn);
    bubble.addEventListener('click', bubbleBtn);
    start.addEventListener('click', startBtn);
})()