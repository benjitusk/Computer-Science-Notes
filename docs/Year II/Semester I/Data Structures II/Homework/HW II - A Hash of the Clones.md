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
