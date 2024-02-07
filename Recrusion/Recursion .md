# Recursion

Recursion is a programming technique where a function calls itself in order to solve a problem. It is particularly useful for solving problems that can be broken down into smaller, similar subproblems. In recursion, the function continues to call itself with modified input until it reaches a base case, which is a condition that stops the recursion.

## What is Recursion?

Recursion is a process where a function calls itself as a subroutine. This allows the function to repeat itself several times, outputting the result and the end of each iteration.

## Types of Recursion

### 1. Linear Recursion

Linear recursion occurs when a function calls itself only once. Each recursive call generates only one subsequent recursive call until it reaches the base case.

### 2. Tail Recursion

Tail recursion occurs when the recursive call is the last thing the function does. This means there is no pending computation after the recursive call returns, making it easier for compilers to optimize.

### 3. Binary Recursion

Binary recursion occurs when a function calls itself twice in each recursion step. Each recursive call generates two subsequent recursive calls until it reaches the base case.

### 4. Mutual Recursion

Mutual recursion occurs when two or more functions call each other in a cycle. Each function delegates part of its task to the other function(s).

### 5. Nested Recursion

Nested recursion occurs when a recursive function passes the result of its recursive call as an argument to another call. The nested call can be deeper than the original call.

### 6. Indirect Recursion

Indirect recursion occurs when a function calls another function that eventually calls the first function in a cycle.
