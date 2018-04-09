tests({

  // Fill this in with your test cases

  'two numbers starting with 0': function() {
    eq("110", binaryAddition(03,03));
  }



'one of them starts with 0': function() {
    eq("100", binaryAddition(000002,2));
  }



'two positive numbers': function() {
    eq("100", binaryAddition(2,2));
  }



'two negative numbers': function() {
    eq("-100", binaryAddition(-2,-2));
  }

'one positive one negative numbers': function() {
    eq("-1", binaryAddition(2,-3));
  }


'big numbers': function() {
    eq("", binaryAddition(1111110,1111111111111111111));
  }

'big numbers': function() {
    eq("", binaryAddition(11111104564657,11111111111111111888));
  }
});