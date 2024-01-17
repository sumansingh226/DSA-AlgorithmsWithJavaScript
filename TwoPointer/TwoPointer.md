# Two Pointer Technique

The two-pointer technique is a strategy used in algorithms to efficiently solve problems involving arrays or linked lists by employing two pointers that traverse the data structure in a specific manner.

## Advantages

- **Efficiency**: It optimizes time complexity to solve problems efficiently in linear or logarithmic time.
- **Reduced Space Complexity**: Often, the technique avoids using additional space other than the pointers.
- **Avoids Nested Loops**: It eliminates the need for nested iterations, leading to better performance.

## Principles

### 1. Two Pointers Approach

- **Initialization**: Start with two pointers at different positions within the array or linked list.

- **Traversal Criteria**: Move pointers based on certain conditions or criteria.

- **Termination Condition**: Continue traversal until pointers meet or fulfill a specific condition.

### 2. Techniques

#### a. Slow and Fast Pointers

- **Application**: Used when one pointer moves slower than the other.
- **Example**: Detecting cycles in a linked list.

#### b. Start from Different Ends

- **Application**: Both pointers start from opposite ends, converging towards each other.
- **Example**: Finding a pair in a sorted array that meets specific criteria.

## Use Cases

1. **Searching and Sorting**: Finding elements or ranges efficiently.
2. **Finding Pairs**: Determining pairs that satisfy given conditions.
3. **Checking Palindromes**: Verifying sequences, especially in linked lists.
4. **Optimizing Algorithms**: Reducing time complexity in certain scenarios.

## Considerations

- **Problem Analysis**: Understand when the technique is applicable.
- **Pointer Manipulation**: Adjust pointers based on specific conditions.
- **Edge Cases**: Handle scenarios where pointers reach ends or null values.
- # **Time Complexity**: Evaluate how this technique optimizes the solution.

# OR

# Two Pointer is Normally used for searching and it use two pointer,

in one loop over the given data structure. This is a quite common approach
which is used to solve coding problems, mostly related to strings, arrays, linked list.

In order to use two pointer, most of the times the data structure needs to be ordered in some way, which helps us to reduce the time complexity from O(n^2) or O(n^3) of just one loop with two pointer and search each item at one.

So depending on whether the input string/array is sorted or not, the two-pointer method can take O(nlogn) time complexity or even better which is O(n).

## Variants of 2 pointer

1. **Opposite Direction (Two Pointers):**
   One Pointer starts from the beginning while the other pointer starts from the end.
   They move towards each other until they both meet or some condition is satisfied.
   In the "Opposite Direction" scenario, you typically have two pointers starting from opposite ends of an array (or data structure) and moving towards each other until they meet or a certain condition is satisfied. This approach is commonly used in problems involving sorted arrays.

2. **Equi-Direction:**
   Both start from the beginning, One Slow-runner and the other fast-runner.
   In the "Equi-Direction" scenario, you have two pointers both starting from the same end of the array and moving at different speeds. The "fast" pointer moves faster than the "slow" pointer. This approach is often used in problems involving linked lists or arrays where you need to identify a certain condition.
