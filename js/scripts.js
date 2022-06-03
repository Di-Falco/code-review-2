function languageRec(q1, q2, q3, q4){
  return q1 + q2 + q3 + q4;
}

function result(recommendation, helloWorld) {

  if(recommendation < 11 || recommendation > -11){
    $("#helloWorld").show();
  }

  if(recommendation === -11){
    $(".box#scratch").slideDown("slow");
    $.fx.off = true;
  }else if(recommendation <= -6){
    $(".box#python").slideDown("slow");
    $.fx.off = true;
  }else if(recommendation <= -2){
    $(".box#csharp").slideDown("slow");
    $.fx.off = true;
  }else if(recommendation === 11){
    $(".box#brainf--k").slideDown("slow");
    $.fx.off = true;
  }else if(recommendation >= 6){
    $(".box#cplusplus").slideDown("slow");
    $.fx.off = true;
  }else if(recommendation >= 2){
    $(".box#javascript").slideDown("slow");
    $.fx.off = true;
  }else{
    $(".box#java").slideDown("slow");
    $.fx.off = true;
  }
}
  
$(document).ready(function() {
  $("form#language-recommendation").submit(function(event) {
    event.preventDefault();
    const question1 = parseInt($("#experience").val());
    const question2 = parseInt($("input:radio[name=question2]:checked").val());
    const question3 = parseInt($("input:radio[name=question3]:checked").val());
    const question4 = parseInt($("input:radio[name=question4]:checked").val());
    const favoriteColor = $("#color").val();
    const helloWorld = $("#helloWorldInput").val();

    const recommendation = languageRec(question1, question2, question3, question4);
  
    $("body").css("background-color", favoriteColor);

    $("#scratch,#python,#csharp,#brainf--k,#cplusplus,#javascript,#java").hide();

    result(recommendation, helloWorld);

    $(".output").text(helloWorld);
  });
});