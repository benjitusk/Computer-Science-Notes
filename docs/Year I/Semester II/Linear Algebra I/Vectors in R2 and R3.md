
### Operations
1. Addition
2. Subtraction
3. Scalar Multiplication
### Length of $\vec v$:
$\vec v = (x, y,\dots)\Rightarrow \|\vec v\|=\sqrt{x^2+y^2+\dots}$
$\|c\cdot\vec v\|=|c|\cdot\|\vec v\|$

### Dot Product
In $\Bbb R^n$:
	let $\vec v=(v_1,v_2,\dots,v_n)$
	let $\vec u=(u_1,u_2,\dots,u_n)$
	$\vec v\cdot\vec u = ((v_1\cdot u_1) + (v_2\cdot u_2)+\dots+(v_n\cdot u_n))$

For any $\vec v$:  $\vec v\cdot \vec v=x^2+y^2=\|\vec v\|^2$
$\|\vec v\|=\sqrt{\vec v\cdot\vec v}$

### Properties
If $\vec u, \vec v, \vec w$ are vectors in $\Bbb R^2$ or $\Bbb R^3$ and $k$ is a scalar, then:
- $\vec u\cdot\vec v=\vec v\cdot\vec u$
- $\vec u\cdot(\vec v+\vec w)=\vec u\cdot\vec v+\vec u\cdot\vec w$
- $k(\vec u\cdot\vec v)=(k\vec u)\cdot\vec v=\vec u\cdot(k\vec v)$
- $\vec v\cdot\vec v\gt0\text{ if }\vec v\not=\vec0\text{ and }\vec v\cdot\vec v=0\text{ if }\vec v=\vec0$

### Angle between vectors
The angle $\theta$ between u and v is defined as the angle ≤ 180° formed by u and v when their tails coincide.
The angle is calculated as follows: $$cos(\theta) = \frac{\vec u\cdot\vec v}{\|\vec u\|\cdot\|\vec v\|}$$
Example: ![[Pasted image 20230504170652.png]]
Proof is at [23:04](https://drive.google.com/drive/u/0/folders/1k8NTjOs7p11dktSpfPpFCD2F7PuHZDev)
What if $\theta$ is 0°? well, $cos\theta = 1$ , so there ya go. If $\theta$ is 180°, $cos\theta=-1$, and there ya go too.
**Conclusion:** vectors are ⟂ $\iff$ their dot product is *zero*. These are called **orthogonal vectors**.

### Cross Product
- Only defined in $\Bbb R^3$
- Output is a <u>vector</u>, not a scalar
- Definition:
	  Let $\vec u$ = $<x_1, y_1, z_1>$, $\vec v$ = $<x_2, y_2, z_2>$. Then,

	$$\vec u\times\vec v = <(y_1\cdot z_2 - y_2\cdot z_1), (x_2\cdot z_1 - z_1,\cdot z_2), (x_1\cdot y_2-x_2\cdot y_1)>$$

	  A faster way to calculate it, (and the "normal way") is as follows.
	1. Write out $\vec u$ above $\vec v$ in a $2\times3$ matrix:

		$$\begin{bmatrix} x_1 & y_1 & z_1 \\ x_2 & y_2 & z_2 \end{bmatrix}$$

	2. (for k = 1, 2, 3): Calculate the determinant of 2x2 matrix remaining by ignoring $k^{th}$ column, this becomes the $k^{th}$ component of the cross product
	3. The *middle* component $(k=2)$ of $\vec u \times \vec v$ is the *negative* of determinant calculated in step 2. (No changes for $k=1, k=3$)
- Corollaries:
	1. If u, v have same or opposite directions (i.e., $\vec v = c\cdot\vec u\mid c \in \Bbb R$ , then parallelogram they form is degenerate with area of 0, hence: If the length of the crossproduct is 0, the crossproduct *is* the zero vector)
	2. Area of Triangle ABC is half area of parallelogram formed by u and v, hence, $area = \frac12\|\vec u\times\vec v\|$

### Representing Lines and Planes
- Lines in $\Bbb R^2$:
	-  ![[Vectors in R2 and R3 2023-05-04 17.38.50.excalidraw]]
		- A new way to obtain this equation:
		  Let $(x, y)$ be any point on $\ell$. Since $\ell$ goes through origin, $(x, y)$ is also a *direction vector* of $\ell$.
			- i.e. Direction of $\ell$ = direction of vector $(x, y)$.
		- Using considerations of slope, the vector $(-2, 1)$ is **orthogonal** to any vector in direction of $\ell$.
			- We call $(-2, 1)$ a *normal* vector to $\ell$.
		- Hence, $(-2, 1)\cdot(x, y) = 0 \implies -2x+y=0$ (see diagram)
			- Meaning, $\vec n\cdot(x, y) = 0 \space | \space \forall (x, y) \in \ell$
> [!info] How to represent a line in $\Bbb R^2$.
> 1. Get *direction vector* $\vec v$ of *l* by subtracting 2 points on $\ell$ (because *l* might not go through the origin).
> 2. If slope of line = m, Normal vector $\vec n$ = $(1, -\frac1m)$ or any multiple of this.
> 3. Line equation is: $\vec n\cdot(x,y) = 0$, and when unwrapped, looks like this: $$<n_x,n_y>\cdot<x, y> = 0 \implies (n_x\cdot x) + (n_y\cdot y) = 0$$

- Planes in $\Bbb R^3$:
	- The set of directions ⟂ to a given vector in $\Bbb R^3$ is a *plane*.
		- Ex. If $(a, b, c) = (0, 0, 1)$ \[z-axis], then "perpendicular directions" are $(x, y)$ - plane: $(x, y, 0)$
		- $\lbrace (0, 0, 1)\cdot(x,y,0)\mid x,y\in\Bbb R\rbrace$
	- Conclusion: *ax + by + cz = 0* describes a *plane* through origin, to which \<a, b, c> is a *normal vector*.
		- For any vector $(x, y, z)$ in this plane, $(a,b,c)\cdot(x,y,z) = 0$
	- General planes in $\Bbb R^3$:
		- Let plane $P_1$ be a plane through the origin with a *normal vector* of *(2, 1, 3)*.
		- Equation of $P_1$ is $2x+y+3z = 0$.
		- Let plane $P_2$ be parallel to $P_1$, just shifted so it goes through $(6, 1, -3)$.
		- What's the equation of $P_2$?
			- Let $\vec v$ be one direction vector on $P_2$.
			- Let $(x, y, z)$ be any point in $P_2$.
			- $\vec v = (x-6, y-1, z+3)$. (just because it's a direction)
			- $\text{The normal vector to } P_1 = \text{the normal vector to }P_2$
			- This is because $P_2$ is *parallel* to $P_1$.
			- Equation is: $(x-6, y-1, z+3)\cdot\vec n = 0 \implies \dots \implies 2x+y+3z=4$
			- > **Note the similarities between equations of parallel planes**
			  > $P_1$: $2x+y+3z = 0$
			  > $P_2$: $2x+y+3z = 4$
		- Conclusion: *Any* plane in $\Bbb R^3$ has equation of $ax+by+cz=d$, where $(a, b, c)$ is a normal vector to the plane.
			- Ex: Find equation of plane with normal of $(-1, 4, 2)$ going through the point (0, 1, -3)
				- Use the normal vector to get a general equation: $-x+4y+2z=d$
				- Then, plug in our point $(0, 1, -3)$ to find *d*:
					- $-1(0)+4(1)+2(-3) = -2$
				- Putting it all together, we get: $-x+4y+2z=-2$
- Lines in $\Bbb R^3$
	- A line in $\Bbb R^3$ cannot be described using a single equation. Instead, we describe it **parametrically** - that is, we describe it as a set of points using a parameter (usually *t*).
	- ![[Vectors in R2 and R3 2023-05-04 23.53.46.excalidraw]]
	- If $\ell$ goes through origin and $\vec v$ is any point on $\ell$ (in example, $\vec v=(3,-2,4)$), then $\ell$ consists exactly of all scalar multiples of $\vec v$. $\Rightarrow$ $\ell=\{t\cdot\vec v\mid t\in\Bbb R\}$. This is the *parametric form*.
	- Cool, but what about lines not through the origin?
		- If $\vec v$ is a direction vector of $\ell$, then every point on $\ell$ is of form $P+t\cdot\vec v$ for some $t\in\Bbb R$.
		- ![[Vectors in R2 and R3 2023-05-05 00.07.40.excalidraw]]
		- Hence, $\ell=\{(2,1,-4)+t\cdot\vec v\mid t\in\Bbb R\}$
		- We find $\vec v$ by subtracting 2 points on line:$$\begin{aligned}
		\vec v &= Q-P\\&= (5,-1,-5)\Rightarrow\\
		\ell &=\{(2, 1, -4) + t\cdot(5,-1,-5)\mid t\in\Bbb R\}\\
		&=\{(2+5t,1-t,-4-5t)\mid t\in\Bbb R\}
		\end{aligned}$$
	- In summary
		1. Line in $\Bbb R^3$ through origin:
			- $\ell=\{t\cdot\vec u\mid t\in\Bbb R\}$
		2. Line in $\Bbb R^3$ <u>not</u> through origin:
		- $\ell=\{\vec u+t\cdot\vec v\mid t\in\Bbb R\}$
		- where $\vec u$ is *any* direction vector of $\ell$.
		- Usually, $\vec u$ is found by subtracting 2 points on $\ell$
- Summary
	- Cartesian Representation (equation):
		- Line in $\Bbb R^2$: $ax + by = c$
		- Plane in $\Bbb R^3$: $ax+by+c=d$
			- normal vector $\vec n$ is orthogonal to *all* direction vectors in plane
	- Parametric representation (set of points):
		- Line (in $\Bbb R^n\mid n\geqslant 2$): $\ell=\{\vec u+t\cdot\vec v\mid t\in\Bbb R\}$
			- where $\vec u$ is any point on $\ell$ and $\vec v$ is a direction vector of $\ell$.
			- Neither $\vec u\text{ or }\vec u$ is unique (because any scalar multiple of a direction vector is also a direction vector)
			- If $\ell$ goes through the origin, then $\vec u=(0, 0, 0)$, and adding it has no effect. Therefore, it can be written as: $\ell=\{t\cdot\vec u\mid t\in\Bbb R\}$
- Another way to represent a line in $\Bbb R^3$:
	- Two non-parallel planes in $\Bbb R^3$ intersect at a *line*.
	- Each point on this line must satisfy the equations of both planes.
	- ![[Vectors in R2 and R3 2023-05-05 00.45.39.excalidraw]]
	- In example in diagram, any (x, y, z) on $\ell$ must be a solution of the system $\left\{\begin{aligned}x+y+z&=2\\-x+2y-2z&=1\end{aligned}\right.$
	- Conversely, any solution of the system is a point on $\ell$.


### Tirgulim \[Incomplete]

> [!todo] Given 4 points, prove using vectors that the points form a parallelogram
> $A=(2,-4,-3)$, $B=(7,2,7)$, $C=(4,5,9)$, $D=(-1,-1,-1)$
> - To prove that a quad. ABCD is a parallelogram, show that one pair of opposite sides are both parallel and equal in length.
> - $\text{Let }\vec v = \overline {AB}\text{ and let }\vec u = \overline{CD}$
> - We need to show that $\vec v$ and $\vec u$ have the same direction and [[#Length of $ vec v$:|Length]]
> - $\overline{ABCD}$ is a parallelogram iff $\vec v = \vec u$.

> [!todo] Find a vector orthogonal to 2 given vectors
> Very easy, all you have to do is take the [[#Cross Product]] of the 2 vectors. This will yeild an orthogonal vector.

> [!NOTE] Given 2 vectors of equal length and the angle between them, find a related angle
> If the angle between $\vec v$ and $\vec u$ is 30°, calculate the angle between $\vec u + 3\vec v\text{ and }4\vec u = 2\vec v$
> - We know the angle will use the following formula: $$\cos\theta=\frac{(\vec u + 3\vec v)\cdot (4\vec u - 2\vec v)}{||\vec u + 3\vec v|| \cdot ||4\vec u - 2\vec v||}\newline\newline=\frac{4{||\vec u||}^2+10(\vec u\cdot\vec v)-6{||\vec v||}^2}{\sqrt{(\vec u+3\vec v)\cdot(\vec u+3\vec v)}\cdot\sqrt{(4\vec u - 2\vec v)\cdot(4\vec u - 2\vec v)}}$$
> - Denote $n$ as the length of $\vec u \text{ and }\vec v$
> - Ok I can't type all this out. It's complicated.
> - You can find the rest in the recordings, I don't think I'm going to continue with the Tirgulim.
