
/*Temporal Dead Zone (TDZ):
let and const have block scope:
Unlike var, which is function-scoped or globally scoped, let and const are
 block-scoped. This means they are only accessible within the block, statement, or expression where they are declared.
Temporal Dead Zone (TDZ):
When you use let and const, the variables are hoisted to the top of
 their block, but they remain uninitialized until the actual declaration is 
 reached in the code. Accessing the variable before the declaration results in a ReferenceError.
This time between the start of the block and the actual declaration 
is called the "Temporal Dead Zone" (TDZ). During this period, 
any attempt to access the variable leads to an error.
When we try to access the value which we declare with let and const 
 it hoisted to thor local memory area when we access it so the time when  between initialized undefine to value called temporal dead zone*/


console.log(b);
let a = 10;
var b = 100;