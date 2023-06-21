> [!note] Question $\textnumero$ 1
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

> [!note] Question $\textnumero$ 2
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

> [!note] Question $\textnumero$ 3
> Indulge your intellectual palate and savor the essence of elegance as we uncork the intricately layered bouquet of the finest vintage data structure, meticulously aged to perfection:
> ```python
> class absolutely_average_array:
> 	def __init__(self, values):
> 		self.sumPrevVals = Array()
> 		_sumCounter = 0
> 		for (value in values):
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
