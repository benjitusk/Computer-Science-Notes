$\newcommand{\der}[1]{{#1}^\prime}$
### Fermat’s Theorem
**Claim:**
> If $f$ is a function that is differentiable at $x_0$, and $x_0$ is an extreme point on $f$, then $\der f(x_0)=0$.

**Proof:**
> *[W.L.O.G.](https://en.wikipedia.org/wiki/Without_loss_of_generality) maximum/minimum, assuming maximum.*
> In order for $f$ to be differentiable at $x_0$, $\der f_-(x_0)=\der f_+(x_0)$, and $\der f(x_0)$ must exist.
> $\der f_-(x_0)=\lim_{h\to0^-}{\frac{f(x_0+h)-f(x_0)}{h}}$. Since $f(x_0+h)-f(x_0)<0$, and $h<0$, 
> $\der f_-(x_0)$ is the limit of positive numbers, which we know is $\ge0$.
> $\der f_+(x_0)=\lim_{h\to0^+}{\frac{f(x_0+h)-f(x_0)}{h}}$. Since $f(x_0+h)-f(x_0)<0$, and $h>0$, 
> $\der f_-(x_0)$ is the limit of negative numbers, which we know is $\le0$.
> Since $\der f_-(x_0)=\der f_+(x_0)$, $\der f(x_0)$ *must* be zero.
$$Q.E.D.$$
### Rolle’s Theorem
**Claim:**
> If $f$ is a function that is continuous in $[a,b]$, and differentiable in $(a,b)$, and $f(a)=f(b)$, then $\exists c\in(a,b)$ such that $f^\prime(c)=0$.

**Proof:**
>There are two possibilities:
> 1. $f$ is constant in $(a,b)$. Therefore, $\der f(x)=0\mid\forall x\in(a,b)$.
> 2. $f$ is not constant in $(a,b)$. By the Weirstrass Theorem, we know that $\exists c\in(a,b)$ such that $c$ is an extreme point on $f$. By Fermat’s Theorem, $\der f(c)=0$.
>$$Q.E.D.$$

### Mean Value Theorem
**Claim:**
> If $f$ is a function that is continuous in $[a,b]$, and differentiable in $(a,b)$, then $\exists c\in(a,b)$ such that $f^\prime(c)=\frac{f(b)-f(a)}{b-a}$.

**Proof:**
> Let $g(x)=f(x)-\frac{(f(b)-f(a))\cdot(x-a)}{b-a}$. Note that $g(a)=f(a)$, and $g(b)=f(a)$. Furthermore, $g(x)$ has the same continuity and differentiability properties as $f(x)$, since $g^\prime(x)=f^\prime(x)-\frac{f(b)-f(a)}{b-a}$.
> Therefore, we can apply Rolle’s Theorem that $\exists c\in(a,b)\mid g^\prime(c)=0$.
> Thus, we can immediately conclude by the definition of $g^\prime$ that $f^\prime(c)=\frac{(f(b)-f(a))}{b-a}$.
> $$Q.E.D.$$
##### MVT Corollary I (Constant Corollary)
**Claim:**
> If the conditions for the MVT are met, and $f^\prime(x)=0\mid\forall x\in(a,b)$, then $f$ is constant in $(a,b)$.

**Proof:**
> Choose $x_1,x_2\in(a,b)$ so that $x_1<x_2$. By the MVT, $\exists c\in(x_1,x_2)$ such that $f^\prime(c)=\frac{f(x_2)-f(x_1)}{x_2-x_1}$.
> By the claim, $f^\prime(c)=\frac{f(x_2)-f(x_1)}{x_2-x_1}=0$. This can only happen if $f(x_2)-f(x_1)=0\mid\forall x_1,x_2\in(a,b)$.
> $$Q.E.D.$$
##### MVT Corollary II (Increasing Corollary)
**Claim:**
> If the conditions for the MVT are met, and $f^\prime(x)>0\mid\forall x\in(a,b)$, then $f$ is increasing in $(a,b)$.
> *This is easily modified for* $f$ decreasing *in $(a,b)$, and therefore omitted.*

**Proof:**
> Suppose that $f$ is **not increasing** in $(a,b)$. Choose $x_1,x_2\in(a,b)$ so that $x_1<x_2$. By the MVT, $\exists c\in(x_1,x_2)$ such that $f^\prime(c)=\frac{f(x_2)-f(x_1)}{x_2-x_1}$.
> Since $f$ is not increasing, and $x_1<x_2$, $f(x_2)-f(x_1)\le0$, and $x_2-x_1>0$. Therefore, $f^\prime(c)\le0$, which is a contradiction of the claim. By contradiction, $f$ must be increasing in $(a,b)$.
> $$Q.E.D.$$
##### MVT Corollary III (Other Constant Corollary)
**Claim:**
> If the conditions for the MVT are met for functions $f$ and $g$, and $f^\prime(x)=g^\prime(x)\mid\forall x\in(a,b)$, then $f$ and $g$ differ by a constant—that is, $f(x)=g(x)+C\mid\forall x\in(a,b),C\in\Bbb R$.

**Proof:**
> Define $h(x)=f(x)-g(x)$. Then, $h^\prime(x)=f^\prime(x)-g^\prime(x)=0$. By **Corollary I**, we know that if the derivative of a function is zero, that function is a constant. Therefore, $h(x)=f(x)-g(x)=C$, which is the same thing as saying $f(x)=g(x)+C\mid\forall x\in(a,b),C\in\Bbb R$
> $$Q.E.D.$$