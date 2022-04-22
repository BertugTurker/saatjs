let username = prompt("Adınız")
isimler = username.split(" ");
let ilkisim = isimler[0];
ilkisim = `${ilkisim[0].toUpperCase()}${ilkisim.slice(1).toLowerCase()}`



if (isimler[2]) {
    let middle = isimler[1]
    middle = `${middle[0].toUpperCase()}${middle.slice(1).toLowerCase()}`
    let lastlastname = isimler[2]
    lastlastname = `${lastlastname[0].toUpperCase()}${lastlastname.slice(1).toLowerCase()}`
    username = `${ilkisim} ${middle} ${lastlastname}`
    
}       else if (isimler[1]) {
        let middle = isimler[1]
        middle = `${middle[0].toUpperCase()}${middle.slice(1).toLowerCase()}`
        username = `${ilkisim} ${middle}`
} 

        else {
            username = ilkisim
}




let myName = document.querySelector("#myName")
myName.innerHTML = username;



function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    var x = new Date()
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
    document.getElementById('ct').innerHTML = `${x1} tarihinde`;
    display_c();
     }


