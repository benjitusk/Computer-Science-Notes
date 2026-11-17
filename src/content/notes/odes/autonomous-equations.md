---
title: "Autonomous Equations"
order: 3
---

### Slope Field
**Definition:** Slope Field
> A slope field is a tool we can use to learn information about the solutions to an ODE even when we cannot solve it completely.
> Using ODE, we look at many points in the plane and calculate the slope of a tangent to any solution $y(x)$ at that point. By doing this for many points, we can see what graphs of solutions look like.

### Autonomous Equations
An ODE is autonomous if it is in the form $y’=f(y)$.
For example, 
- $y'=−y^2$
- $y'=4𝑦(1−𝑦)$
What does the slope field of an autonomous equation look like?
Since $y’$ depends only on y, the slope of any solution is *constant* along any horizontal line.

Given the ODE $y’=-y^2$, we can find the slopes for any given y:

| $(x,y)$ | $y’=-y^2$ |
| ------- | --------- |
| $(2,1)$ | $-1$      |
| $(1,2)$ | $-4$      |
| $(3,0)$ | $0$       |


<span class="drawing"><img class="drawing__light" src="/drawings/03-existence-and-uniqueness-theorem-2024-05-30-180733.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/03-existence-and-uniqueness-theorem-2024-05-30-180733.dark.svg" alt="" loading="lazy" decoding="async"></span>
> [!note]
> An autonomous ODE is a type of separable ODE, so we have an equilibrium solution $y=k$ for any $k$ satisfying $f(k)=0$.
> 
> In our example, $f(0)=0$, so $y=0$ is an equilibrium solution to this ODE.

#### Actual Solutions to the ODE
For the ODE $y’=-y^2$:

The equilibrium solution is $y=0$.

To solve:

$$
-\frac{1}{y^2} y' = 1 \implies \int -\frac{1}{y^2} \, dy = \int 1 \, dx
$$

$$
\frac{1}{y} = x + C \implies y = \frac{1}{x + C}
$$

Here, the uniformity of the slope along each horizontal line is very clear, because each solution $y = \frac{1}{x + C}$ is a right/left translation of the graph $y = \frac{1}{x}$.

```desmos-graph
y = \frac{1}{x + C_1}
y = \frac{1}{x + C_2}
y = \frac{1}{x + C_3}
C_1=-1
C_2=0
C_3=1
```

#### Sketching Solutions of an Autonomous ODE
$y’=f(y)$
We’ll be using the equation $y’=4y(1-y)$.

1. Sketch the equilibrium solutions $y=k$ for each root $k$ of $f$
	1. $4y(1-y)=0$
		- $y=1$ 
		- $y=0$
	2. <span class="drawing"><img class="drawing__light" src="/drawings/03-autonomous-equations-2024-05-30-200833.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/03-autonomous-equations-2024-05-30-200833.dark.svg" alt="" loading="lazy" decoding="async"></span>
2. Sketch (on a separate pair of axes) the graph of $f(y)$ as a function of $y$, or at least investigate where $f$ is positive/negative, increasing/decreasing, and find the extreme points.
	1. Sketch the function as $y=4x(1-x)$
	2. Find the roots (we already did this in step one)
		- 1, 0
	3. Examine the expanded form $y=-4x^2+4x$
	4. Identify the extreme points
		1. 2<sup>nd</sup> derivative is $y=-8x+4 \implies -8(x-\frac12)$
		2. Root of 2<sup>nd</sup> derivative is $x=\frac12$
	5. Graph is a “frowning” parabola, so our extreme point is a maximum
	6. <span class="drawing"><img class="drawing__light" src="/drawings/03-autonomous-equations-2024-05-30-212755.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/03-autonomous-equations-2024-05-30-212755.dark.svg" alt="" loading="lazy" decoding="async"></span>
3. Examine the “signs” of $f(y)$:
	- For arguments $y$ where $f(y)<0\implies y'>0\implies y(x)$ is decreasing
	- For arguments $y$ where $f(y)>0\implies y'>0\implies y(x)$ is increasing
	- For arguments $y$ where $f(y)=0\implies$ we already know this is an equilibrium solution
	- <span class="drawing"><img class="drawing__light" src="/drawings/03-autonomous-equations-2024-06-04-153112.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/03-autonomous-equations-2024-06-04-153112.dark.svg" alt="" loading="lazy" decoding="async"></span>
4. Find the concavity of the solutions
	-  In an autonomous ODE, $y’’ = f’\cdot f$
	- $f’\cdot f > 0$
		- $y(x)$ is concave up
			- $f’, f > 0$ i.e. $f(y)$ is positive and increasing
			- $f’, f < 0$ i.e. $f(y)$ is negative and decreasing
	- $f’\cdot f < 0$
		- $y(x)$ is concave down
			- $f’ > 0 f < 0$ i.e. $f(y)$ is negative and increasing
			- $f’ < 0, f > 0$ i.e. $f(y)$ is positive and decreasing
	- $f’=0$ and changing sign $\iff$ $y$ is an extreme point of $f$
		- y(x) has an inflection point
	- In our example, $f’$ only changes signs at it’s single root (see step 2.4.2), so that is our single point of inflection.

Given the above calculations and sketches, we examine the behavior of f, f’, y’’ as y passes through the values $0, \frac12,1$, since those were our equilibrium solutions and inflection points:


| $y$           | $f(y)$ | $f’(y)$ | $f’\cdot f=y’’(x)$ | $\implies y$ is… |
| ------------- | ------ | ------- | ------------------ | ---------------- |
| $y<0$         | $(-)$  | $(+)$   | $(-)\cdot(+)=(-)$  | Concave down     |
| $0<y<\frac12$ | $(+)$  | $(+)$   | $(+)\cdot(+)=(+)$  | Concave up       |
| $\frac12<y<1$ | $(+)$  | $(-)$   | $(+)\cdot(-)=(-)$  | Concave down     |
| $1<y$         | $(-)$  | $(-)$   | $(-)\cdot(-)=(+)$  | Concave up       |

We can now sketch the slope field of the solutions:

<span class="drawing"><img class="drawing__light" src="/drawings/03-autonomous-equations-2024-06-04-160131.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/03-autonomous-equations-2024-06-04-160131.dark.svg" alt="" loading="lazy" decoding="async"></span>

##### Summary

 >[!summary] Summary of Method to Sketch Solutions of an Autonomous ODE $y’=f(y)$
 >
 >1. Find the equilibrium solutions: $y=k$ where $f(k)=0$
 >2. Find where $f$ is positive/negative/increasing/decreasing, and find the extreme points.
 >3. If $f(y_0)>0$ then $y(x)$ is increasing along the line $y=y_0$
 >   If $f(y_0)<0$ then $y(x)$ is decreasing along the line $y=y_0$
 >4. $y’’=f’\cdot f$
 >	- If $f’,f$ have the same sign ($y’’>0$) at $y_0$, then $y(x)$ is concave up along the line $y=y_0$
 >	- If $f’,f$ have different signs ($y’’<0$) at $y_0$, then $y(x)$ is concave down along the line $y=y_0$
 >	- If $f’=0$ at $y_0$, $y(x)$ has an inflection point along the line $y=y_0$. This line is called a **line of inflection**.
 

#### Classification of Autonomous ODE Solutions
The equilibrium solutions of an AODE can be classified as one of three types:
1. Stable:
	- If $y$ strays slightly from the equilibrium, then it will move towards it as $x$ increases
2. Unstable:
	- If $y$ strays slightly from the equilibrium, then it will move further away it as $x$ increases
3. Semi-Stable:
	- Stable in one direction of $y$ (up or down), and unstable in the other direction.
