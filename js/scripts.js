function languageRec(q1, q2, q3, q4){
  return q1 + q2 + q3 + q4;
}

function result(recommendation, helloWorld) {

  if(recommendation < 11 || recommendation > -11){
    $("#helloWorld").show();
  }

  if(recommendation === -11){
    $("#scratch").show();
  }else if(recommendation <= -6){
    $("#python").show();
    $(".output").text(helloWorld);
  }else if(recommendation <= -2){
    $("#csharp").show();
    $(".output").text(helloWorld);
  }else if(recommendation === 11){
    $("#brainf--k").show();
  }else if(recommendation >= 6){
    $("#cplusplus").show();
    $(".output").text(helloWorld);
  }else if(recommendation >= 2){
    $("#javascript").show();
    $(".output").text(helloWorld);
  }else{
    $("#java").show();
    $(".output").text(helloWorld);
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

  });
});