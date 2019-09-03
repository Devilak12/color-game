var  color=['Red','Blue','Green','Yellow','Orange','White','Black','Pink','Purple'];

let count=0;
let sec=20;
// var d=document.getElementById('h1');
// d.addEventListener('click',newEvent);

// function newEvent(e){
//     console.log(e.innerhtml);
// }

// condition for shuffeling colors
let lol='Red';
let st=document.getElementById('start');
st.addEventListener('click',start);
function start(){
    lol=color[Math.floor(Math.random()*9)];
    document.getElementById('mid').innerHTML=lol;
    if(sec==20)
    {
    timer();
    }
    function timer()
    {
        if(sec<=0)
        {
            alert("Game End Score Is="+count);
        }
        else{
            --sec;
            document.getElementById('timer').innerHTML=sec;
        }
        setTimeout(function(){timer();},1000);
    } 
    
    a=document.getElementById('h1');
    b=document.getElementById('h2');
    c=document.getElementById('h3');
    d=document.getElementById('h4');
    e=document.getElementById('h5');
    f=document.getElementById('h6');
    g=document.getElementById('h7');
    h=document.getElementById('h8');
    i=document.getElementById('h9');

    a.addEventListener('click',rand);
    b.addEventListener('click',rand);
    c.addEventListener('click',rand);
    d.addEventListener('click',rand);
    e.addEventListener('click',rand);
    f.addEventListener('click',rand);
    g.addEventListener('click',rand);
    h.addEventListener('click',rand);
    i.addEventListener('click',rand);
}
    function rand(k){
   
    var arr=color;
    console.log(k.target.className);
    console.log(lol);
    if(lol==(k.target.className)){
        count++;
        document.getElementById('rt_pt').textContent='PointsAquired='+count;

    }
    else{

    }

        function randarray(arr){

           
            let newpos,temp;
            for(let i= arr.length-1;i>0;i--){
                newpos=Math.floor(Math.random()*(i+1));
                temp=arr[i];
                arr[i]=arr[newpos];
                arr[newpos]=temp;
            }
            return arr;
        };
        lol=color[Math.floor(Math.random()*9)];
        document.getElementById('mid').innerHTML=lol;
    let newarry=randarray(arr);
    a.innerHTML=newarry[0];
    a.className=newarry[0];
    b.innerHTML=newarry[1];
    b.className=newarry[1];
    c.innerHTML=newarry[2];
    c.className=newarry[2];
    d.innerHTML=newarry[3];
    d.className=newarry[3];
    e.innerHTML=newarry[4];
    e.className=newarry[4];
    f.innerHTML=newarry[5];
    f.className=newarry[5];
    g.innerHTML=newarry[6];
    g.className=newarry[6];
    h.innerHTML=newarry[7];
    h.className=newarry[7];
    i.innerHTML=newarry[8];
    i.className=newarry[8];

    };
