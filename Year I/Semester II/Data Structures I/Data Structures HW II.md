Dear Grader,
	We hope this submission finds you well. Contained within, you will find the secrets and untold wonders of the universe, carefully disguised as our homework assignment. We've poured countless hours, gallons of coffee, and a few tears into crafting this masterpiece, all with the hopes of impressing you, our esteemed grader. Please accept it with the same enthusiasm with which it was created, and know that we appreciate your time and effort in evaluating our work. Thank you for being the superhero of this academic adventure, and for wielding the power of the almighty red pen with great responsibility. We eagerly await your feedback, and in the meantime, we'll be practicing our interpretive dance routine to celebrate our inevitable A+.
	
Sincerely, **Benji Tusk: 650282680** and **Eyal Schachter: 209792266**

> [!todo] Answer 1
> ```python
> def bubble_sort(l: LinkedList):
> 	didSwap = True
> 	while didSwap:
> 		didSwap = False
> 		node = l.head
> 		while node.next is not None:
> 			if node.value > node.next.value:
> 				l.swapValue(node, node.next)
> 				didSwap = True
> 			node = node.next
> ```
> **Is the complexity different than bubble sort? Explain.**
> >The complexity is the same as bubble sort, as it does the exact same thing as bubble sort in the same way. The only difference is how we traverse the list, which does not have an impact on the time complexity.

> [!todo] Answer 2/A
> 
> 
> ```python
> class Stack:
>     def __init__(self):
>         self.queue1 = Queue()
>         self.queue2 = Queue()
> 
>     def isEmpty(self):    # O(1)
>         return self.queue1.isEmpty()
>     
>     def push(self, item): # O(1)
>         self.queue1.enqueue(item)
> 
>     def pop(self):        # O(n)
>         count = 0
>         while not self.queue1.isEmpty():
>             self.queue2.enqueue(self.queue1.dequeue())
>             count += 1
>         for _ in range(count - 1):
>             self.queue1.enqueue(self.queue2.dequeue())
>         return self.queue2.dequeue()
>     
>     def peek(self):     # O(n)
>         value = self.pop()
>         self.push(value)
>         return value
> ```

> [!todo] Answer 2/B
> > Yes, if you store the number of elements in the queue
> > 	Pop: \_queue.dequeue() (_O(1)_)
> > 	Push: Dequeue and immediately requeue every item in the queue except for the last one, then pop it. (*O(n)*)
> > 	Peek: Pop, then Push. (*O(n)*)
	> ```python
	> def push(S, x):
	> 	S.queue.enqueue(x)
	> 	for i from 1 to S.size:
	> 		S.queue.enqueue(S.queue.dequeue())
	> 	size++
	> ```

> [!todo] Answer 3
> ```python
> def build(l: DoubleLinkedList):
>     stack = Stack()
>     cur = l.tail
>     while cur is not None:
>         if cur.data % 2 == 0:
>             stack.push(cur.data)
>         cur = cur.prev
>     return stack
> ```
> The time complexity is _O(n)_, because we are perfoming a single loop over a list, and each iteration is constant time (assuming stack.push is _O(1)_ with a proper implementation).

> [!todo] Answer 4
> The function checks if `x` is in the List. If so, move it to the front, and `return true`, otherwise, `return false`


> [!todo] Answer 5
> ```python
>  class Manager:
> 	def __init__(self): # Part A
> 		self.critical = Stack()
> 		self.urgent = Stack()
> 		self.regular = Queue()
> 
> 	def addTask(self, task): # Part B
> 		if task.priority == 1:
> 			self.regular.push(task)
> 		elif task.priority == 2:
> 			self.urgent.push(task)
> 		else:
> 			self.critical.push(task)
> 
> 	def getNextTask(self): # Part C
> 		if not self.critical.isEmpty():
> 			return self.critical.pop()
> 		elif not self.urgent.isEmpty():
> 			return self.urgent.pop()
> 		elif not self.regular.isEmpty():
> 			return self.regular.pop()
> 		else:
> 			return None
> 		
> 	def taskExists(self, id): # Part D
> 		if not self.critical.isEmpty():
> 			if self.critical.search(id) is not None:
> 				return True
> 		if not self.urgent.isEmpty():
> 			if self.urgent.search(id) is not None:
> 				return True
> 		if not self.regular.isEmpty():
> 			if self.regular.search(id) is not None:
> 				return True
> 		return False
>  ```
>  Part E
>  > R.T.C. is *O(n)* because it's three linear functions executed sequentially, and according to Chaim Schendow, 3\cdot n = n
