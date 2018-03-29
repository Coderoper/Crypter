function encryptStrings(sentence) {

  var results = [];
  var output = [];
  var counter = 0;
  var encrypted = "";


  var size_root = parseInt( Math.sqrt(sentence.length ) ); // convert the length of the sentence to integers
  // tokenize by 8 grams
  for( var i=0; i<sentence.length; i+= size_root) {
    //console.log( sentence.slice(i,i+size_root) ) ;
    results.push(sentence.slice(i,i+size_root));
  }

  // read each character to the output array
  for(var i=0; i<size_root; i++) {
    for(var j=0; j<size_root; j++) {
      output.push( results[j].charAt(i) );
    }
  }

  // chunk it by 5 character
  for( var i=0; i<output.length; i += 5 ) {
    encrypted += output.slice(i, i+5) ;
    encrypted += " ";
  }

  return encrypted.replace(/,/g,'') ; // return the string

}

$(document).ready(function() {

  $("form#crypto").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#plainText").val();
    $("#encrypted").text( encryptStrings(userInput.replace(/ /g,'').replace(/'/g,'').replace(/,/g,'')) );
    $(".output").show();
  });
});
