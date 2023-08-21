Leading question:
How to calculate area under graph $y=f(x)$ between $[a,b]$?
Idea: Subdivide interval into $n$ equal parts.
The length of each subinterval $=\Delta x=\frac{b-a}n$.
$x_k=a+k\Delta x$.
Now, build a rectangle on top of each subinterval $[x_k, x_{k+1}]$ where the height is $f(x_{k+1})$—i.e., a rectangle that touches the graph of $f$ in the upper right corner.
As an approximation of the area under the graph, we take the *sum* of the areas of these rectangles:
$S_n=f(x_1)\cdot\Delta x+f(x_2)\cdot\Delta x+\dots+f(x_n)\cdot\Delta x=\sum_{k=1}^n{f(x_k)\cdot\Delta x}$
*This expression for $S_n$ is called a Reimann sum.*
Now, let $n\to\infty$; the more rectangles we have, the more precisely the area will fill exactly the area under the graph. 
This limit of Reimann sums is called the definite integral of $f$ from $a$ to $b$.
$$\lim_{n\to\infty}{\sum_{k=1}^n}f(x_k)\Delta x=\int_a^bf(x)dx$$

> [!example] Simple Example
> $\int_2^53xdx=\lim_{n\to\infty}\sum_{k=1}^nf(x_k)\Delta x$
> $\Delta x=\frac{5-0}n=\frac5n$
> $f(x_k)=3x_k=0+3\frac{5k}n$ (*Recall that $x_k=a+k\Delta x$)*
> $=\lim_{n\to\infty}\frac{15k}n\cdot\frac5n$
> $=lim_{n\to\infty}\left[\frac{75}{n^2}\sum_{k=1}^nk\right]$
  

