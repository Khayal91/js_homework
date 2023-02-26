// 1) funksiya acacam
// 2) dunsiyaya ad verecem
// 3) a-nin deyerini goturecem
// 4) a-nin deyerini number edecem
// 5) a-nin deyerini a deyiwene beraber edecem

// 6) b-nin deyerini goturecem
// 7) b-nin deyerini number edecem
// 8) b-nin deyerini b deyiwene beraber edecem

// 9) res id-ni goturecem
// 10) goturduyum "res"-in icine a ve b deyiwenlerini toplamagi yazdiracam
// 11) html-deki res idsi olan yere onclick eventi elave edecem
// 12) onclik-in icine demo funksiyami elave edecem

function demo(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)

    document.getElementById("res").innerHTML = a + b
}

// ==========================================================

// 1) funksiya acmaq
// 2) funksiyaya ad vermek

// 3) id demo-nu qebul et
// 4) style ile border radiusu 50% et

// 5) HTML-de demo olan divde onclick eventi elave et
// 6) elave etdiyin onclick eventine border funksiyasini yerlewdir 

function border(){
    document.getElementById('demo').style.borderRadius = "50%"
}




// https://animejs.com/documentation/#duration