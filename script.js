const show = document.querySelector('.countnum');
const incrementButton = document.querySelector("#allbuttons");

allbuttons.addEventListener('click', count);

let num = 0;
function count(a){
    const but = a.target.id;
    if(but ==='incre'){
        num += 1;
    }
    else if (but === 'decre'){
        num -= 1;
    }
    else{
        num = 0;
    }
    show.textContent= num;
}