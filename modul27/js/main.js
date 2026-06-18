function kthesms(){
    alert("kjo eshte nje funksion qe kthen sms")
}
kthesms();

function sum(n1,n2){
    return n1+n2;
}
console.log(sum(2,5));


function ktheminutat(minutat){
    return minutat * 60;
}
console.log(ktheminutat(4));



var car={
    name:"BMW",
    color:"red",
    year:2000,
    kilometrat:1000,

    startEngine:function(){
        alert("vrooom");
    },

    get getKm(){
        return this.kilometrat;
    },

    set setKm(km){
        this.kilometrat=km;
    }
};

console.log(car.getKm);

car.setKm=0;
console.log(car.getKm);

var school={
    name:"digital school",
    subject:"programim",
    studenta:2000,
    year:1000,
};
alert(school.name);


var computer=new Object();
computer.name="Lenovo";
computer.cpu="intel i9";
computer.ram="16GB";

computer.type=function(){
    return this.name + " " + this.cpu + "," + this.ram +",";

}

alert(computer.type());

function Computer(name,cpu,ram,gpu){
    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
    this.gpu=gpu;
}

var c1=new Computer("mac","8-core","8GB","5600m");
var c2=new Computer("mac2","8-core","16GB","5600m");