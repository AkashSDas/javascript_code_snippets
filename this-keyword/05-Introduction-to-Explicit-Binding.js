// ###### Explicit Binding - Call, Apply, Bind ######

// =================================
// Choose what we want the context of "this" to be using call, apply or bind
// Whenever we see call, apply or bind we can easily determine what the value "this" will be, because we get to set it as the first parameter to call, apply or bind.
// NOTE: These 3 can only be used on functions. call apply and bind are methods that can only be used by functions not by any other data type like string, booleans or objects.
// =================================
// ### Call method ###

// The first argument of call method is whatever we want the value of "this" keyword to be. 
// It is commonly called ad thisArg and we can set whatever we want. 
// The arguments after thisArg are any parameters that we want to pass to the function, which we are changing the context of the keyword "this" inside of. 
// It can have infinite number of arguments. When a call method is used on a function that function is immediately invoked.
// =================================
// ### Apply method ###

// It is almost similar to the call method, But it take 2 parameters at the most .
// =================================
// ### Bind method ###

// It is same as call method. Instead of invoking function immediately it returns a function definition.
// Function definition: Let say we're going to make a function called first function and it is going to return the string hello. If we do not envoke the function but examine the variable we created, we returned a function definition.
// Bind is extremely powerful function as we can save functions with a different value of the keyword "this" and invoke them at a later point in time
// Bind is quite valuable when working with asynchronus code like set timeout and is building block for advanced programming techniques like couriering
// ========================================================
// Name Of Method | Parametes        | Invoke Immediately
// ========================================================
// Call           |thisArg,a,b,c,... | Yes
// Apply          |thisArg, [a,b,..] | Yes
// Bind           |thisArg, a,b,c,...| No
// =================================
// Summary: 
//    Call, Apply, Bind are used to explicitly set the value of "this" keyword. 
//    They are used when we want full control over what the keyword "this" refers to. 
//    So it will have precedence over two rules. 
//    Call and Apply will immediately invoke the function they are called on whereas bind return a new function definition with the value of the keyword "this" explicitly set. 
//    Call and Bind accepts an infinite number of parameters whereas Apply only take in two.
