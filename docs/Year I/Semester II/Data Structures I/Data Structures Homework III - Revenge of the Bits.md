> [!warning] Important Preamble
> *Oh dear graders of our homework on Data Structures,
> We come to you with some humorous adventures!*
>
> *We've spent countless hours, with recursion in mind,
> Hoping our code, is the best you'll find.*
>
> *Our linked lists are linked, and our stacks are all stacked,
> Our queues are all queued, not even one is hacked.*
>
> *But then came the trees, with their branches so wide,
> Recursing through them, was like taking a ride.*
>
> *The leaves kept falling, and the nodes kept splitting,
> But we kept on going, our code never quitting.*
>
> *Sometimes it got messy, and sometimes we'd shout,
> But we'd always find a way, to recurse it out.*
>
> *We know we made mistakes, we're not robots, you see,
> But please don't judge too harshly, be kind like a bee.*
>
> *So dear graders of our homework, we hope you will find,
> That our code is worthy, of an A in kind.*
>
> *And if there's still room, for improvement or fun,
> We'll keep on coding, until the recursion is done.*
>
> *And if you need any help, just give us a call,
> Benji and Eyal are here, to help you with it all!*
> ---
> **Benji Tusk:** *650282680*
> **Eyal Schachter:** *209792266*

> [!todo] Answer 1
> ```python
> def recDelete(l: LinkedList, x: int):
>     def recDeleteHelper(n: Node, x: int, foundFirst: bool):
>         if n.next is None: # end of list
>             return
>         if n.next.data == x: # next is the target number
>             if foundFirst: # next is the second occurrence -- delete it
>                 n.next = n.next.next
>             else: # next is first occurrence, keep searching
>                 recDeleteHelper(n.next, x, True)
>         else: # other number
>             recDeleteHelper(n.next, x, foundFirst)
>     if l.head is None:
>         return
>     recDeleteHelper(l.head, x, l.head.data == x)
>
> ```

> [!todo] Answer 2
> ```python
> def recCongruentStackDetectorInator():
>     if s1.is_empty() and s2.is_empty():
>         return True
>     x = s1.pop()  # Pop returns None if stack is empty
>     y = s2.pop()
>     if x != y:
>         s1.push(x)
>         s2.push(y)
>         return False
>     else:
>         isCongruent = recCongruentStackDetectorInator()
>         s1.push(x)
>         s2.push(y)
>         return isCongruent
> ```

> [!todo] Answer 3
> ```python
> def recursiveLogCalculator(n: int, base: int):
>     if n < base:
>         return 1
>     return 1 + recursiveLogCalculator(n // base, base) # lg_b n = lg_b( (n/b)*b ) = lg_b(n/b) + lg_b(b)
>
> def Question3(n: int):
>     return recursiveLogCalculator(n, 3) + 4 # because the powers that be said so
> ```

> [!todo] Answer 4
> ![[Pasted image 20230514135409.png]]

> [!todo] Answer 5
> **2, 3, 6, 8, 17, 4, 12, 5, 9, 13, 42, 0, 10**

> [!todo] Answer 6
> ```python
> def isBST(t: BinaryTree) -> bool:
>     def isBSTHelper(node: BinaryTreeNode, max: int, min: int) -> bool:
>         if node is None:
>             return True
>         if node.data < min or node.data > max:
>             return False
>         return isBSTHelper(node.left, max=node.data, min=min) and isBSTHelper(node.right, max=max, min=node.data)
>
>     return isBSTHelper(t.root, ∞, -∞)
> ```
> Run time complexity is _O(n)_ because it visits every node at most once.

> [!todo] Answer 7
> The function returns true if every value in tree 2 is greater than all the values in tree 1
>
> The runtime complexity is $O(m\times n)$  and can be likened to a $m\cdot n$ rectangle, where you are checking each box. For every row ($n$ rows) you must do $m$ comparisons. We are assuming there is short-circuit evaluation so it doesn't need to evaluate every single comparision, otherwise it would indeed be $\theta(m\times n)$

> [!todo] Answer 8
> ```python
> def initializeSize(t: BinaryTreeNode):
>     if t is None: # base case
>       return
>     # recursively set descendents' size POSTHASTE
>     initializeSize(t.left)
>     initializeSize(t.right)
>     t.size = 1 # the element itself
>     if t.left is not None:
>        t.size += t.left.size
>     if t.right is not None:
>        t.size += t.right.size
>
> ```