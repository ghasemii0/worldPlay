$(document).ready(function(){
  $("form").submit(function(event){
    var sentence = $("input#sentence").val();
    var choppedSentence = sentence.split(" ");
    //console.log(choppedSentence);

    var newString = [];
    choppedSentence.forEach(function(element){
      if (element.length >= 3)
      newString.push(element);
    });
    document.write(newString.join('-'));
    event.preventDefault();
  });
});
