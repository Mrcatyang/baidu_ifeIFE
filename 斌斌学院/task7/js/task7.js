(function(){
    let beforeBtn = document.querySelector('#before');
    let middleBtn = document.querySelector('#middle');
    let backBtn = document.querySelector('#back');
    let section = document.querySelectorAll('section');
    let nodeArr = [];
    
    let beforeSort = (node) => {
        if(node){
            nodeArr.push(node);
            beforeSort(node.firstElementChild);
            beforeSort(node.lastElementChild);
        }
    };
    let middleSort = (node) => {
        if(node){
            middleSort(node.firstElementChild);
            nodeArr.push(node);
            middleSort(node.lastElementChild);
        }
    };
    let backSort = (node) => {
        if(node){
            backSort(node.firstElementChild);
            backSort(node.lastElementChild);
            nodeArr.push(node);
        }
    };
    
    let show = () =>{
        let i = 0;
        nodeArr[i].style.background = 'blue';
        timer = setInterval(function(){
            i++;
            if(i<nodeArr.length){
                
                nodeArr[i].style.background = 'blue';
                nodeArr[i-1].style.background = 'white';
                
            }else{
                clearInterval(timer);
                nodeArr[(nodeArr.length-1)].style.background = 'white';
            }
        },500) 
    };
    
    
    beforeBtn.addEventListener('click',()=>{
       beforeSort(section[0]);
       show();
    });
    middleBtn.addEventListener('click',()=>{
        middleSort(section[0]);
        show();
     });
     backBtn.addEventListener('click',()=>{
        backSort(section[0]);
        show();
     });
})()