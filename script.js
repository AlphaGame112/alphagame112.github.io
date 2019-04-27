var lists = ["Projekty", "Gry"];
var p0 = [
    {nazwa: "Old cars", adres:"Strona/index.html"},
    {nazwa: "E12", adres:"e12.html"}
];
var p1 = [
    {nazwa: "Bezwładna", adres:"Bezwladna.html"},
    {nazwa: "Construct", adres:"Construct/construct.html"}
];

function openList(a) {
    var central = document.getElementById("central");
    central.innerHTML = lists[a];
    central.style.margin = 0;
    container.innerHTML="";
    switch(a) {
        case 0:
            for(x in p0){
                container.innerHTML+="<a href='"+p0[x].adres+"'>"+p0[x].nazwa+"</a>";
            }
        break;
        case 1:
            for(x in p1){
                container.innerHTML+="<a href='"+p1[x].adres+"'>"+p1[x].nazwa+"</a>";
            }
        break;
    }
}