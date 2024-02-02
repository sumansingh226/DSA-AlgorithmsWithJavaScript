# Sliding Window Pattern

## Overview

The Sliding Window pattern is a technique used in solving problems involving arrays and strings. It efficiently finds subarrays or substrings that fulfill certain conditions by maintaining a window of elements and moving it across the array or string.

# types

# 1 fixed size

# 2 variable size

## Basic Steps

1. **Initialize**: Set up variables to define the starting point of the window and initialize any necessary data structures.
2. **Expand and Contract the Window**: Grow the window by expanding it to the right or shrink it by contracting it from the left based on problem constraints.
3. **Update the Result**: Update the result or track the current state based on the problem's requirements while expanding or contracting the window.
4. **Move the Window**: Repeat steps 2 and 3 until the window's end reaches the end of the array or string.
5. **Return the Result**: Return the final result.

## Examples of Problems

- Finding the maximum sum of a subarray of a fixed size.
- Finding the smallest subarray with a sum greater than or equal to a given value.
- Finding the longest substring with at most K distinct characters.
- Finding the longest subarray with contiguous elements.
- Finding the longest substring without repeating characters.
