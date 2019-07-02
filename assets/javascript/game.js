$( document ).ready(function() {
    console.log( "ready!" );
});



var wins = 0;
var loses = 0;
var crystalscore =0;



var random = Math.floor(Math.random()* 102+19)
 console.log(random);
 $("#answer").html(random);



$(crystal1).on("click", function(){
   var crystal1Num = Math.floor(Math.random()* 12) + 1
    console.log(crystal1Num);
    $("#crystalresult").html(crystal1Num);

})

$(crystal2).on("click", function(){
    var crystal2Num = Math.floor(Math.random()* 12) + 1
     console.log(crystal2Num);
     function(){
         if (!==0)
     $("#crystalresult").html(crystal2Num);
     }

 
})

$(crystal3).on("click", function(){
   var crystal3Num = Math.floor(Math.random()* 12) + 1
    console.log(crystal3Num);

    $("#crystalresult").html(crystal3Num);

})

$(crystal4).on("click", function(){
    var crystal4Num = Math.floor(Math.random()* 12) + 1
     console.log(crystal4Num);
     $("#crystalresult").html(crystal4Num);
 })











 
