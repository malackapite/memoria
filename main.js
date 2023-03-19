let kepek = [
  "https://http.cat/100",
  "https://http.cat/102",
  "https://http.cat/103",
  "https://http.cat/200",
  "https://http.cat/202",
  "https://http.cat/203",
];
let melyik=-1
let szamlalo=0
let nev=prompt("Név:")
let secs=0,mins=0
let idofunc
let ranglista = [
    {
        nev:"342",
        perc:2,
        masodperc:32
    },
    {
        nev:"fsdfsdfsd",
        perc:0,
        masodperc:12
    }
]

$(document).ready(init);

function init() {
    torol()
    kepek = dupla()
    kever()
    rangki()
    general()
    
    let a
    idofunc = setInterval(() => {
        ido()
    }, 1000);
}

function kever(){
    //Durstenfeld's version shuffle
    for (let ix = kepek.length-1; ix >= 0; ix--) {
        let index = parseInt(Math.random()*(ix+1))
        let temp = kepek[index]
        kepek[index] = kepek[ix]
        kepek[ix] = temp    
    }
}

function dupla(){
    return kepek.concat(kepek)
}

function torol(){
    $("#kepek").empty()
    szamlalo=0
    secs=0,mins=0
    $("#ido").empty()
    $("#ido").append("00:00")
    $("#lepes").empty()
    $("#lepes").append(szamlalo)
    melyik=-1
    kepek = [
        "https://http.cat/100",
        "https://http.cat/102",
        "https://http.cat/103",
        "https://http.cat/200",
        "https://http.cat/202",
        "https://http.cat/203",
      ];
}
function general(){
    for (let ix = 0; ix < kepek.length; ix++) {
        $("#kepek").append(`<div class="lap">
        <div style="background: black;"></div>
        <img src="${kepek[ix]}" alt="macska${kepek[ix]}" style="transform:rotateY(180deg)">
        </div>`)
        $(".lap").eq(ix).on('click', function () {
                asd(ix)
            })
    }
}

function asd(ix){
    if(melyik==ix){
        forog(ix,0)
        melyik=-1
    }
    else{
        forog(ix, 180)
        egyezes(ix)
        setTimeout(() => {
            if(keres())
            setTimeout(() => {
                alert("nyertél\r\nLépés: "+ szamlalo+"\r\nIdő: "+kettoSzamjegy(mins) +":"+kettoSzamjegy(secs))
                clearInterval(idofunc)
            },2000)
        }, 2000);    
    }
}

function forog(nth, deg){
    
    $(".lap").children('img').eq(nth).css({
        '-webkit-transform':'rotateY(' + (180-deg) + 'deg)',
        '-moz-transform':   'rotateY(' + (180-deg) + 'deg)',
        '-ms-transform':    'rotateY(' + (180-deg) + 'deg)',
        '-o-transform':     'rotateY(' + (180-deg) + 'deg)',
        'transform':        'rotateY(' + (180-deg) + 'deg)'
    });
    $(".lap").children('div').eq(nth).css({
        '-webkit-transform':'rotateY(' + deg + 'deg)',
        '-moz-transform':   'rotateY(' + deg + 'deg)',
        '-ms-transform':    'rotateY(' + deg + 'deg)',
        '-o-transform':     'rotateY(' + deg + 'deg)',
        'transform':        'rotateY(' + deg + 'deg)'
    });
    
}

function egyezes(index){

    if(melyik!=-1 && kepek[melyik]==kepek[index]){
        //setTimeout később olvassa be az értéket
        temp=[melyik,index]
        setTimeout(() => {
            eltunik(temp[0])
            eltunik(temp[1])
        }, 2000);
        szamlalo++ 
        $("#lepes").empty()
        $("#lepes").append(szamlalo)     
    }
    else if(melyik!=-1){
        temp=[melyik,index]
        setTimeout(() => {
            forog(temp[0], 0)
            forog(temp[1], 0)
        }, 2000); 
        szamlalo++
        $("#lepes").empty()
        $("#lepes").append(szamlalo)
    }
    melyik= melyik==-1?index:-1
    
    
}
function eltunik(nth){
    $(".lap").eq(nth).addClass("hus")
    kepek[nth]=""
}

function keres(){
    ix=0
    while(ix<kepek.length && kepek[ix]=="")
        ix++
    return ix>=kepek.length
}

function ido(){  
    $("#ido").empty()
    if(secs>=60){
        secs-=60
        mins++
    }
    $("#ido").append(kettoSzamjegy(mins) +":"+kettoSzamjegy(secs))
    secs++
}

function kettoSzamjegy(szam){
    if(szam<10)
        szam="0"+szam
    return szam
}

function rangki(){
    $("#ranglista").children("ol").empty()
    for (let ix = 0; ix < ranglista.length; ix++) {
        $("#ranglista").children("ol").append(`<li><b>${ranglista[ix].nev}</b>: ${kettoSzamjegy(ranglista[ix].perc)}:${kettoSzamjegy(ranglista[ix].masodperc)}</li>`)   
    }
}
// $(function a() {
//     $("img").on('click', function() {
        

//         var val = -180;
//         $(this).css({
//             '-webkit-transform':'rotateY(' + 360 + 'deg)',
//             '-moz-transform':   'rotateY(' + 360 + 'deg)',
//             '-ms-transform':    'rotateY(' + 360 + 'deg)',
//             '-o-transform':     'rotateY(' + 360 + 'deg)',
//             'transform':        'rotateY(' + 360 + 'deg)'
//         });
//     });
// });