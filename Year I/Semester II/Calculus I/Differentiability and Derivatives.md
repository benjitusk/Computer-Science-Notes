*May 8 Lecture. Links to the [board](https://drive.google.com/file/d/1BwMi6pAdCWz0UrAnsMBeoXTBa8z6roiN/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1zN1ep3dD9x7Rmo8kGeQKTHNNBCH0p6RK/view?usp=sharing).*
What does this stuff do?
	If you have a function $y=f(x)$, we want to be able to calculate the slope of a line that is tangent to a point on the graph.
	We seek a <u>derivative function</u> $f^\prime(x)$ such that
		$f^\prime(x_0)=\text{ slope of line tangent to graph }y=f(x)\text{ at point }(x_0,f(x_0))$.

Why are we interested, and how do we find this?
Background:
	What is a tangent line to a graph?
	Let's take the following example:
		![[Pasted image 20230508150235.png|300]]
		Let $x=time$.
		Let $f(x) =$ distance traveled by time $x$.
		Speed = $\frac{distance}{time}$.
		If $f(2)=1$, $f(3)=4$, then my speed over time interval $[2,3]$ is $\frac{f(3)-f(2)}{3-2}$.
			I.E. $\frac{\Delta y}{\Delta x} = 3 \Rightarrow \text{ slope of line connecting } (2, f(2) \text{ and } 3, f(3)).$ 
		Slope represents the rate of change as in this example.

---
What would the speedometer show at $x=3$?
Idea: let's take shorter and shorter intervals around $x=3$ and see what the slope for that line is. Each slope is a rate of change (ROC) of $f$ over a smaller and smaller interval $[x,3]$. Define the Instantaneous Rate of Change (IRoC) at $x=3$ to be the limit of these slopes. $$\lim_{x\to x_0}{\frac{\Delta y}{\Delta x} = \lim_{x\to x_0}{\frac{f(x_0)-f(x)}{x_0 - x}}}$$ Or, if we express $x=x_0 + h$, IRoC at $x_0 = \lim_{h\to 0}{\frac{f(h_0+h)-f(x_0)}{h}}$
The tangent line to $y=f(x)$ at $x=x_0$ is <u>defined</u> as the line through $(x_0, f(x_0))$ with this slope.

##### Definitions:
1) $f(x)$ is <u>differentiable</u> at the point $x=x_0$ if the limit $\lim_{h\to 0}{\frac{f(x_0+h)-f(x_0)}{h}}$ exists.
2) $f(x)$ is <u>differentiable</u> from the left   if $\lim_{h\to 0^-}{\frac{f(x_0+h)-f(x_0)}{h}}$ exists.
3) $f(x)$ is <u>differentiable</u> from the right if $\lim_{h\to 0^+}{\frac{f(h_0+h)-f(x_0)}{h}}$ exists.
	- $f$ is differentiable at $x_0$ $\iff$ $f$ is differentiable from left and from right at $x_0$ **and** these limits are equal
	
	* Example: Graph $y=|x|$. Is x differentiable at $x=0$?
	  From the left: $\lim_{h\to 0^-}{\frac{f(h)-f(0)}{h}}$ = $\lim_{h\to 0}{\frac{-h}{h}}=-1$. Note, $h<0$, so $|h|=-h$
	  From the right: $\lim_{h\to 0^+}{\frac{f(h)-f(0)}{h}}=1$
	  Hence, $f(x)=|x|$ is differentiable from each side at $x_0=0$, but is not differentiable there.
4) $f$ is differentiable in open interval $(a,b)$ if f is differentiable at each pt. in that interval
5) If $f$ is differentiable in $(a,b)$ then the derivative of $f$ on $(a,b)$ is defined as (for $x_0\in(a,b)$): $f^\prime(x_0)=\lim_{h\to 0}{\frac{f(x_0+h)-f(x_0)}{h}}$
	One sided derivatives are defined similarly to definitions 2 & 3.
The derivative function $f^\prime$ is defined for each $x_0$ in this manner: $$f^\prime(x)=\lim_{h\to 0}{\frac{f(x+h)-f(x)}{h}}$$

> [!quote] ##### Theorem 31:
> If x is differentiable at $x_0$, then x is continuous at $x_0$. The reverse is *not true*.
> Intuitively, $f^\prime (x)=\frac{\Delta y}{\Delta x}$ as $\Delta x \to 0$ Since denominator is going to zero, this fraction has a limit only if $\Delta y\to 0$ too, i.e. $f$ is continuous at $x_0$.

##### Linear Approximation using derivatives:
$(1.0123)^2$
$f^\prime(x)=\lim_{h\to 0}{\frac{f(x+h)-f(x)}{h}}$. I.e., for small $h$:
$f^\prime (x) \approx \frac{f(x+h)-f(x)}{h}$
For smaller h, the approximation is more exact.
$f(x+h)\approx f(x)+h\cdot f^\prime (x)$.![[Pasted image 20230508154358.png|600]]
$$\begin{aligned}\text{In our example: }(1.0123)^2 \approx 1^2 + (0.0123)\cdot 2 &= 1.0246\\\text{Real Answer: }(1.0123)^2 &= 1.02457\end{aligned}$$

(We multiply by 2, because that's $f^\prime$)

##### Differentiation Rules
1) Derivative of a constant function $f(x)=c$ is zero.
	- $f(x)=c$ is differentiable everywhere, and $f^\prime(x)=0$
2) If $f$ and $g$ are differentiable at $x_0$, so is the function $f+g$, and $(f+g)\prime(x_0)$ = $f^\prime(x_0) + g\prime(x_0)$.
	- The derivative of a sum of functions at a point is the sum of the derivatives of functions at a point.
3) if f is differentiable at $x=x_0$ and c is any real number, then cf is diff. at $x_0$, and $(c\cdot f)\prime = c\cdot f^\prime$.
---
*May 8 Tirgul. Links to the [board](https://drive.google.com/file/d/1S_NZEhPPuh-J7UZWxVKXWi7kgmO_z-7Q/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1zN1ep3dD9x7Rmo8kGeQKTHNNBCH0p6RK/view?usp=sharing).*
##### Some Derivative Functions
$f(x)=x^3$ (in general, $f(x) = x^n$ for $n\in\Bbb N$)
$f^\prime(x)=\lim_{h\to0}{\frac{{(x+h)}^3-x^3}{h}}$
$=\lim_{h\to0}{\frac{x^3+3x^2h+3xh^2+h^3-x^3}{h}}$
$=\lim_{h\to0}{\frac{3x^2h+3xh^2+h^3}{h}}$
$=\lim_{h\to0}{\frac{h\cdot(3x^2+3xh+h^2)}{h}}$
$=\lim_{h\to0}{3x^2+3xh+h^2}$
$=3x^2 \Rightarrow f^\prime(x)=3x^2$
**In general**
if $f(x) = x^n$ for $n\in\Bbb N$,
$$\begin{align}
	f^\prime(x)&=\lim_{h\to0}{\frac{{(x+h)}^n-x^n}{h}}
	
	\\&=\lim_{h\to0}{\frac{nx^{n-1} + \text{terms where power of h ≥ 2}}{h}}
	
	\\&=\lim_{h\to0}{\frac{nx^{n-1} + h\cdot[\text{terms where power of h $\ge$ 2}]}{h}}
	
	\\&=\lim_{h\to0}{nx^{n-1} + [\text{terms where power of h $\ge$ 1}]}
	
	\\&=\lim_{h\to0}{nx^{n-1} + [\text{terms $\to$ 0 as }h\to0]}
	
	\\&=nx^{n-1}
\end{align}$$
E.g. $f(x) = x^5\Rightarrow f^\prime(x)=5x^4$

---
*May 10 Lecture. Links to the [board](https://drive.google.com/file/d/1z4C-JCqc7vx1cP1Z-UaKlwRk_358B4eq/view?usp=sharing) and the [recording](https://drive.google.com/file/d/10TehH0JSiymOF9wxWyi-5U3tamo7EgTT/view?usp=sharing).*
##### Rules of Differentiation:
1. $f(x)=c\Rightarrow f^\prime(x)=0$
2. ${(c\cdot f)}^\prime(x)=c\cdot f^\prime(x)$
3. ${(f\pm g)}^\prime(x)=f^\prime(x)\pm g^\prime(x)$
4. ${(f\cdot g)}^\prime(x)=f(x)\cdot g^\prime(x)+f^\prime(x)\cdot g(x)$
	Product Rule
5. ${(\frac fg)}^\prime(x)=\frac{f^\prime(x)\cdot g(x)-f(x)\cdot g^\prime(x)}{{\left[g(x)\right]}^2}$
	Quotient Rule

##### Chain Rule
Used to differentiate composed function $f(g(x))$
	**Definition:** $${(f\circ g)}^\prime=f^\prime(g(x))\cdot g^\prime(x)$$
> [!example] Examples
> ${(\sqrt{\sin x})}^\prime=\frac{1}{2\sqrt{\sin x}}\cdot\cos x=\frac{\cos x}{2\sqrt{\sin x}}$
> 
> ${({(5x^2-3x+2)}^5)}^\prime=5{(5x^2-3x+2)}^4\cdot(10x-3)$

###### Applications of the Chain Rule:
1. ${(x^{\frac pq})}^\prime=\frac pq x^{\frac pq -1}$
2. Given $f(x)$, (who's derivative $f^\prime$ we know), what is derivative of $f^{-1}$?
	1. We find formula [here](https://drive.google.com/file/d/10TehH0JSiymOF9wxWyi-5U3tamo7EgTT/view?t=1h19m), this is known as the **Inverse Function Rule**:$${\left[f^{-1}(x)\right]}^\prime=\frac1{f^\prime(f^{-1}(x))}$$
	- Ex. $f(x)=\ln x\Rightarrow f^\prime(x)=\frac1x\qquad \text{What's derivative of }f^{-1}(x)=e^x$?
		- ${(e^x)}^\prime=\frac1{\frac1{e^x}}=e^x$
	- $f(x)=\tan x\Rightarrow f^\prime(x)=\frac1{\cos^2x}\qquad \text{What's derivative of }f^{-1}(x)=\arctan x$?
		- ${(\arctan x)}^\prime=\frac1{\frac1{\cos^2(\arctan x)}}=\cos^2(\arctan x)\Rightarrow$[lots of math](https://drive.google.com/file/d/10TehH0JSiymOF9wxWyi-5U3tamo7EgTT/view?t=1h34m30s)$\Rightarrow\frac1{x^2+1}$
	- $f(x)=x^2\Rightarrow f^\prime(x)=2x\qquad \text{What's derivative of }f^{-1}(x)=\sqrt x$?
		- ${(\sqrt x)}^\prime=\frac1{2\sqrt x}$
---
*May 15 Lecture. Links to the [board](https://drive.google.com/file/d/1dFASNn6Xd4YzXUSHsNLkqV739o3WLJLu/view?usp=sharing) and the [recording](https://drive.google.com/file/d/15RNuaMs73eEMTTOE6A2OBvyYL6uSSnAJ/view?usp=sharing).*
##### Other useful derivatives:
$f(x)=2^x$ (in general: $f(x)=a^x\mid (a>0)$)
	Recall: $2=e^{\ln2}\Rightarrow2^x={(e^{\ln2})}^x=e^{x\ln2}$
	This is a composed function $(g\circ h)(x)$ where $h(x)=x\cdot\ln2$ and $g(x)=e^x$.
	So, we apply the [[#Chain Rule]] to get $e^{x\cdot\ln2}\cdot\ln2\Rightarrow\ln2\cdot 2^x$
	**In general:**
	$f(x)=a^x\Rightarrow f^\prime(x)=(\ln a)\cdot a^x$
$f(x)=\log_2(x)$ (in general: $f(x)=\log_a(x)\mid(a>0,a\not=1)$)
	Use the [[#Applications of the Chain Rule:|Inverse Function Rule]]:
	Let $f(x)=a^x$, so that $f^{-1}(x)=\log_ax$.
	${(\log_ax)}^\prime=\frac1{f^\prime(f^{-1}(x))}=\frac1{\ln a\cdot a^{\log_ax}}=\frac1{\ln a\cdot x}$
$f(x)=|g(x)|$
	$f^\prime(x)=\frac {g(x)}{|g(x)|}\cdot g^\prime(x)$
$f(x)=\ln(g(x))$
	$f^\prime(x)=\frac{1}{g(x)}\cdot g^\prime(x)=\frac{g^\prime(x)}{g(x)}$
##### Trigonometric derivatives:
- $\sin x\rightarrow\cos x$
- $\cos x\rightarrow-\sin x$
- $\tan x\rightarrow\sec^2x$ 
- $\sec x\rightarrow\sec x\cdot\tan x$
- $\csc x\rightarrow-\csc x\cdot\cot x$
- $\cot x\rightarrow-\csc^2x$
- $\arcsin x\rightarrow\frac1{\sqrt{1-x^2}}$
- $\arccos x\rightarrow-\frac1{\sqrt{1-x^2}}$
- $\arctan x\rightarrow\frac1{\sqrt{1+x^2}}$
##### Second Derivative
**Definition:** The <u>second derivative</u> of $f$ at $x=a$ is the derivative of $f^\prime(a)$, evaluated at $x=a$.
*We'll learn later the graphical significance of $f^{\prime\prime}(x)$.*

> [!Example]
> $f(x)=5x^3$. Find $f^{\prime\prime}(x),f^{\prime\prime}(3)$
> $f^{\prime}(x)=15x^2$
> $f^{\prime\prime}(x)=30x\Rightarrow f^{\prime\prime}(3)=90$
In "physical" terms, if $f(x)$ denotes distance, then $f^\prime(x)$ denotes velocity (change of distance over time), and $f^{\prime\prime}(x)$ denotes acceleration (change of velocity over time)

---
*May 15 Tirgul. Links to the [board](https://drive.google.com/file/d/1tpdT4hh9mK4BQsP4c0kzmhpqJ22tFux7/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1DYerFUrS_VTiF-x110mAMMfijngYG4Y7/view?usp=sharing).*
**\[Incomplete]**

---
*May 17 Lecture. Links to the [board](https://drive.google.com/file/d/1uoFO6oGx4snb2b7w5d6NiHLif-sXGahC/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1LCHNtfOGq5c4wNoIxWh8H0RmwglGTSME/view?usp=sharing).*
**\[Incomplete]**
