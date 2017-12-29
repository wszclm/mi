{
    let imgs = document.querySelectorAll('.banner-tu li');
    let dian = document.querySelectorAll('.banner-box li');
    let Banner = document.querySelector('.banner');
    let prev=document.querySelector('.banner-left');
    let next=document.querySelector('.banner-right')

    dian.forEach(function (value, index) {
        value.onclick = function () {
            for (let i = 0; i < dian.length; i++) {
                dian[i].classList.remove('active');
                imgs[i].classList.remove('active');
            }
            dian[index].classList.add('active');
            imgs[index].classList.add('active');
            n = index;
        }
    })
    let n = 0;

    function banner1(dir="r") {
        if (dir==="r") {
            n++;
        }else if (dir==="l"){
            n--;
        }

        if (n === dian.length) {
            n = 0;
        }
        if (n===-1){
            n=imgs.length-1;
        }
        for (let i = 0; i < dian.length; i++) {
            dian[i].classList.remove('active');
            imgs[i].classList.remove('active');
        }
        dian[n].classList.add('active');
        imgs[n].classList.add('active');
    }

    let t1 = setInterval(banner1, 2000);
    Banner.onmouseover = function () {
        clearTimeout(t1)
    }
    Banner.onmouseout = function () {
        t1 = setInterval(banner1, 2000);
    }
    next.onclick=function () {
        banner1();
    }
    prev.onclick=function () {
        banner1('l');
    }
}
{
    let next=document.querySelector('.mxdpy');
    let prev=document.querySelector('.mxdpz');
    let paner=document.querySelector('.mxdp-bot');
    next.onclick=function () {
        next.classList.remove('active');
        prev.classList.add('active');
        paner.style.transform="translateX(-1226px)";
    }
    prev.onclick=function () {
        prev.classList.remove('active');
        next.classList.add('active');
        paner.style.transform="translateX(0px)";
    }
    let n=0;
    let t1 = setInterval(function banner1() {
        n++;
        if (n%2==0){
            next.classList.remove('active');
            prev.classList.add('active');
            paner.style.transform="translateX(-1226px)";
        }else if (n%2===1){
            prev.classList.remove('active');
            next.classList.add('active');
            paner.style.transform="translateX(0px)";
        }
    }, 2000);
    paner.onmouseover = function () {
        clearTimeout(t1)
    }
    paner.onmouseout = function () {
        t1 = setInterval(function banner1() {
            n++;
            if (n%2==0){
                next.classList.remove('active');
                prev.classList.add('active');
                paner.style.transform="translateX(-1226px)";
            }else if (n%2===1){
                prev.classList.remove('active');
                next.classList.add('active');
                paner.style.transform="translateX(0px)";
            }
        }, 2000);
    }
}
{
    let jdwz=document.querySelectorAll('.jdyouwenzi');
    jdwz.forEach(function (v,index) {
        v.onmouseover=function () {
            for (let i=0;i<jdwz.length;i++){
                jdwz[i].classList.remove('jdyouwenzi1')
            }
            jdwz[index].classList.add('jdyouwenzi1')
        }
    })
}