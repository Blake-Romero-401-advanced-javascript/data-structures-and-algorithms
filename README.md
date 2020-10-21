# data-structures-and-algorithms

## Reverse an Array
<!-- Short summary or background information -->
[challenge01](code-challenges/array-reverse/array-reverse.js)
Reverse the output of an array.

### Challenge
<!-- Description of the challenge -->
Create a function that takes in an array and outputs the array in reverse. Complete withoout the use of any built in methods.

### Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach I took to this challenge is looking at the last number of the array and iterating through the array while counting down. Big O time is O(n)

### Solution
<!-- Embedded whiteboard image -->
![](code-challenges/array-reverse/whiteboard_class_01.PNG)


## Shift Array
<!-- Short summary or background information -->
[challenge02](code-challenges/arrayShift/array-shift.js)
Shift an array and insert a number.

### Challenge
<!-- Description of the challenge -->
Create a function that takes in an array and a value and inserts it into the middle of the array.

### Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach I took to this challenge is looking at the middle of an array, and assesing hwo to get to the middle. Using the length of an array and dividing it in half and comparing the answer to the position in the array. Then assign the new arrangement to a new array. Big O time is O(n)

### Solution
<!-- Embedded whiteboard image -->
![](assets/whiteboard_class_02.PNG)

### Solution
<!-- Embedded whiteboard image -->
![](code-challenges/array-reverse/whiteboard_class_01.PNG)


## Shift Array
<!-- Short summary or background information -->
[challenge03](code-challenges/arrayBinarySearch/array-binary-search.js)
Shift an array and insert a number.

### Challenge
<!-- Description of the challenge -->
Create a function that takes in an array and a key value and checks the position in the array.

### Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach I took to this challenge was a recursive approach at first, then I dropped in a while loop to iterate, setting the mid start and end to the array and recursively iterating the array. The time complexity is log(n)

### Solution
<!-- Embedded whiteboard image -->
![](assets/whiteboard_class_03.PNG)


# Hashtables
<!-- Short summary or background information -->
[challenge30](code-challenges/hashTable/hashTable.js)
Implemented in two stages, first an element is converted into an integer by use of a hash function, then it is stored in the hashTable using that number as a key to recall the information whenever it is needed.

## Challenge
<!-- Description of the challenge -->
Create a hashTbale that takes in values and stores them, being able to later retrieve them using built in funcitons.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach that I took for this challenge was to create a class that can be called upon using methods that support each other.

## API
<!-- Description of each method publicly available in each of your hashtable -->
add(key, value) - adds an element to the hashTbale
get(key) - returns the element given at a certain position
contains(key) - checks the hashTable for a key if exists
hash(key) - hashes the value turning it into a usable key


# DepthFirst Traversal
<!-- Short summary or background information -->
[challenge38](code-challenges/depthFirst/depthFirst.js)
Depth First Traversal traverses the adjacency list of edges given by a graph. In this instance it will return a collection in order in which it was traversed.

## Challenge
<!-- Description of the challenge -->
Create a depthFirst traversal function that traverses a graphs adjacency list and returns a collection of values in order it was traversed.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach that I took for this challenge was to recursively call the method to traverse the edges and check the values. The space time for this in linear and O(n) because it relies ont he length of list provided.

## API
<!-- Description of each method publicly available in each of your depthFirst -->
depthFirstTraversal(node, visited = new Set()) - takes in a node from a graph and will recursively check its edges.



# Left Join
<!-- Short summary or background information -->
[challenge33](code-challenges/leftJoin/leftJoin.js)
Left Join attempts to join and merge two hash tables into the left most hash table. Comparing tables with similar values and setting null if no comparison to left table.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach that I took for this challenge was to call each bucket looping through and checking each array int he tables value adding it to an internal array, then comparing the right side hashtable to array and placing in new matching key value pairs.

## API
<!-- Description of each method publicly available in each of your depthFirst -->
leftJoin(hashOne, hashTwo) - Takes in two hash tables. The left, or the first, hash table being the comparative hash table to compare against.
