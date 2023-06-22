*June 5 Lecture. Links to the [board](https://drive.google.com/file/d/1iEPrIW_3tdyM6PEj864ZSCy3giiyGTL_/view?usp=sharing) and [recording](https://drive.google.com/file/d/16RVc0Qhm5KJTQPAcKlsWrlrtnZ2SH6Sq/view?usp=sharing).*
#### Introduction
**Definition:**
	An <u>indefinite integral</u> is the antiderivative of a function.
	I.e., given a function $f(x)$, can we find a function $F(x)$ such that $F^\prime(x)=f(x)$? $F(x)$ is called the antiderivative of $f$.
> [!example] Example of antiderivative
> $f(x)=x^2\implies F(x)=\frac{x^3}{3}$ *or* $\frac{x^3}{3}-17$ *or* $\frac{x^3}{3}+15$...
> In general, $F(x)=\frac{x^3}{3}+C\quad (C\in\Bbb R)$

**Notation:**
	We use the symbolic notation: $$\int{f(x)}\;dx=F(x)+C$$
	$f(x)$ is called the <u>integrand</u>


> [!info] Basic Integrals -- Very Important
> - $\int{\cos x}\;dx=\sin x+C$
> - $\int{\sin x}\;dx=-\cos x+C$
> - $\int{e^x}\;dx=e^x+C$
> - $\int{x^n}\;dx=\frac{x^{n+1}}{n+1}+C$
> 	- *For $n\not=1$*
> - $\int{x^{-1}}\;dx=\int{\frac1x}\;dx=\ln{|x|}+C$
> - $\int{\frac1{1+x^2}}\;dx=\arctan x+C$
> - $\int{\frac1{\cos^2x}}\;dx=\tan x+C$
> - $\int{-\frac{1}{\sin^2x}}\;dx=\cot x+C$
> - $\int{k}\;dx=kx+C$

#### Basic Properties
1. Suppose $\int f = F, \int g = G$.
	   $\int{\left[f(x)+g(x)\right]}\;dx=F(x)+G(x)+C$
	   The derivative of a sum is the sum of the derivatives. Therefore, the integral of a sum is equal to the sum of the integrals. Basically, this means you can split up the integral where there are terms being added or subtracted.
2. Suppose $\int f = F, k\in\Bbb R$.
	   $\int{(kf)(x)}\;dx=k\cdot\int{f(x)}\;dx=kF(x)+C$
	   The integral of a product of a constant and a function is the product of a constant and the integral of the function. Basically, this means you can pull constant coefficients outside of the integrand.
	   E.g, $\int{5x^3}\;dx=5\cdot\int{x^3}\;dx=5\cdot\frac{x^4}{4}+C=\frac{5x^4}{4}+C$
3. Combining properties 1 & 2, we get "linearity of the integral":
	   $$\int[af(x)+bg(x)]\;dx=aF(x)+bG(x)$$
> [!example] Example: Exercise 6, Q1/1
> $$\begin{array}{l}\int{\left(2x^3+\frac3x\right)}\;dx
&=\int{2x^3}\;dx\;&+\;\int{\frac3x}\;dx\\
&=2\int{x^3}\;dx\;&+\;3\int{\frac1x}\;dx\\
&=2\cdot\frac{x^4}{4}+C&+\ 3\cdot\ln|x|+C\\
=\frac{x^4}{2}+3\ln|x|+C
\end{array}$$


#### Integration by Substitution
*Reversing the [[Differentiability and Derivatives#Chain Rule|Chain Rule]].*
**Rule:**
	Suppose $F^\prime=f$. Then by the chain rule, ${[F(u(x))]}^\prime=f(u(x))\cdot u^\prime(x)$. When we reverse the process, $\int{f(u(x))\cdot u^\prime(x)}\;dx=F(u(x))+C$ 
	Therefore, we deduce the following rule: $$\int{\Big[f\big(u(x)\big)\cdot u^\prime(x)\Big]}\;dx=F\big(u(x)\big)+C$$
	The key is to identify one factor of the integrand as the derivative of another part of the integrand; this other part will be your $u^\prime(x)$.
	Another way to say that is to find a composed function $(f\circ g)(x)$ within the integrand such that $g^\prime(x)$ is being multiplied by the composed function
> [!example] Example of Reversing the Chain Rule
> $$\int{\color{blue}\underbrace{\color{black}3\sin^2x}_{f\big(\color{orange}u(x)\color{blue}\big)}\ \color{green}\underbrace{\color{black}\cos x}_{\color{green}u^\prime(x)}}\;dx=\color{red}\underbrace{\color{black}\sin^3x}_{\color{red}F\big(\color{orange}u(x)\color{red}\big)}$$
> Where,
> - The composed function is $\color{blue}3\color{orange}\sin\color{blue}^2\color{orange}x$
> - $\color{red}F(x)\color{black}=x^3$
> - $\color{blue}f(x)\color{black}=F^\prime(x)=3x^2$
> - $\color{orange}u(x)\color{black}=\sin x$

We use substitution to make this method technically easier:

##### Substitution