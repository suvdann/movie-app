let too=10;
let b=2;
if(too<=10){
console.log(too+b,"ok")
}else{
    console.log('Ih bain')
}

let number=10;
if(number%2===0){
    console.log("Tegsh")
}else {console.log("somdgoi")}

// Хэрвээ энэ тоо 1–100 хооронд байвал "Зөв тоо", үгүй бол "Буруу"
let num=20
if(num>=1 &&num<=100){
    console.log("zow too")
}else {console.log("buruu")}

let day = 10;

switch (day) {
  case 1:
    console.log("Даваа");
    break;
  case 2:
    console.log("Мягмар");
    break;
  case 3:
    console.log("Лхагва");
    break;
  case 4:
    console.log("Пүрэв");
    break;
  default:
    console.log("Мэдэгдэхгүй өдөр");
}

// ternary syntax => нөхцөл ? үнэн тохиолдолд юу хийх : худал тохиолдолд юу хийх;

let age =10;
let result=age>=18?"Насанд хүрсэн ":"nasand hureegui";
console.log(result)
let nm=15;
console.log(nm%2===0?"tegsh too":"sondgoi");
