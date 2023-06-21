*May 21 Lecture. Links to the [board](https://drive.google.com/file/d/1JwyIGB5w1rQLwx8FWlZQuaTDbF4Up73R/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1K2gwAllw17zKIm0WxmK-MKqts6XyIMVw/view?usp=sharing).*

---
#### Notation:
A single capital letter denotes a matrix. ($A, B, C, S, T\dots$)
$$A_{m\times n}=\begin{bmatrix}
a_{11}&a_{12}&a_{13}&\dots&a_{1n}\\
a_{21}&\dots\\
\vdots&\ddots\\
a_{m1}
\end{bmatrix}$$
$m$ rows by $n$ columns
$a_{ij}=$ entry in i<sup>th</sup> row and j<sup>th</sup> column ($1≤i≤m, 1≤j≤n$)

#### Transpose operation
if $A$ is an $m \times n$ matrix, then $A^T$ is the $n\times m$ matrix defined by $A^T=[b_{ij}]$ with $b_{ij}=a_{ji}$ for $1≤ i ≤ m, 1≤ j≤n$ 
Example: $$A=\begin{bmatrix}1&3&-2\\0&-1&4\end{bmatrix}\quad A^T=\begin{bmatrix}1&0\\3&-1\\-2&4\end{bmatrix}$$
A symmetric matrix $A$ is one with the property $A=A^T$.
> [!info] Symmetric Matrices - In English
> This means that the matrix is perfectly reflected across the main diagonal.
> This can only ever happen with a square matrix

#### Matrix multiplication
> [!info] General Notation in this section
> Matrix $A$ refers to the *left* operand in multiplication.
> Matrix $B$ refers to the *right* operand in multiplication.
> Matrix $C$ refers to the product of $A\times B$

The matrices A and B can be multiplied whenever the number of columns in A is the same number of row in B
Example: $$A=\begin{bmatrix}1&3&-2\\0&-1&4\end{bmatrix}\qquad B=\begin{bmatrix}2&-1&0&3\\0&1&2&1\\-3&1&0&-2\end{bmatrix}$$The $C_{ij}$ is dot product of row $i$ of $A$ with col $j$ of $B$
$$C=\begin{bmatrix}8&2&4&10\\-12&-1&2&-9\end{bmatrix}$$
General definition: If A is a $m\times n$ matrix and B is a $n\times p$ matrix, then $C=A\cdot B$ is a $m\times p$ matrix defined by $C_{ij}=(i^{th}\text{ row of }A)\cdot (j^{th}\text{ row of }B)$![[Pasted image 20230521151732.png]]
> [!Info] Matrix Multiplication - In English (and TypeScript)
> To multiply a matrix, you must ensure that the dimensions work out. The *columns* of $A$ must equal the *rows* of $B$. This is required so we can take the dot product, as the operands of a dot product operation must be of equal dimension.
> The dimension of the product will inversely be the *rows* of $A$ by the *columns* of $B$.
> For the resulting matrix $C$, the value in $C_{ij}$ is the dot product of $A_{\text{row }i}$ and  $B_{\text{col }j}$
> 
> The code for matrix multiplication in TypeScript is as follows:
> ```typescript
> function matrixMultiplication(A: Matrix, B: Matrix){
> 	let result = new Matrix({
> 		rowCount: A.columns.length,
> 		columnCount: B.rows.length
> 	})
> 	for (let i = 0; i < A.rows.length; i++) {
> 		for (let j = 0; j < B.columns.length; j++) {
> 			result[i][i] = dotProduct(A.rows[i], B.columns[j]);
> 		}
> 	}
> 	return result;
> }
>```


##### Properties of Multiplication:
Not commutative ($A\cdot B\not=B\cdot A$)
Is Associative ($(A\cdot B)\cdot C=A\cdot (B\cdot C)$)
For any matrix $A,B$ and any scalar $c\in\Bbb R$:
	$(c\cdot A)\cdot B=A\cdot (c\cdot B)=c\cdot (A\cdot B)$
If row $i$ is all 0 in A, then the $i^{th}$ row of ($A\cdot B$) is all zeros
If col $j$ is all 0 in $B$, then the $j^{th}$ col of ($A\cdot B$) is all zeros
${(A\cdot B)}^T=B^T\cdot A^T$
For any matrix $A$, $A\cdot A^T$ is a symmetric matrix
${(A\cdot A^T)}^T={(A^T)}^T\cdot A^T=(A\cdot A^T)$

##### Tips and Tricks
If row $i$ of $A$ is all zeros, the corresponding row in $C$ will be zeros too.
If column $j$ of $B$ is all zeros, the corresponding column in $C$ will be zeros too.
*Note, col's of 0s in $A$ or rows of 0s in $B$ does not tell us anything.*

#### Systems of Equations
A system of equations $$\begin{align}3x+4x-2z&=1\\-1x+1y+1z&=3\\2x-1y+3z&=-5\end{align}$$can be written as follows: $$\begin{bmatrix}3&4&2\\-1&1&1\\2&-1&3\end{bmatrix}\begin{bmatrix}x\\y\\z\end{bmatrix}=\begin{bmatrix}1\\3\\-5\end{bmatrix}$$
General notation for system: $A\cdot\vec x=\vec b$
	where $A$ is the restricted coefficient matrix,
	$\vec x$ is the *vector of unknowns* (so spooky 👻),
	and $\vec b$ is the vector of free coefficients.
---
*May 28 Lecture. Links to the [board](https://drive.google.com/file/d/1td0KrVDYjSOmyW0ZemqU5o4OORA8lHHB/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1Lso77pVw194-6B9o2TC-tJ3-rMY4PHEB/view?usp=sharing).*
#### Square Matrices ($n\times n$)
A square matrix is the only type which can be multiplied by itself ($A\cdot A=A^2$)
$$A=\begin{bmatrix}
	1&-1\\
	3&2
\end{bmatrix}
\qquad
A^2=
\begin{bmatrix}
	1&-1\\
	3&2
\end{bmatrix}
\times
\begin{bmatrix}
	1&-1\\
	3&2
\end{bmatrix}
=
\begin{bmatrix}
	-2&-3\\
	9&1
\end{bmatrix}
$$
##### Some Important Square Matrices:
###### Upper Triangular
All nonzero entries are *on or above* the main diagonal.
**Formal Definition:**
> If $i>j$ then $A_{ij}=0$
###### Lower Triangular
All nonzero entries are *on or below* the main diagonal.
**Formal Definition:**
> If $i<j$ then $A_{ij}=0$
###### Diagonal Matrix
All nonzero entries are *on* the main diagonal.
**Formal Definition:**
> If $i\not=j$ then $A_{ij}=0$

> [!info] Neat facts $\textnumero 1$
> The product of Upper Triangles is an Upper Triangle.
> The product of Lower Triangles is a Lower Triangle.
> The product of Diagonal Matrices is a Diagonal Matrix

#### Identity Matrix
**Definition:**
	$I_n$ is the $n\times n$ diagonal matrix in which every entry on the main diagonal is $1$.
	$I_3$=$\begin{bmatrix}1&0&0\\0&1&1\\0&0&1\end{bmatrix}$
	If $A$ is any $m\times n$ matrix, then $I_m\cdot A=A\cdot I_n=A$
	Specifically for square matrix $A$, where $I$ is the same order as $A$:
	$I\cdot A=A\cdot I=A$
##### Scalar matrix:
**Definition:**
	A <u>scalar matrix</u> is the $n\times n$ diagonal matrix in which every entry on the main diagonal is $c\mid\forall c\in \Bbb R$
**Example:**
	$c\cdot I_3=\begin{bmatrix}c&0&0\\0&c&0\\0&0&c\end{bmatrix}$
**Claim:**
	If $A$ is any $m\times n$ matrix, then: 
	$cI_m\cdot A=cA$ 
	$A\cdot cI_n=cA$ 
> [!example]
> $$\begin{bmatrix}
>		2&0&0\\
>		0&2&0\\
>		0&0&2\\
>	\end{bmatrix}
>	\begin{bmatrix}
>		-1&3&0\\
>		1&-1&2\\
>		3&1&4\\
>	\end{bmatrix}=
>	\begin{bmatrix}
>		-2&6&0\\
>		2&-2&4\\
>		6&2&8\\
>	\end{bmatrix}$$

#### Inverse Matrices
**Definition:**
	If $A$ is an $n\times n$ matrix, and $AB=I$, then $A$ is called <u>invertable</u>, and $B$ is the <u>inverse matrix</u> of $A$, denoted $B=A^{-1}$.
	
> [!info] Inverse Matrices - In English
> Every scalar number has its inverse. The inverse of $2$ is $1\over2$. The inverse of $\frac14$ is $4$. The inverse of $\frac85$ is $\frac58$.
> The common ground is that multiplying a scalar by its inverse gives you the "Identity Scalar" - that is, $1$.
> 
> With matrices, the same concept applies. The inverse of a matrix $A$ is the matrix you multiply $A$ with to get the Identity Matrix - that is, $I$.

> [!example]
> $\begin{bmatrix}2&1\\5&3\\\end{bmatrix}\begin{bmatrix}3&-1\\-5&2\\\end{bmatrix}=\begin{bmatrix}1&0\\0&1\\\end{bmatrix}=I$
> 
> If $A=\begin{bmatrix}2&1\\5&3\\\end{bmatrix}$, then $A^{-1}=\begin{bmatrix}3&-1\\-5&2\\\end{bmatrix}$.

> [!warning] Not every matrix is invertible.
> Any matrix $A$ with a row *or* column of zeros is not invertible, because $AB$ will always have a row of zeros, hence $AB\not=I$.
> This is *not* the only thing that will cause $A$ to be non-invertible.
##### Properties
Let $A$ be an invertible matrix.
1. $A^{-1}$ is also invertible, and ${(A^{-1})}^{-1}=A$.
2. $A\cdot A^{-1}=A^{-1}\cdot A=I$ (They commute).
3. $A^{-1}$ is *unique*. There are no two different matrices that can invert $A$.
4. If $A,B$ are invertible, then $AB$ is invertible, and ${(AB)}^{-1}=B^{-1}\cdot A^{-1}$.
	- This applies to $n$ invertible matrices:
	  ${(A_1\cdot A_2\cdot \dots\cdot A_n)}^{-1}=A_n^{-1}\cdot\dots\cdot A_2^{-1}\cdot A_1^{-1}$
	- The inverse of products is the product of the inverses, *in reverse order.*

##### Using Inverse Matrices to Solve Systems of Equations
**Example:**
	$\begin{cases}2x+y&=1\\5x+3y&=-1\end{cases}\implies\begin{bmatrix}2&1\\5&3\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}1\\-1\end{bmatrix}\qquad(A\cdot\vec x=\vec b)$
	Note that $A$ is invertible, see above example, $A^{-1}=\begin{bmatrix}3&-1\\-5&2\\\end{bmatrix}$
	Since we want to isolate $\vec x$, let's cancel out $A$. We do this by multiplying both sides by $A^{-1}$ on the left like so:
	$\textcolor{Emerald}{A^{-1}}(A\vec x)=\textcolor{Emerald}{A^{-1}}\vec b\implies\textcolor{Emerald}{\begin{bmatrix}3&-1\\-5&2\\\end{bmatrix}}\begin{bmatrix}2&1\\5&3\end{bmatrix}\begin{bmatrix}x\\y\end{bmatrix}=\textcolor{Emerald}{\begin{bmatrix}3&-1\\-5&2\\\end{bmatrix}}\cdot\begin{bmatrix}1\\-1\end{bmatrix}$
	$(A^{-1}A)\vec x=A^{-1}\vec b\implies I\cdot\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}3&-1\\-5&2\\\end{bmatrix}\cdot\begin{bmatrix}1\\-1\end{bmatrix}$
	$\vec x=A^{-1}\vec b\implies\begin{bmatrix}x\\y\end{bmatrix}=\begin{bmatrix}4\\-7\end{bmatrix}\implies\begin{cases}x&=4\\y&=-7\end{cases}$
##### Big Questions:
1. How can we tell if $A$ is invertible?
2. If it is, how do we find $A^{-1}$?
Stay tuned for the answers...

#### Elementary Matrices
**Definition:**
	An <u>elementary matrix</u> is a matrix obtained from $I$ by a *single* elementary row operation.
**Notation:**
	$E_{ij}$ - The matrix obtained from $I$ by $R_i\leftrightarrow R_j$
	$E_i(c)$ - The matrix obtained from $I$ by $R_i\to cR_i$
	$E_{ij}(c)$ - The matrix obtained from $I$ by $R_i\to R_i+cR_j$
**Examples:**
	$E_{12}=\begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix}$ (The matrix obtained from $I$ by $R_1\leftrightarrow R_2$)
	$E_2(3)=\begin{bmatrix}1&0&0\\0&3&0\\0&0&1\end{bmatrix}$ (The matrix obtained from $I$ by $R_2\to 3R_2$)
	$E_{21}(1)=\begin{bmatrix}1&0&0\\1&1&0\\0&0&1\end{bmatrix}$ (The matrix obtained from $I$ by $R_2\to R_2+1R_1$)
---
*June 4 Lecture. Links to the [board](https://drive.google.com/file/d/1F7jcb8fr88jbMU5JVsS5fHSJ5MvaYtMk/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1vA28zmMLZG6GnBbLT_lCBrv7Hyq9Z6ID/view?usp=sharing).*
##### The Big Claims™:
1. Let $A$ be any $n\times n$ matrix, and let $E$ be any $n\times n$ elementary matrix. The matrix $EA$ is exactly the matrix obtained from $A$ by performing the single row operation through which $I$ becomes $E$.
2. Every elementary matrix is invertible.
	- ${E_{ij}}^{-1}=E_{ij}$ (self-inverse)
	- ${E_i(c)}^{-1}=E_i(\frac1c)$
	- ${E_{ij}(c)}^{-1}=E_{ij}(-c)$
#### Determining if $A$ is invertible
1. Use the standard row operations to reduce $A$ as much as possible, keeping note of the operations and the order.
	1. If you are able to reach the Identity Matrix, it's invertible, congrats!
	   Read on to find the inverse. Otherwise, you're SOL.
2. Rewrite this reduction as a sequence of multiplications on the left by elementary matrices.
	- Since you have $[\text{series of elementary matrices}]\cdot A=I$, $A$ *is* invertible.
	- $A^{-1}=[\text{series of elementary matrices}]$
Example:
	$$\begin{align}
	A=
	&\begin{bmatrix}
		0 & 1 & 1 \\
		1 & 0 & 2 \\
		1 & 1 &\ 0 \ \ \\
	\end{bmatrix}
	\xrightarrow[E_{21}]{R_2\leftrightarrow R_1}
	\begin{bmatrix}
		1 & 0 & 2 \\
		0 & 1 & 1 \\
		1 & 1 & 0 \\
	\end{bmatrix}
	\xrightarrow[E_{31}(-1)]{R_3\rightarrow R_3-R_1}
	\begin{bmatrix}
		1 & 0 & 2 \\
		0 & 1 & 1 \\
		0 & 1 &-2 \\
	\end{bmatrix}
	\xrightarrow[E_{32}(-1)]{R_3\rightarrow R_3-R_2}\\
	
	&\begin{bmatrix}
		1 & 0 & 2 \\
		0 & 1 & 1 \\
		0 & 0 &-3 \\
	\end{bmatrix}
	\xrightarrow[E_{3}(-\frac13)]{R_2\leftrightarrow R_1}
	\begin{bmatrix}
		1 & 0 & 2 \\
		0 & 1 & 1 \\
		0 & 0 & 1 \\
	\end{bmatrix}
	\xrightarrow[E_{23}(-1)]{R_2\rightarrow R_2-R_3}
	\begin{bmatrix}
		1 & 0 & 2 \\
		0 & 1 & 0 \\
		0 & 0 & 1 \\
	\end{bmatrix}
	\xrightarrow[E_{13}(-2)]{R_1\rightarrow R_1-2R_3}\\
	&\begin{bmatrix}
		1 & 0 & 0 \\
		0 & 1 & 0 \\
		0 & 0 &\ \ 1 \ \\
	\end{bmatrix}
\end{align}$$
	$$\underset{E_{13}(-2)}
	{\begin{bmatrix}
		1 & 0 & -2 \\
		0 & 1 & 0 \\
		0 & 0 & 1 \\
	\end{bmatrix}}
	\cdot\left(
	\underset{E_{23}(-1)}
	{\begin{bmatrix}
		1 & 0 & 0 \\
		0 & 1 & -1 \\
		0 & 0 & 1 \\
	\end{bmatrix}}
	\cdot\left(
	\underset{E_{3}(-\frac13)}
	{\begin{bmatrix}
		1 & 0 & 0 \\
		0 & 1 & 0 \\
		0 & 0 & -\frac13 \\
	\end{bmatrix}}
	\cdot\left(
	\underset{E_{32}(-1)}
	{\begin{bmatrix}
		1 & 0 & 0 \\
		0 & 1 & 0 \\
		0 & -1 & 1 \\
	\end{bmatrix}}
	\cdot\left(
	\underset{E_{31}(-1)}
	{\begin{bmatrix}
		1 & 0 & 0 \\
		0 & 1 & 0 \\
		-1 & 0 & 1 \\
	\end{bmatrix}}
	\cdot\left(
	\underset{E_{12}}
	{\begin{bmatrix}
		0 & 1 & 0 \\
		1 & 0 & 0 \\
		0 & 0 & 1 \\
	\end{bmatrix}}\cdot A
	\right)
	\right)
	\right)
	\right)
	\right)=I$$
	By associativity of matrix multiplication, $[\text{Product of EM's}]\cdot A=I$
	Therefore, $A$ is invertible, and $A^{-1}=[\text{Product of EM's}]$

> [!caution] $A^{-1}$ as a product of Elementary Matrices
> $A^{-1}$ is the product of the Elementary Matrices obtained by reducing $A$ to $I$, in the **reverse** of the order in which you obtained them.


#### Finding $A^{-1}$
To find the inverse of $A$, we will make a double window matrix, like this: $\left[\begin{array}{c|c}A&I\end{array}\right]$.
Perform each row operation on *both* windows.
At the end of the reduction, the left window will be $I$, and the right window will be $A^{-1}$.
Example:
	$$\begin{align}
	&\left[\begin{array}{ccc|ccc}
	0&1&1&1&0&0\\
	1&0&2&0&1&0\\
	1&1&0&0&0&1
	\end{array}\right]
	\xrightarrow[E_{21}]{R_2\leftrightarrow R_1}
	
	\left[\begin{array}{ccc|ccc}
	1&0&2&0&1&0\\
	0&1&1&1&0&0\\
	1&1&0&0&0&1
	\end{array}\right]
	\xrightarrow[E_{31}(-1)]{R_3\rightarrow R_3 - R_1}
	
	\left[\begin{array}{ccc|ccc}
	1&0&2&0&1&0\\
	0&1&1&1&0&0\\
	0&1&-2&0&-1&1
	\end{array}\right]
	\xrightarrow[E_{32}(-1)]{R_3\rightarrow R_3 - R_2}\\\\
	
	&\left[\begin{array}{ccc|ccc}
	1&0&2&0&1&0\\
	0&1&1&1&0&0\\
	0&0&-3&-1&-1&1
	\end{array}\right]
	\xrightarrow[E_{3}(-\frac13)]{R_3\rightarrow -\frac13 R_3}
	
	\left[\begin{array}{ccc|ccc}
	1&0&2&0&1&0\\
	0&1&1&1&0&0\\
	0&0&1&\frac13&\frac13&-\frac13
	\end{array}\right]
	\xrightarrow[E_{23}(-1)\ \&\ E_{13}(-2)]{R_2\rightarrow R_2-R_3\ \&\ R_1\rightarrow R_1-2R_3}\\\\
	
	&\underset{[I|A^{-1}]}{\left[\begin{array}{ccc|ccc}
	1&0&0&-\frac23&\frac13&\frac23\\
	0&1&0&\frac23&-\frac13&\frac13\\
	0&0&1&\frac13&\frac13&-\frac13
	\end{array}\right]}
	\implies
	A^{-1}=\frac13\begin{bmatrix}
	-2&1&2\\
	2&-1&1\\
	1&1&-1
	\end{bmatrix}
\end{align}$$


> [!info] In summary: Matrix Inversion
> To check if $A$ is invertible, set up a "double window" $\left[\begin{array}{c|c}A&I\end{array}\right]$ and reduce $A$, performing the same operations on both sides at every step.
> If $A$ can't be reduced to $I$, then $A$ is not invertible. 
> If $A$ can be reduced to $I$, then the right window will contain $A^{-1}$ at the end of the reduction.

> [!quote] ##### Summary Theorem
> A $n\times n$ matrix $A$ which satisfies one of the below satisfies all of the below:
> 1. $A$ is invertible
> 2. $A$ can be written as a product of Elementary Matrices
> 3. $A$ can be reduced to $I$
> 4. The system $A\vec x=\vec b\implies\vec x=A^{-1}\vec b$
> 5. $\text{rank}(A)=n$ (See [[#Rank]])
> 6. $|A|\not=0$ (See [[#Determinants]])

---
*June 8 Tirgul. Links to the [board](https://drive.google.com/file/d/1hH0QaUec9ubBSNG2wn1EQoG-HmxX59zq/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1Xppz8DQMudf7ko32Q96wCEohI-crBqtc/view?usp=sharing).*

---
*June 11 Lecture. Links to the [board](https://drive.google.com/file/d/1mOqvw3KJl_MaWttjNCpnG-lY1O-ewFFF/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1GMFJyIisYPclmOIb6_3NimpHPYOh0WdV/view?usp=sharing).*
#### Row Space, Column Space, and Rank of a matrix
Let $A$ be a $m\times n$ matrix, in these examples, $A=\begin{bmatrix}1&0&-2&3\\-1&1&4&-1\\1&1&0&5\end{bmatrix}$
##### Row Space
**Definition:**
	The <u>row space</u> of $A$ is $\text{Span}(\text{rows of } A)\leq\Bbb R^n$
	*(note that $\leq$ denotes subspace)*
**Example:**
	The row space of $A$ is $\text{Span}\{(1,0,-2,3),(-1,1,4,-1),(1,1,0,5)\}\leq\Bbb R^n$

##### Column Space
**Definition:**
	The <u>column space</u> of $A$ is $\text{Span}(\text{columns of } A)\leq\Bbb R^m$
**Example:**
	The column space of $A$ is $\text{Span}\{(1,-1,1),(0,1,1),(-2,4,0),(3,-1,5)\}\leq\Bbb R^m$

##### Rank
**Definition:**
	The <u>row rank</u> of $A$ is the dimension of the row space of $A$.
	The <u>column rank</u> of $A$ is the dimension of the column space of $A$.
The row rank will always equal the column rank.
We therefore define <u>rank</u> as the row rank and the column rank, which are all equivalent.
**Finding the rank of a matrix:**
1. Reduce $A$
2. rank $A$ = number of rows which *don't* turn to all zeros after $A$ is reduced.
	**Example:**
		Given our example matrix above, the reduced form is $\begin{bmatrix}1&0&-2&3\\0&1&2&2\\0&0&0&0\end{bmatrix}$
		rank $A=2$
**Claim:**
	An $n\times n$ matrix $A$ is invertible *iff* rank $A=n$.
	*\[Proof omitted, see page 5 of linked board.]*

#### Determinants
**Definition:**
	The <u>determinant</u> of a square matrix $A$ is a number computed from the entries of $A$ which has geometric and algebraic significance.
	It is denoted: $\text{det }A$, or $|A|$, or $\left|\begin{matrix}a_{11}&\dots&a_{1n}\\\vdots\\a_{n1}&\dots&a_{nn}\end{matrix}\right|$
	The determinant of a $2\times 2$ matrix $\left|\begin{matrix}a&b\\c&d\end{matrix}\right|$ is $ad-bc$.
**Examples:**
- $\left|\begin{matrix}3&7\\1&4\end{matrix}\right|=5$
- $\left|\begin{matrix}1&-3\\-4&12\end{matrix}\right|=0$
	- Note, since the determinant is zero, the matrix is not invertible.
	- Also note, $R_2=-3R_1$
##### Computing $|A|$  for $n > 2$:
Ex. $A=\begin{bmatrix}1&1&2\\-1&0&1\\0&-1&1\end{bmatrix}$
**Definition:**
	Let $A$ be an $n\times n$ matrix.
	