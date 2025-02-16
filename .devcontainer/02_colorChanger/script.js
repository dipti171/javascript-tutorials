const btn=document.querySelectorAll('.button')
const body=document.querySelector('body')

btn.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=="gray"){
            body.style.background=e.target.id;
        }
        if(e.target.id=="green"){
            body.style.background=e.target.id;
        }
        if(e.target.id=="black"){
            body.style.background=e.target.id;
        }
        if(e.target.id=="blue"){
            body.style.background=e.target.id;
        }
        if(e.target.id=="yellow"){
            body.style.background=e.target.id;
        }
        if(e.target.id=="pink"){
            body.style.background=e.target.id;
        }
        if(e.target.id=="white"){
            body.style.background=e.target.id;
        }
        if(e.target.id=="purple"){
            body.style.background=e.target.id;
        }

       
    });
});
