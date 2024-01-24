### Question 1

#### Part A
The table looks like the following after the insertions:
![[HW II - A Hash of the Clones 2024-01-17 21.50.58.excalidraw|200]]

#### Part B
The load factor is $\alpha=\frac{12}{11}$

#### Part C
Let $p(k)$ be the number of probes required to search for $k$ in the table.
$p(617)=1$
$p(78)=2$
$p(47)=1$
$p(90)=1$
$p(115)=1$
$p(18)=1$
$p(8)=1$
$p(41)=2$
$p(64)=1$
$p(76)=1$
$p(65)=2$
$p(54)=3$

$$\sum_{k}^{\text{keys in table}}p(k)=17$$
The average number of probes required is $\frac{17}{12} = 1.42$

#### Part D
The expected runtime = $\Theta(1+\frac\alpha 2)$
In our case, this is $1+\frac{12}{11\cdot2}=\frac{17}{11}=1.\overline{54}$
The ratio is $\frac{17}{12}\div\frac{17}{11}=\frac{12}{11}=1.\overline{09}$




### Question 2
Disproof by Pigeonhole Principle:
Since the domain of $h$ is larger than its range, a one to one function cannot exist.

### Question 3

| Function | Best | Average | Worst |
| ---- | ---- | ---- | ---- |
| Insertion | $O(1)$ | $O(1+\log\alpha)$ | $O(\log n)$ |
| Successful Search | $O(1)$ | $O(1+\log\alpha)$ | $O(\log n)$ |
| Failed Search | $O(1)$ | $O(1+\log\alpha)$ | $O(\log n)$ |
| Deletion | $O(1)$ | $O(1+\log\alpha)$ | $O(\log n)$ |
#### Insertion Average Case
We will calculate the average runtime for inserting into a hash table with n elements.
$E\left[\text{insert(x)}\right]=O(1+\log |\text{tree}_{h(k_n)}|)$
We include $O(1)$ for applying the hash function.
Based on SUHA, $|\text{tree}_{h(k_n)}|=\frac nm = \alpha$
Therefore, $E\left[\text{insert(x)}\right]=O(1+\log |\text{tree}_{h(k_n)}|)=O(1+ \log \alpha)$


#### Failed Search Average Case
A failed search has the same runtime complexity as insert.
This is because in order to fail a search, we must completely follow the ‘insertion path’ that the given key may have taken. Thus, Failed Search = $O(\text{insert})=O(1+\log(\alpha))$


#### Successful Search Average Case
By definition of average case:
$E\left[\text{search(x)}\right]=\frac1n\cdot\sum_{i=1}^n\text{search}(x_i)$
Now we calculate the time to search for element $x_i$:
The process is to find the tree in the hash table at key $h(k_i)$, then perform AVL-Search().
$\text{AVL-Search} = O(\log (|\text{tree}_{h(k_i)}|))$
Based on SUHA, $|\text{tree}_{h(k_i)}|=\frac nm = \alpha$
So, $\text{AVL-Search} = O(\log(\alpha))$

\[For simplicity’s sake, we will ignore Big O™ and treat $\text{search}(x_i)$ as $\log(\alpha)$]

$$\begin{align}E\left[\text{search(x)}\right]&=\frac1n\cdot\sum_{i=1}^n\log\left(\alpha\right)\\
&=\frac nn\cdot\log(\alpha)\\
&=\log(\alpha)\\
\end{align}$$

We add +1 to the final runtime for accessing the hash table, giving us a runtime of $O(1+\log(\alpha))$. Kew Ee Dee.

#### Deletion Average Case
A Deletion has the same runtime complexity as a successful search.
This is because in order to delete, we must find the element that the given key points to.
Internally, the algorithm is parallel to AVL-Search.
Thus, Deletion = $O(\text{SuccessfulSearch})=O(1+\log(\alpha))$


#### Insertion Best Case
The best case is where $|\text{tree}_{h(k_n)}|=0$,
The Runtime Complexity is $O(1+\text{Create-Tree})=O(1)$.

#### Failed Search Best Case
The best case is where $|\text{tree}_{h(k_n)}|=0$.
The Runtime Complexity is $O(1+\text{Create-Tree})=O(1)$.

#### Successful Search Best Case
The best case is where $|\text{tree}_{h(k_n)}|=1$.
The Runtime Complexity is $O(1)$ because we only need to access the hash table and perform one comparison, which is $O(1)$.

#### Deletion Best Case
The best case is where $|\text{tree}_{h(k)}|=1$.
The Runtime Complexity is $O(1)$ because we only need to access the hash table and perform one comparison, which is $O(1)$.

#### Insertion Worst Case
The worst case is where $|\text{tree}_{h(k)}|=n$.
We need to insert into the AVL tree of size $n$ (height $\Theta(\log n)$).
Since AVL-Insert is $O(\log n)$, the worst case is $O(\log n)$.

#### Failed Search Worst Case
The worst case is where $|\text{tree}_{h(k)}|=n$.
We need to search the AVL tree of size $n$ (height $\Theta(\log n)$).
Since AVL-Search is $O(\log n)$, the worst case is $O(\log n)$.

#### Successful Search Worst Case
The worst case is where $|\text{tree}_{h(k)}|=n$.
We need to search the AVL tree of size $n$ (height $\Theta(\log n)$).
Since AVL-Search is $O(\log n)$, the worst case is $O(\log n)$.

#### Deletion Worst Case
The worst case is where $|\text{tree}_{h(k)}|=n$.
We need to delete from the AVL tree of size $n$ (height $\Theta(\log n)$).
Since AVL-Delete is $O(\log n)$, the worst case is $O(\log n)$.


### Question 4
#### Part A
```python
def search(HT,k):
	index=hash(k)
	curr=HT[i]
	while(concat(curr.l.bits, i.bits, curr.r.bits) != k*k):
		curr = cur.next
	return curr.val
```

The solution is to calculate the square of the key, instead of taking the square root of the concatenated bits. While the concatenated bits do not equal the square of the key, we have not yet found the value.

#### Part B
The size of the index is $p$ bits, because the hash table has $2^p$ entries.
$b$ is the size of the key, therefore, $k^2$is $2b$ bits long.
The following calculations are referring to the size (in bits), not the literal value.
$2b=l+p+r$
$l+r=2b-p$
$2r=2b-p$ (because $l=r$)
We save space when $2r<b$
$2b-p<b$
${b<p}$
$\therefore$ We save memory space when $b<p$.

### Question 5

#### Linear Probing
| Index | Content | Probes |
| ---- | ---- | ---- |
| 0 | 15 | 2 |
| 1 | 1 | 1 |
| 2 | 18 | 1 |
| 3 | 34 | 2 |
| 4 | 68 | 1 |
| 5 | 51 | 3 |
| 6 |  |  |
| 7 | 39 | 1 |
| 8 | 72 | 1 |
| 9 |  |  |
| 10 | 122 | 1 |
| 11 | 43 | 1 |
| 12 | 26 | 3 |
| 13 | 13 | 1 |
| 14 | 14 | 1 |
| 15 | 31 | 1 |

Average number of probes is $\frac{20}{14}=1.428$

The expected runtime = $\Theta(1+\frac\alpha 2)$
In our case, this is $1+\frac{14}{16\cdot2}=\frac{23}{16}=1.4375$
The ratio is $\frac{20}{14}\div\frac{23}{16}=\frac{160}{161}=0.994$

#### Quadratic Probing
| Index | Content | Probes |
| ---- | ---- | ---- |
| 0 | 15 | 2 |
| 1 | 1 | 1 |
| 2 | 18 | 1 |
| 3 | 34 | 2 |
| 4 | 68 | 1 |
| 5 |  |  |
| 6 | 51 | 3 |
| 7 | 39 | 1 |
| 8 | 72 | 1 |
| 9 | 26 | 6 |
| 10 | 122 | 1 |
| 11 | 43 | 1 |
| 12 |  |  |
| 13 | 13 | 1 |
| 14 | 14 | 1 |
| 15 | 31 | 1 |

Average number of probes is $\frac{23}{14}=1.643$

The expected runtime = $\Theta(1+\frac\alpha 2)$
In our case, this is $1+\frac{14}{16\cdot2}=\frac{23}{16}=1.4375$
The ratio is $\frac{23}{14}\div\frac{23}{16}=\frac{16}{14}=1.143$

#### Double Hashing
| Index | Content | Probes |
| ---- | ---- | ---- |
| 0 | 15 | 2 |
| 1 | 1 | 1 |
| 2 | 18 | 1 |
| 3 | 51 | 1 |
| 4 | 68 | 1 |
| 5 |  |  |
| 6 | 26 | 1 |
| 7 | 34 | 2 |
| 8 | 72 | 1 |
| 9 | 43 | 2 |
| 10 | 122 | 1 |
| 11 | 39 | 3 |
| 12 |  |  |
| 13 | 13 | 1 |
| 14 | 14 | 1 |
| 15 | 31 | 1 |

Average number of probes is $\frac{19}{14}=1.357$

The expected runtime = $\Theta(1+\frac\alpha 2)$
In our case, this is $1+\frac{14}{16\cdot2}=\frac{23}{16}=1.4375$
The ratio is $\frac{19}{14}\div\frac{23}{16}=\frac{152}{161}=0.944$


