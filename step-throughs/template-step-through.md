# Sample Input


[Perma-link to your PythonTutor step-through]()

[Z1x](https://www.codewars.com/users/Z1x)'s Solution

Explanation of why this is an interesting test case to step through

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

// solution, and a test case case

```
---


## Step 1


__Predicted Happenings:__
* __Global Context in addBinary__
  * _Variables_
    a. a = 2
    b. b = 2
  * _Objects
    a. a = 2
    b. b = 2
    c. c undefined
    d. res undefined
__Actual Happenings:__
* __Global Context__
  * _Variables_
    a.  nothing yet
  * _Objects
    a.
* __Other Contexts__
  * _Variables_
    a. nothing yet
  * _Objects
    a.



    ## Step 2


__Predicted Happenings:__
* __Global Context in addBinary__
  * _Variables_
    a. a = 2
    b. b = 2
    c. c = 4
  * _Objects
    a. a = 2
    b. b = 2
    c. c = 4
    d. res undefined
__Actual Happenings:__
* __Global Context__
  * _Variables_
    a. defining c as a sum of a and b
  * _Objects
    a.
* __Other Contexts__
  * _Variables_
    a. nothing yet
  * _Objects
    a.



## Step 3


__Predicted Happenings:__
* __Global Context in addBinary__
  * _Variables_
    a. a = 2
    b. b = 2
    c. c = 4
    d. res = ""
  * _Objects
    a. a = 2
    b. b = 2
    c. c = 4
__Actual Happenings:__
* __Global Context__
  * _Variables_
    a. defining res by empty string
  * _Objects
    a.
* __Other Contexts__
  * _Variables_
    a. nothing yet
  * _Objects
    a.


## Step 4


__Predicted Happenings:__
* __Global Context in addBinary__
  * _Variables_
    a. a = 2
    b. b = 2
    c. c = 4
    d. res = "0"
  * _Objects
    a. a = 2
    b. b = 2
    c. c = 4
__Actual Happenings:__
* __Global Context__
  * _Variables_
    a. defining res as  string "0"
  * _Objects
    a.
* __Other Contexts__
  * _Variables_
    a. nothing yet
  * _Objects
    a.



## Step 5


__Predicted Happenings:__
* __Global Context in addBinary__
  * _Variables_
    a. a = 2
    b. b = 2
    c. c = 2
    d. res = "0"
  * _Objects
    a. a = 2
    b. b = 2
    c. c = 2
__Actual Happenings:__
* __Global Context__
  * _Variables_
    a.  
  * _Objects
    a.
* __Other Contexts__
  * _Variables_
    a. defining c as 2 
  * _Objects
    a. 


## Step 6


__Predicted Happenings:__
* __Global Context in addBinary__
  * _Variables_
    a. a = 2
    b. b = 2
    c. c = 2
    d. res = "00"
  * _Objects
    a. a = 2
    b. b = 2
    c. c = 2
__Actual Happenings:__
* __Global Context__
  * _Variables_
    a. 
  * _Objects
    a.
* __Other Contexts__
  * _Variables_
    a. defining res as a string "00"
  * _Objects
    a.

## Step 7


__Predicted Happenings:__
* __Global Context in addBinary__
  * _Variables_
    a. a = 2
    b. b = 2
    c. c = 1
    d. res = "100"
  * _Objects
    a. a = 2
    b. b = 2
    c. c = 1
__Actual Happenings:__
* __Global Context__
  * _Variables_
    a. 
  * _Objects
    a.
* __Other Contexts__
  * _Variables_
    a. defining c as 1
    b. defining res as a string "100"
  * _Objects
    a.    


## Step 8


__Predicted Happenings:__
* __Global Context in addBinary__
  * _Variables_
    a. a = 2
    b. b = 2
    c. c = 0
    d. res = "100"
  * _Objects
    a. a = 2
    b. b = 2
    c. c = 0
__Actual Happenings:__
* __Global Context__
  * _Variables_
    a. 
  * _Objects
    a.
* __Other Contexts__
  * _Variables_
    a. defining c as 0
    b. returning value res as a sting "100"
  * _Objects
    a.    
Description of what happened in this step, and how well you predicted it.



___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>











