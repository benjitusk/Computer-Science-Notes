*April 23 Lecture. Links to the [board](https://drive.google.com/file/d/1MP3Y2-6eU7uNBp85LiG48GBC8RXF00LA/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1GtaH6vGsTdTt5vmUIqJOfPcf2tzEOQRV/view?usp=sharing).*
#### Examples of Vector Spaces
Vectors in $\Bbb R^n$ are objects on which we define operations of addition (to eachother) and multiplication by a [scalar](<https://en.wikipedia.org/wiki/Scalar_(mathematics)>).
Other "objects" on which we can define the same operations:
- Matrices: $\begin{bmatrix}a&b&c\\d&e&f\end{bmatrix}$
	- Denoted as $M_{m\times n}$ with an order of $m$ rows by $n$ columns
	- Addition between 2 matrices works by adding corresponding entries into the resulting matrix. You can only add matrices of the same order
		- $\begin{bmatrix}a&b&c\\d&e&f\end{bmatrix} + \begin{bmatrix}g&h&i\\ j&k&l\end{bmatrix} =  \begin{bmatrix}a+g&b+h&c+i\\d+j&e+k&f+l\end{bmatrix}$
	- Multiplication works by multiplying each term by the scalar
		- $n\cdot\begin{bmatrix}a&b&c\\d&e&f\end{bmatrix}=\begin{bmatrix}a\cdot n&b\cdot n&c\cdot n\\d\cdot n&e\cdot n&f\cdot n\end{bmatrix}$
- Polynomials: $a_{n}x^{n}+a_{n-1}x^{n-1}+a_{n-2}x^{n-2}+\dots+a_1x+a_2$ ("formal sum" of powers of variable $x$, each with a coefficient)
	- <u>Degree</u> of polynomial is the highest power of $x$
	- Addition and scalar multiplication works as expected
- Functions:
	- let $f(x)=\sin x$ and let $g(x)=4e^x$.
	- Addition $(f+g)(x)=\sin x+4e^x$
	- Multiplication $(c\cdot f)(x)=c\cdot f(x) = c\cdot \sin x$
All of these are examples of abstract vector spaces.
#### Definition of Vector Space
A set $V$ is called a <u>vector space</u> (and its elements are called vectors) if we can define on $V$ operations of addition ($\oplus$) and scalar multiplication ($\odot$) satisfying the following ten axioms:
##### Vector Space Axioms

> [!NOTE] 10 All Important Axioms of Vector Spaces
> 1) Addition $\oplus$ is commutative
> 	- i.e. for $\vec u,\vec v\in V:\vec u\oplus\vec v=\vec v\oplus\vec u$
> 2) Addition $\oplus$ is associative
> 	- i.e. for $\vec u,\vec v,\vec w\in V:(\vec u\oplus\vec v)\oplus\vec w=\vec u\oplus(\vec v\oplus\vec w)$
> 3) $V$ is closed under addition
> 	- If $\vec u,\vec v\in V\text{ then }\vec u\oplus\vec v\in V$
> 4) There exists in $V$ a <u>zero vector</u> denoted $\vec{0}$ such that $\forall\vec v\in V: \vec v + \vec0=\vec v$
> 5) $\forall\vec v\in V\;\exists\vec v^\prime\text{ such that } \vec v\oplus\vec v^\prime=\vec0$
> 	- e.g. in $\Bbb R^2$, if $\vec v=(5, -3)$ then $\vec v^\prime=(-5,3)$
> 6) V is closed under scalar mult.
> 	- i.e., if $\vec v \in V,c\in\Bbb R$ then $c\odot\vec v\in V$
> 7) For all $\vec v\in V$ and $c_1,c_2\in\Bbb R$ we have: $(c_1\cdot c_2)\odot\vec v=c_1\odot(c_2\odot\vec v)$
> 8) $\forall \vec v\in V:\;1\odot\vec v=\vec v$
> 9) Distributive Law 1:
> 	- For any $\vec v,\vec u\in V,c\in\Bbb R:\; c\odot(\vec v\oplus\vec u)=(c\odot\vec v)\oplus(c\odot\vec u)$
> 10) Distributive Law 2:
> 	- For any $\vec v\in V,c_1,c_2\in\Bbb R:\; (c_1+c_2)\odot\vec v=(c_1\odot\vec v)\oplus(c_2\odot\vec v)$

#### Common Vector Spaces:
- $\Bbb R^n$
- $M_{m\times n}(\Bbb R)$ = all matrices of order $m\times n$ $(m,n\in\Bbb N)$ with entries in $\Bbb R$
- $\Bbb R_n\left[x\right]$ = set of all polynomials in variable $x$ with real coefficients and of degree $\le n$.
	- Note: Not degree = $n$, because that wouldn't be a vector space
#### But why are we doing this?
We can prove properties and define concepts just based on the axioms, and these properties/concepts will automatically apply ot all the examples of vector spaces.
#### Properties of Vector Spaces
* $c\odot\vec0=\vec0$
* $0\odot\vec v=\vec0$
* $-1\odot\vec v=\vec v^\prime$
---
*April 27 Tirgul. Links to the [board](https://drive.google.com/file/d/1x3qbMERvwJW70NZXIYhgd2nXBD5Yuap6/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1vtVrwK_YHheSLH7nAftqKlJGZlbMN0xt/view?usp=sharing).*
#### Subspaces
**Definition:** Let V be a vector space. A subset $U\subseteq V$ is a <u>subspace</u> of $V$ (denoted $U \le V$) if $U$ is itself a vector space under same operations $\oplus,\odot$ as defined in $V$.
Examples of subspaces of $\Bbb R^2$:
	$U_1=x$-axis
	$U_2=y$-axis
	$U_3=xy$ line
"Trivial" subspaces of $\Bbb R^2$:
1) ${(0,0)}$
2) All of $\Bbb R^2$

> [!NOTE] What axioms need to be checked to determine if $U\subseteq V$ is a subspace?
> 1) $U\not=\emptyset$
> 2) $U$ is closed under $\oplus$
> 3) $U$ is closed under $\odot$

###### What are subspaces of $\Bbb R^2$?
1) $\{(0,0)\}$
2) All of $\Bbb R^2$
3) Any line through the origin ($y=kx$ or $y$-axis)
	- Closure under addition:
		- $\begin{align}(x_1,kx_1)+(x_2,kx_2)&=(x_1+x_2,kx_1+kx_2)\\&=(x_1+x_2, k(x_1+x_2))\\&\in\text{ line }y=kx\end{align}$
		- $(0,y_1)+(0,y_2)=(0,y_1+y_2) \in y$-axis
	- Closure under scalar multiplication:
		- $\begin{align}c\cdot(x, kx)&=\\(cx,ckx)&=\\(cx, k(cx))&\in\text{ line }y=xk\end{align}$
		- $c\cdot(0, y)=(0,cy)\in y$-axis
###### What are subspaces of $\Bbb R^3$?
1) $\{(0,0,0)\}$
2) Any line through origin
3) Any *plane* going through origin
4) All of $\Bbb R^3$

---
*April 30 Lecture. Links to the [board](https://drive.google.com/file/d/1V9exsi9mhkEeTPs09PAc2za_Y0Wy5eGh/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1qGvSZ5UZosOl9Z28OS2KvOOqQdGG3W-z/view?usp=share_link).*
**\[Incomplete] Coming soon to a PDF near you...**
##### Checking if a subset is a subspace ($U\subseteq V,U\stackrel{?}{\le}V$)
$U\subseteq V$ is a subspace of V ($U\le V$) **iff**
1. $U\not=\emptyset$
2. $U$ is closed under addition
3. $U$ is closed under *scalar* multiplication
*See the board for examples, I can't be bothered to type them all out.*

##### Intersection and Union of Subspaces
Suppose $U_1,U_2\le V$.
	 $U_1\cap U_2\le V$ is always true
	$U_1\cup U_2\le V$ is true **ONLY** if $U_1\subseteq U_2$ or $U_2\subseteq U_1$.

---
*May 4 Tirgul. Links to the [board](https://drive.google.com/file/d/1KmP5T95HjlRSZkbcz-TqaNAVRyVewgO-/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1RJyagAxhJDoF1xmEePC6mLX5giXoGH34/view?usp=sharing).*
##### Linear Combination
**Definition:**
	Given a finite set $S=\{\vec v_1,\dots,\vec v_k\}$ in any vector space V, a <u>linear combination</u> of $S$ is any vector of form $\vec u=c_1\vec v_1+\dots+c_k\vec v_k$.	
##### Span
**Definition:**
	The <u>span</u> of a finite set of vectors $S=\{\vec v_1,\dots,\vec v_k\}$ is the set of *all* linear combinations of $S$.
For any finite set $S\subseteq V$, $\text{Span }S\le V$.
	In fact, $\text{Span }S$ is the *smallest* subspace of V containing every vector of $S$.

---
*May 7 Lecture. Links to the [board](https://drive.google.com/file/d/1Bz48fKu7qAWIhsGLaKRUdPDkfb7Q6vJF/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1C4j6eRegdu7Fbl_z3l_oiM26PLiZPk3X/view?usp=share_link).*
#### Linear Independence
**Definition:**
	A (finite, non-empty) set $S\subseteq V$ is <u>linearly independent</u> if no vector in $S$ is a [[#Linear Combination]] of other vectors in $S$.
**Elaborated Definition:**
	A (finite, non-empty) set $S\subseteq V$ is <u>linearly independent</u> if the following is true:
		If $c_1\vec v_1+\dots +c_k\vec v_k=\vec 0$ then $c_1=\dots=c_k=0$.
	**Example:**
		$S=\{(1, 2, 3,), (0,-1,4)\}$
		Suppose: $c_1\cdot(1,2,3)+c_2\cdot(0,-1,4)=(0,0,0)$
		That means that: $$\begin{align}
		c_1\cdot1&+c_2\cdot0&=0\\
		c_1\cdot2&+c_2\cdot-1&=0\\
		c_1\cdot3&+c_2\cdot4&=0
		\end{align}$$
		Solving for $c_1, c_2, c_3$, we will see that they all equal *zero*.
		This is proof of linear independence.
	**Example:**
		$S=\{(1, 2, 3), (-4,-8,-12)\}$
		Suppose: $c_1\cdot(1,2,3)+c_2\cdot(-4,-8,-12)=(0,0,0)$
		Extracting equations for c_1, c_2, c_3 will yield the following:
		$\begin{align}&c_1-4c_2&=0\\2&c_1-8c_2&=0\\3&c_1-12c_2&=0\end{align}$
		The second and third equations are both multiples of the first equation, so we can ignore them. we are left with $c_1=4c_2$, which has an infinite number of solutions. This means that $S$ is linearly *dependent*.
	In other words, $S$ is linearly independent if the *only* linear combination of $S$ equal to $\vec 0$ is the *trivial linear combination* (i.e., all scalars are 0).
By this definition, $S=\vec 0$ is *not* independent, because if $c\cdot(0, 0, 0)=(0, 0, 0)$, then $c$ need not be $0$, can be *any* scalar.
Any other set of *one* vector is independent.

##### How to check if a set of vectors is Linearly Independent
> [!info] Method to tell if $S\subseteq\Bbb R^n$ is independent:
> 1. Write vectors of $S$ as columns in a matrix $A$
> 2. Consider $A$ as a coefficient matrix of a homogeneous system, and solve
> 3. If the solution is unique, $S$ is independent. If there are infinitely many solutions, $S$ is dependent. If there are zero solutions, you messed something up.
>    
>    
> Example with $\Bbb R^n$:
$S_1=\{(1,3,5),(2,4,6),(-1,1,3)\}$
To check if $S_1$ is independent:
Suppose $c_1\begin{pmatrix}1\\3\\5\end{pmatrix}+c_2\begin{pmatrix}2\\4\\6\end{pmatrix}+c_3\begin{pmatrix}-1\\1\\3\end{pmatrix}=\begin{pmatrix}0\\0\\0\end{pmatrix}$ (We wish to show: $c_1=c_2=c_3=0$)
Extract equations for $c_1, c_2, c_3$:
$\begin{align}&c_1+2c_2-c_3&=0\\3&c_1-4c_2+c_3&=0\\5&c_1+6c_2+3c_3&=0\end{align}$
Solve system using coefficient matrix:
$\begin{bmatrix}1&2&-1\\3&4&1\\5&6&3\end{bmatrix}$
There are two possibilities for a homogeneous system:
> - There is a unique solution $(0,0,0)$, which means $c_1=c_2=c_3=0$, which proves $S$ to be *independent*.
> - There are infinitely many solutions, which means $c_1=c_2=c_3=0$ is **not true**, which proves $S$ to be *dependent*.
> Solving the matrix as such...
> $$\begin{align}
\begin{bmatrix}
1\ &2\ & -1\\\
3\ &4\ &\ 1\\\
5\ &6\ &\ 3\
\end{bmatrix}
&\xrightarrow[R_3\rightarrow R_3-5R_1]{R_2\rightarrow R_2-3R_1}
\begin{bmatrix}
1 & 2& -1\\
0 &-2&  4\\
0 &-4&  8
\end{bmatrix}
\xrightarrow{R_2\rightarrow-\frac12R_2}\\
\begin{bmatrix}
1 & 2& -1\\
0 & 1& -2\\
0 &-4&  8
\end{bmatrix}
&\xrightarrow{R_3\rightarrow R_3+4R_2}
\begin{bmatrix}
\bf1\ &2\ & -1\\\
0\ &\bf1\ & -2\\\
0\ &0\ &\ \bf0\
\end{bmatrix}\\
\Rightarrow&\text {Infinite number of solutions}\\
\Rightarrow&S\text { is linearly dependent}
\end{align}$$




#### Basis and Dimension
**Definition:**
	A <u>basis</u> of a vector space $V$ is a linearly independent set $S$ which *spans* $V$. (i.e. Span($S$) $=V$)
	**Examples:**
		In $\Bbb R^2$, $S_1=\{(1,0),(0,1)\}$
			This set is independent (easy to check)
			This set spans $\Bbb R^2$: $\forall (a,b)\in\Bbb R^2:(a,b)=a(1,0)+b(0,1)$ 
			Therefore, $S_1$ is a basis of $\Bbb R^2$
		In $\Bbb R^2$, $S_1=\{(1,1),(-3,5)\}$
			Independent? Neither is a multiple of the other, so yes.
			Spanning? $\forall (a,b)\in\Bbb R^2\stackrel?\exists c_1,c_2\in\Bbb R\mid(a,b)=c_1(1,1)+c_2(-3,5))$ 
				Yes (We'll come back to this later.)
			Therefore, $S_2$ is a basis of $\Bbb R^2$
		In $\Bbb R^2$, $S_3=\{(1,0),(0,1), (2,3)\}\rightarrow$ spans, but isn't independent
		In $\Bbb R^2$, $S_4=\{(1,3)\}\rightarrow$ independent, but doesn't span
		In $\Bbb R^2$, $S_5=\{(1,-1),(-3,3)\}\rightarrow$ doesn't span *and* isn't independent
**Claims:**
*Proofs omitted. [See pp. 12, 13](https://drive.google.com/file/d/1Bz48fKu7qAWIhsGLaKRUdPDkfb7Q6vJF/view?usp=sharing)*
1. If $B=\{\vec v_1,\dots\vec v_n\}$ is a basis of $V$, then any $\vec v\in V$ has a *unique* representation as a linear combination of $B$
2. If $S\subseteq\Bbb R^n, S=\{\vec v_1,\dots\vec v_n\}$ (i.e., $S$ is a set of $n$ vectors in $\Bbb R^n$) then $S$ spans $\Bbb R^n$ iff $S$ is independent.
	- Hence: **it is enough to check *one* condition** (independent or spanning) to determine if $S$ is a basis
---
*May 11 Tirgul. Links to the [board](https://drive.google.com/file/d/1MW0fTj6_mZwE8yRTR9vGKjtByk1Oop9u/view?usp=share_link) and the [recording](https://drive.google.com/file/d/1jS7wu0YYq-5uyx41i-sNfVwgvtCdKSyc/view?usp=share_link).*
> [!note] Question 3/b
> Prove or disprove 1. The set $\{(−1,2,1,1), (0, −1,1,1), (0,2,1,1), (1,2, −1,1)\}$ is linearly independent in $\Bbb R^4$
> 
> **Method:**
> 1. Write vectors as columns in coefficient matrix
> 2. Solve the matrix (Row Echelon Form)
> 3. If Row Echelon Form is achieved, that is proof of a unique solution, and therefore Set Independence
> 4. Otherwise, there are infinite solutions because the set is not independent.

> [!note] Question 4/c
> Find $k$ such that the set ${\vec v_1 = (−1,2,3,2), \vec v_2 = (2,2,2,2), \vec v_3 = (−2, −5, −6, −4), \vec v_4 = (2,6,𝑘, 5)}$ is linearly dependent, or prove that there is no such $k$.
> 
> **Method:**
> 1. Steps 1 and 2 as above
> 2. Find the values for $k$ that will achieve Row Echelon Form.
> 3. If no such value exists, this is proof that there is no $k$
> 4. If such value exists, this is your answer.

> [!note] Question 2/a
> Express the polynomial $-x^2 + 3x +11$ as a linear combination of the polynomials $x^2-x+6$, $2x^2-3x$, and $x-3$.
>
> **Method:**
> 1. Assign vectors. In this case,
>    $\begin{align}\vec u&=-x^2 + 3x +11\\\vec v_1&=x^2-x+6\\\vec v_2&=2x^2-3x\\\vec v_3&=x-3\end{align}$
> 2. We seek $c_1, c_2, c_3$ such that:
>    $c_1(x^2-x+6)+c_2(2x^2-3x)+c_3(x-3)=\vec u$
> 3. Rewrite the equation like so: $\begin{align}(c_1+2c_2)x^2&+&(-c_1-3c_2+c_3)x&+&(6c_1-3c_3)&=\\-x^2&+&3x&+&11&\end{align}$
> 4. Solve for $c_1, c_2, c_3$
> 5. Write answer as $c_1(x^2-x+6)+c_2(2x^2-3x)+c_3(x-3)$
> 	   Of course, substituting $c_1, c_2, c_3$ with the values from step 4.

