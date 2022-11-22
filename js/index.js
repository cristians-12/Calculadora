
// function resta(){
//     let numero_1 = parseInt($(".numero1").val());
//     let numero_2 = parseInt($(".numero2").val());
//     let resul = numero_1-numero_2;
//     return resul;
// }



$("#sum").click(function(){
    let numero_1 = parseInt($(".numero1").val());
    let numero_2 = parseInt($(".numero2").val());
    let resul = numero_1+numero_2;
    $(".resul").html(resul);
})

$("#rest").click(function(){
    let numero_1 = parseInt($(".numero1").val());
    let numero_2 = parseInt($(".numero2").val());
    let resul = numero_1-numero_2;
    $(".resul").html(resul);
})

$(".mult").click(function(){
    let numero_1 = parseInt($(".numero1").val());
    let numero_2 = parseInt($(".numero2").val());
    let resul = numero_1*numero_2;
    $(".resul").html(resul);
})

$(".divi").click(function(){
    let numero_1 = parseInt($(".numero1").val());
    let numero_2 = parseInt($(".numero2").val());
    let resul = numero_1/numero_2;
    $(".resul").html(resul.toFixed(2));
})

$(".exp").click(function(){
    let numero_1 = parseInt($(".numero1").val());
    let numero_2 = parseInt($(".numero2").val());
    let resul = numero_1**numero_2;
    $(".resul").html(resul);
})
