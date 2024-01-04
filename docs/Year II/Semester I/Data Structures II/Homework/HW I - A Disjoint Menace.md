### Question 1
#### Answer 1
##### Lemma
**Assertion:** For a set $A$ with $m+1$ elements, there were exactly $m$ union operations on the elements of $A$.
**Base Case:** $m=1$, there were at least 0 union operations.
**Assumption:** For $0\le m\le k$, there were exactly $m-1$ union operations on the elements of $A$.
**Claim:** For a set $A$ of size $m=k+1$, there were exactly $k$ union operations on its elements.
**Proof:** Denote the number of union operations on the elements of A as $u$.
Examine operation $u$:
We perform a union operation on sets $B, C$, so $A = B \cup C$. Since they are disjoint sets, we know $|A| = |B| + |C|$. It is given that $|A| = k + 1$, and we know $|B|,|C| \ge 1$ (we do not work with empty sets).
Therefore, $|B|, |C| \le k$ ($k$ is an upper bound).
Let $u_B$ be the number of union operations on B, and similarly $u_C$ for C. By the induction assumption, $u_B = |B| - 1, u_C = |C| - 1$. 
Clearly $u = u_B + u_C + 1$. (Unioning B and C to form A)
Therefore $u = (|B|-1) + (|C|-1) + 1 = |B| + |C| - 1 = |A| - 1 = k$

##### Now, The Real Shebang™
**Claim:** After $u$ union operations, there is no set holding more than $u+1$ elements.
**Proof:** Suppose (by means of negation) there exists a set A such that $|A|\ge u+2$. By The Lemma™, $u_A\ge u+1$, in contradiction to the assumption that only $u$ union operations occurred.

### Question 2

> [!error] No.

### Question 3
#### Answer 3
Two trees, $x_5$ with a height of 2, and $x_9$ a height of 1.

### Question 4

> [!error] Skipped, not enough info

### Question 5
#### Answer 5

```python
class Link:
  def __init__(self, x):
    self.representative = None
    self.key = x
    self.next = None

class LinkedList:
  def __init__(self, x: Link):
    x.representative = self
    self.head = x
    self.tail = x
    self.size = 1

def MakeSet(x: int):
  return LinkedList(Link(x))


def FindSet(x: Link):
  return x.representative

def Union(_x: Link, _y: Link):
  x = FindSet(_x)
  y = FindSet(_y)
  if x == y:
    raise Exception("You're not allowed to do that!")
  if x.size < y.size:
    x, y = y, x
  # X is now the larger set
  x.tail.next = y.head
  p = y.head
  while p is not None:
    p.representative = x
    p = p.next
```

