function languageRec(q1, q2, q3, q4, q5){
  return q1 + q2 + q3 + q4 + q5;
}
  
$(document).ready(function() {
  $("form#language-recommendation").submit(function(event) {
    event.preventDefault();
    const question1 = parseInt($("#experience").val());
    const question2 = parseInt($("input:radio[name=question2]:checked").val());
    const question3 = parseInt($("input:radio[name=question3]:checked").val());
    const question4 = parseInt($("input:radio[name=question4]:checked").val());
    const question5 = parseInt($("input:radio[name=question5]:checked").val());
    const favoriteColor = $("#color").val();

    const recommendation = languageRec(question1, question2, question3, question4, question5);
  
  //  $("body").css("color", favoriteColor);

    if(recommendation === -11){
      $("body").removeClass();
      $("body").addClass("scratch");
    }else if(recommendation <= -8){
      $("body").removeClass();
      $("body").addClass("python");
    }else if(recommendation <= -5){
      $("body").removeClass();
      $("body").addClass("csharp");
    }else if(recommendation === 11){
      $("body").removeClass();
      $("body").addClass("brainf--k");
    }else if(recommendation >= 8){
      $("body").removeClass();
      $("body").addClass("cplusplus");
    }else if(recommendation >= 5){
      $("body").removeClass();
      $("body").addClass("javascript");
    }else{
      $("body").removeClass();
      $("body").addClass("java");
    }
  });
});