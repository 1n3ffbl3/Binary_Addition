# [<username>](https://www.codewars.com/users/<username>)'s Solution

```js

function addBinary(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}
```

---

## Solution Explanation

Explain the solution they used.  Was it heavy in logic or languge features? What strategies did they use?  How is it like and unlike others?

This solution provides us the function calls addBinary with two variables : "var c" which is sum of two integers (a and b) and "var res" which is an empty string. 
Inside the function we can find the one context : while loop. Inside the while loop we can find one condition : the sum of two integers must be bigger and equal to 1. In the context there are also the "var res" with
decrements our "c" by 2 and the method Math.floor (). 
---

## Language Features

What language features did they use?

* while True
* method Math.floor()

---

## Comparison

How does their solution compare to yours?  How would you make yours more like theirs? What suggestions would you have for them?

---

## Notes

What you learned from this solution:
* method Math.floor() which returns the largest integer which is not grater than the argument value.
*
*

What you still don't understand:
* method Math.floor()  in this context
*
*

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
