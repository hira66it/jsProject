
var mybutton1 = document.getElementById("mybutton1");
var mybutton2 = document.getElementById("mybutton2");

var mytext = document.getElementById("mytext1");
var mytext2 = document.getElementById("mytext2");
var lenMenu = document.getElementById("lenMenu");
// mybutton1.addEventListener('click', randSelect);
// mybutton1.addEventListener("mouseover", myFunction);
// mybutton1.addEventListener("mouseout", someOtherFunction);

// if (mybutton1.addEventListener) {                    // For all major browsers, except IE 8 and earlier
//     mybutton1.addEventListener("click", randSelect);
//   } else if (mybutton1.attachEvent) {                  // For IE 8 and earlier versions
//     mybutton1.attachEvent("onclick", randSelect);
//   }
var boblst=['서문 아만도','서문 브리또','서문 쌀국수','한울샘 라면','솟을샘 브리또', '솟을샘 만두','솟을샘 김밥','솟을샘 샌드위치','공학원 공순이','학관 아마뜨리치아나','꼬숑 돈까스','싸움의 고수 보쌈','신촌 타코벨','신촌 홍콩반점','신촌 맥날','연희동 순대국','신촌 버거킹','신촌 수제비','명물거리 달려라팬','돈까스브로','미나리식당','김도사불백','치즈를 사랑한 찜닭','또보겠지떡볶이','연경 자장면'];

// boblst = ""
// var boblst = readText("menu.txt")

// var textByLine = boblst.split("\n");

// alert(textByLine)
lenMenu.innerText = boblst.length;

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                boblst = rawFile.responseText;
                alert(boblst);
                // return(allText);
            }
        }
    }
    rawFile.send(null);
}
function err(){
    alert("이 기능은 아직 작동하지 않습니다.")
}
function randSelect(){
    var n=Math.floor(Math.random()*boblst.length);
    /*console.log(n)
    var i =4;
    var timer=function{
        timer2 = setInterval(function(){
            mytext.innerText = i;
            i-=1;
            if (i<0) {clearInterval(timer2);}
        },1000);
    };
    //timer;*/
    mytext.innerText = boblst[n];
    mytext2.innerText = "맛있게 드십쇼 ㅎㅎㅎ";

}

mybutton1.addEventListener('click', randSelect);
mybutton2.addEventListener('click', err);


// function readText(that){

//     if(that.files && that.files[0]){
//         var reader = new FileReader();
//         reader.onload = function (e) {  
//             var output=e.target.result;

//             //process text to show only lines with "@":				
//             //output=output.split("\n").filter(/./.test, /\@/).join("\n");

//             // return output;
//         };//end onload()
//         return reader.readAsText(that.files[0]);
//     }//end if html5 filelist support
// } 

function tableCreate() {
    var tbdy = document.getElementById('mytable');
    for (var i = 0; i < boblst.length; i++) {
      var tr = document.createElement('tr');
          var td = document.createElement('td');
          var th = document.createElement('th');
          th.scope="row";
          th.appendChild(document.createTextNode(i+1));
          td.appendChild(document.createTextNode(boblst[i]));
          tr.appendChild(th);
          tr.appendChild(td);

      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
  }
  tableCreate();