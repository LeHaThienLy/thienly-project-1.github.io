

$(window).scroll(function () {
    myFunction();

})



var dataper = Math.floor(Math.random()*101);
var programing = Math.floor(Math.random()*101);
var usibility = Math.floor(Math.random()*101);
var design = Math.floor(Math.random()*101);
var stt= Math.floor(Math.random()*5)





function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('#navbar').addClass('fixed-top');

    } else {
        $('#navbar').removeClass('fixed-top');
    }
}
function processRandom() {


    var v = $('.value-bar')
    console.log(v);


    for(var i=0;i<v.length;i++)
    {
        var x=$(v[i]).attr('data-ten');
        console.log(x)
        var percent = Math.floor(Math.random()*101);
        $('.percent').append(percent+ "%");
        $('div.value-bar').css({'width': percent + "%"});


    }

    console.log(x)
    // switch (x){
    //     case "data":
    //         $('.percent').append(dataper+ "%");
    //         $('div.value-bar').css({'width': dataper + "%"});
    //         break
    //     case "programming":
    //         $('.percent').append(programing+ "%");
    //         $('div.value-bar').css({'width': programing + "%"});
    //         break
    //     case "usibility":
    //         $('.percent').append(usibility+ "%");
    //         $('div.value-bar').css({'width': usibility + "%"});
    //         break
    //     case "design":
    //         $('.percent').append(design+ "%");
    //         $('div.value-bar').css({'width': design + "%"});
    //         break
    // }





}

