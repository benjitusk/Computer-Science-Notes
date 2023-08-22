
> [!check] Attributions
>This homework was written by:
> **Eyal Schachter**: 209792266
> **Benji Tusk**: 650282680


> [!note] Question No. 1
> We suggest an AVL Tree with the additional `size` field, which can be updated in Insert and Delete in $O(\log(n))$ time.
> AVL Insert is $O(\log(n))$
> AVL Delete is $O(\log(n))$
> With the addition of such a field, we can calculate the indices of nodes on demand, and solve the problem like so:
> ```python
> def nodesBetween(T, lower, upper):
> 	return index(T.root, 0, upper+1) - index(T.root, 0, lower)
>
> def index(node, parentIndex, target):
> 	if node is None:
> 		return parentIndex + 1
> 	if node.value == target:
> 		return parentIndex + node.left.size + 1
> 	if targetValue < node.value:
> 		return index(node.left, parentIndex, target)
> 	else:
> 		newIndex = parentIndex + node.left.size + 1
> 		return index(node.right, newIndex, target)
>```

> [!note] Question No. 2
> An excellent question with an appropriately excellent answer: We proudly present:
> ```python
> class max_stack:
> 	def __init__(self):
> 		self.data = Stack()
> 		self.max = Stack()
>
> 	def top(self):
> 		return self.data.top()
> 	def pop(self):
> 		value = self.data.pop()
> 		if value == self.max.top():
> 			return self.max.pop()
> 		return value
> 	def isEmpty(self):
> 		return self.data.isEmpty()
> 	def push(self, value):
> 		if value > self.max.top():
> 			self.max.push(value)
> 		self.data.push(value)
>```

> [!note] Question No. 3
> Indulge your intellectual palate and savor the essence of elegance as we uncork the intricately layered bouquet of the finest vintage data structure, meticulously aged to perfection:
> ```python
> class absolutely_average_array:
> 	def __init__(self, values):
> 		self.sumPrevVals = Array()
> 		_sumCounter = 0
> 		for value in values:
> 			_sumCounter += value
> 			self.sumPrevVals.append(_sumCounter)
>
> 	def Avg(self, i, j):
> 		upperBoundAvg = self.sumPrevVals[j]
> 		if i == 0:
> 			lowerBoundAvg = 0
> 		else:
> 			lowerBoundAvg = self.sumPrevVals[i-1]
> 		return (upperBoundAvg - lowerBoundAvg)/(j-i-1)
>```

> [!note] Question No. 4
> Unlock the door to mathematical rhapsody as we venture into the realm of computational finesse, guided by an algorithmic opus that gracefully orchestrates the amalgamation of the k most resplendent numbers from an exquisite array, imbuing the symphony of their sum with the celestial time complexity of $O(n \log k)$:
> ```python
> def sum_largest(arr, k):
> 	heap = minHeap()
> 	for element in arr:		# O(n)
> 		heap.insert(element)	# O(lg k)
> 		if heap.size > k:		# keep max k elements
> 			heap.extractMin()	# O(lg k)
> 	sum = 0
> 	for element in heap:	# k ≤ n, O(n)
> 		sum += element.value	# O(1)
> 	return sum
>```

> [!note] Question No. 5
> Step into the realm of boundless numerical harmony as we unveil a captivating data structure, meticulously crafted to embrace the duality of positive and negative integers, while gracefully harmonizing with the constraints of time to deliver a symphony of essential functions.
> ---
> We suggest a pair of AVL trees, a data tree and a “pairs" tree. The pairs tree size is ≤ the data tree size.
>
> Insert will insert $x$ into the data tree ${(O(\log n))}$. Then, search for $-x$ in the data tree ${(O(\log n))}$. If found, insert $|x|$ into the pairs tree ${(O(\log n))}$.
> Delete is similar, deleting from the data tree ${(O(\log n))}$ and the pairs tree ${(O(\log n))}$, if |x| is a pair.
> This inserts and deletes an occurrence from the data and pair tree for every duplicate pair, so it supports multiple appearances of a number.
>
> Search searches in the data tree using normal AVL search. ${(O(\log n))}$
>
> We can determine if there is a pair of opposites by simply checking if the pairs tree is empty or not. (*O(1)*)
>

> [!note] Question No. 6
> Embark on a journey of computational curiosity as we navigate the vast terrain of run-time complexities, seeking to unveil the elusive crown jewel that epitomizes efficiency in the worst-case scenario for performing operations on a captivating array of data structures.
>
| Operation|Unsorted Array|BST|Max Heap|
| ---|---|---|---|
|Finding the minimum value|$O(n)$ - need to search through the whole thing|$O(n)$ - in the case of a degenerate tree|$O(n)$ - need to look through $n/2$ leaf nodes|
|Finding the value $x$|$O(n)$ - need to search through the whole array|$O(n)$ - degenerate tree|$O(n)$ - $x$ could be anywhere in the heap|
|Printing values in non-descending order|$O(n\log n)$ - sort the array using quicksort, then print|$O(n)$ - in order traversal|$O(n^2)$ - need to repeatedly find the minimum and print|


