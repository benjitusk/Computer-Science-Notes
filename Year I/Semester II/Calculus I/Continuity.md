*May 1 Lecture. Links to the [board](https://drive.google.com/file/d/1C5_4YRm443JkyOIoHuAuMGauKNMMmWog/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1-xgTFINGv4Zzd_H2J8XjnaSyJAF2YFuO/view?usp=sharing).*
### Definition:
$f(x)\text{ is continuous at }x=a\text{ if }f(a)=\lim_{x\to a}{f(x)}$.
#### 3 Types of discontinuities:
1) $\lim_{x\to a}{f(x)}$ exists, but $\not=f(a)$. Either $f(a)$ is undefined, or some other number.
	- This is called a removable discontinuity, becuase it's an issue at just that point.
2) $\lim_{x\to a}{f(x)}$ doesn't exist because $\lim_{x\to a^-}{f(x)} \not=\lim_{x\to a^+}{f(x)}$
	- This is called a jump discontinuity, or a Type I discontinuity.
3) $\lim_{x\to a}{f(x)}$ doesn't exist, even one-sided (from at least one side).
	- This is called a Type II discontinuity.
	- This does not include extended limits, so by this definition, $\lim_{x\to0}{\frac1x}$ doesn't have a limit, meaning it's discontinuos at $x=0$ with a Type II discontinuity.
	- Ususally in this case, $f$ has a vertical asymptote $x=a$, but not always.

> [!example] Examples of discontinuities
> 1) $f(x) = {1\over x+3} \text{ at } x=-3$
> 2) $f(x)=\ln(x) \text{ at }x=0$
> 3) $f(x)=\sin{\frac 1x}$
> 	- Type II @ x=0 because the limit doesn't exist, even though there's no vertical asymptote
> 4) Dirichlet function: $D(x)=\begin{cases}1 &x\in\Bbb Q\\0 &x\not\in\Bbb Q\end{cases}$
> 	- $\forall a \in \Bbb R, \lim_{x\to a}{D(x)}$ doesn't exist
> 		- This function is discontinuous at **every point**.
### Finding discontinuous points
###### Polynomials:
- $f(x)=\frac{x^2+3x}{x^2+x-6}$
	- Candidates for discontinuity:
		- $$\begin{align}x^2+x-6 &= 0\\(x+3)(x-2)&=0\\\Rightarrow x&=-3,2\end{align}$$
			- $\text{At }x=2: \lim_{x\to 2}{f(x)}=\lim_{x\to 2}{\frac{x}{x-2}=\pm\infty}\Rightarrow\text{ Type II discontinuity @ }x=2.$
			- $\text{At }x=-3: \lim_{x\to -3}{f(x)}=\lim_{x\to -3}{\frac{x}{x-2}=\frac35}$
			  BUT, $f(-3)$ is undefined $\Rightarrow\text{ Removable discontinuity}$
###### Piecewise Functions
- $f(x)=\begin{cases}2x+\frac{6}{2-x} &:x\lt 4 \\8-\frac8x &:x\ge 4\end{cases}$ 
	- Candidates for discontinuity:
		- x=2, ~~x=0~~
			- *Vanishing denominators*
			- But, x=0 is not a candidate, because the expression(s) which is discontinuous at x=0 ($8-\frac8x$) is not the definition of $f$ when $x=0$, only for $x\ge4$.
		- x=4
			- Because there's a potential for a mismatch of the functions
	- $x=2$
		- $\lim_{x\to 2}{f(x)}=\lim_{x\to 2}{2(2)+{6\over2-2}=\pm\infty}$
			- Type II Discontinuity
	- $x=4$
		- We need to check both sides
		- $\lim_{x\to 4^-}{f(x)=\lim_{x\to 4}{2x+\frac{6}{2-x}}=8+{6\over-2}=8-3=5}$
		- $\lim_{x\to 4^+}{f(x)=\lim_{x\to 4}{8-\frac8x}=8-{8\over4}=6}$
		- Type I Discontinuity

###### Exponents in the denominator containing $x$.
- $f(x)=\frac6{2+3^{(\frac4{5-x})}}$
	- Candidates for discontinuity
		- $x=5$
		- $3^{(\frac4{5-x})}=-2$
			- Not possible, a positive number to *any* power will be > 0
	- $x=5$
		- $\lim_{x\to5}{f(x)}$
			- The denominator of the exponent is going to zero, which means the exponent will be either $\pm\infty$. Because of this, we need to check separately.
		- $\begin{align}\\\lim_{x\to5^+}{f(x)}&=\lim_{x\to5^+}{\frac6{2+3^{(\frac4{5-x})}}}\\&=\frac6{2+3^{(\lim_{x\to5^+}{\frac4{5-x}})}}\\&=\frac6{2+3^{-\infty}}\\&=3\end{align}$
		- $\begin{align}\\\lim_{x\to5^-}{f(x)}&=\lim_{x\to5^-}{\frac6{2+3^{(\frac4{5-x})}}}\\&=\frac6{2+3^{(\lim_{x\to5^-}{\frac4{5-x}})}}\\&=\frac6{2+3^{+\infty}}\\&=\frac6\infty\\&=0\end{align}$
			- Jump Discontinuity
	- $f$ has a Type I discontinuity at $x=5$.
---
*May 1 Tirgul. Links to the [board](https://drive.google.com/file/d/1FSqMNuyA5rjcVlTJHJJ7DJgYFUyxDiUd/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1qXaY82pm0l_fU_0Benl9S-MytRLqPwRX/view?usp=sharing)*
### Forming a cts. functin using known continuous functions
> [!quote] #### Theorem #25
> 1. If $f$ and $g$ are cts at $x=a$, then the following functions are also cts. at $x=a$:
> 	- $f+g$
> 	- $f-g$
> 	- $f\cdot g$
> 	- $\frac fg\mid g(a)\not=0$
> 2. If $g$ is cts at $x=a$ and $f$ is cts at $g(a)$, then $(f\bullet g)(x)$ is cts at a.

**Definition:** An <u>elementary</u> function is one obtained by adding / subtracting / multiplying / dividing / composing any of the following functions of x:
- $a^x$
- $log_ax$
- $sin/cos/tan\ (x)$
- $x^n$
- $\sqrt[n]{x}$
- constants
- All the functions we've seen except abs. value function, whole number function, Dirichlet function
> [!quote] #### Theorem #26:
> Every elementary function is cts. at every point in it's domain

> [!quote] #### Theorem #27:
> - If f is cts at x=a and $f(a) > 0$, then there exista a neighborhood of a in which $f(x)>0 \mid\forall x$
> - If f is cts at x=a and $f(a) < 0$, then there exista a neighborhood of a in which $f(x)<0 \mid\forall x$

**Definition:** $f$ is cts. in the <u>closed</u> interval $[a,b]$ if $f$ is cts. at every point in $(a, b)$, cts from the right at $x=a$, and cts. from the left at $x=b$.

> [!quote] #### Weirstrass Theorem (#28-29):
> 1) If $f$ is cts. in $[a,b]$ then $f$ is bounded there
> 	- i.e. $\exists m,M \text{ such that } m \le f(x) \le M \mid\forall x\in[a,b]$
> 2) If $f$ is cts. in $[a,b]$ then $f$ attains it's maximum and minimum there
> 	- i.e. $\exists c,d\in[a,b] \text{ such that } f(c) \le f(x) \le f(d) \mid\forall x\in[a,b]$
> 	- This means that there is a defined upper and lower value of $f$

> [!quote] #### Intermediate Value Theorem (IVT):
> If $f$ is cts. on a closed interval $[a,b]$ and $f(a)\not=f(b)$ then for every $\alpha$ between $f(a)$ and $f(b)$ there exists $c\in[a,b]$ such that $f(c)=\alpha$.
> 	Specifically: If $f(a)>0\text{ and }f(b) < 0 \text { then }\exists c\in(a,b) \text{ such that } f(c)=0$

---
*May 3 Lecture. Omitted Intentionally. Links to the [board](https://drive.google.com/file/d/1vXJMSxUySwXhonoLle1QXKjGXpKmLLaC/view?usp=sharing) and the [recording](https://drive.google.com/file/d/1lhSVfxcwxQFGFdzG-fiZpgAd0WsPpFKG/view?usp=sharing).*

---

