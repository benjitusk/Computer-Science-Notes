### Linearity of Limits of a Sequence
> [!info] If $a_n$ and $b_n$ are infinite sequences, and $\lim_{n\to \infty}{a_n}=A$ and $\lim_{n\to \infty}{b_n}=B$, then $\lim_{n\to \infty}{(a_n+b_n)}=A+B$
>
> By laws of limits, $\forall\varepsilon>0,\;\exists N_a,N_b$ such that $\forall n> \text{max}(N_a,N_b)$, we have:
> $|a_n-A|<\varepsilon/2$ and $|b_n-B|<\varepsilon/2$.
> By the [Triangle inequality](https://en.wikipedia.org/wiki/Triangle_inequality) we have:
> $|a_n+b_n-(A+B)|\le|a_n-A|+|b_n-B|<\varepsilon$
> Therefore, $\lim_{n\to \infty}{(a_n+b_n)}=A+B$.
>
> $$Q.E.D.$$

### Product of Vanishing and Bounded Sequences
> [!info] If $a_n$ is a vanishing sequence, and $b_n$ is a bounded sequence, then $\lim_{n\to \infty}{(a_nb_n)}=0$
>
> Let $\varepsilon>0$. We seek $N$ such that if $n>N$, $|a_nb_n-0|<\varepsilon$.
> Because $b_n$ is bounded, there exists $M>0$ such that $|b_n|<M\mid\forall n\in\N$
> Thus, we have $0\le|a_nb_n|\le M|a_n|$.
> $\lim_{n\to\infty}{a_n}=0$, so $\exists N$ such that for $n>N, |a_n-0|<\frac\varepsilon M$
> $|a_nb_n|<|a_n|\cdot|b_n|<\frac\varepsilon M<\varepsilon$
> So, $|a_nb_n|<\varepsilon$.
>
> $$Q.E.D.$$

### Sum of Derivatives
> [!info] The derivative of sums is the sum of the derivatives: ${(f+g)}^\prime (x)=f^\prime (x)+g^\prime (x)$
>
> $$\begin{align}   {(f+g)}^\prime (x)&=\lim_{h\to0}{\frac{(f+g)(x+h)-(f+g)(x)}h}\\  &=\lim_{h\to0}{\frac{[f(x+h)+g(x+h)]-[f(x)+g(x)]}h}\\  &=\lim_{h\to0}{\frac{f(x+h)-f(x)+g(x+h)-g(x)}h}\\  &=\lim_{h\to0}{\frac{f(x+h)-f(x)}{h}}+\lim_{h\to0}{\frac{g(x+h)-g(x)}h}\\  &=f^\prime (x)+g^\prime (x)\\  \end{align}$$
>
> $$Q.E.D$$

### Product of Derivatives
> [!info] It's the product rule! ${(f\cdot g)}^\prime (x)=(fg^\prime )(x)+(f^\prime g)(x)$
>
> $$\begin{align}   {(fg)}^\prime (x)&=\lim_{h\to0}{\frac{(f\cdot g)(x+h)-(f\cdot g)(x)}h}\\  &=\lim_{h\to0}{\frac{[f(x+h)\cdot g(x+h)]-[f(x)\cdot g(x)]}h}\\ &=\lim_{h\to0}{\frac{[f(x+h)\cdot g(x+h)]-f(x+h)\cdot g(x)+f(x+h)\cdot g(x) -[f(x)\cdot g(x)]}h}\\   &=\lim_{h\to0}{\frac{f(x+h)\cdot g(x+h)-f(x+h)\cdot g(x)}h}+\lim_{h\to0}{\frac{f(x+h)\cdot g(x) -f(x)\cdot g(x)}h}\\  &=\lim_{h\to0}{f(x+h)\cdot\frac{g(x+h)-g(x)}{h}}+\lim_{h\to0}{g(x)\cdot\frac{g(x+h)-g(x)}h}\\ &=f(x)g^\prime (x)+f^\prime (x)g(x)\\  &=(fg^\prime )(x)+(f^\prime g)(x) \end{align}$$
>
> $$Q.E.D.$$
### Fermat’s Theorem

> [!info] If $f$ is a function that is differentiable at $x_0$, and $x_0$ is an extreme point on $f$, then $f^\prime (x_0)=0$.
>
> *[W.L.O.G.](https://en.wikipedia.org/wiki/Without_loss_of_generality) maximum/minimum, assuming maximum.*
> In order for $f$ to be differentiable at $x_0$, $f^\prime _-(x_0)=f^\prime _+(x_0)$, and $f^\prime (x_0)$ must exist.
> $f^\prime _-(x_0)=\lim_{h\to0^-}{\frac{f(x_0+h)-f(x_0)}{h}}$. Since $f(x_0+h)-f(x_0)<0$, and $h<0$,
> $f^\prime _-(x_0)$ is the limit of positive numbers, which we know is $\ge0$.
> $f^\prime _+(x_0)=\lim_{h\to0^+}{\frac{f(x_0+h)-f(x_0)}{h}}$. Since $f(x_0+h)-f(x_0)<0$, and $h>0$,
> $f^\prime _-(x_0)$ is the limit of negative numbers, which we know is $\le0$.
> Since $f^\prime _-(x_0)=f^\prime _+(x_0)$, $f^\prime (x_0)$ *must* be zero.
> $$Q.E.D.$$
### Rolle’s Theorem
> [!info] If $f$ is a function that is continuous in $[a,b]$, and differentiable in $(a,b)$, and $f(a)=f(b)$, then $\exists c\in(a,b)$ such that $f^\prime(c)=0$.
>
>There are two possibilities:
> 1. $f$ is constant in $(a,b)$. Therefore, $f^\prime (x)=0\mid\forall x\in(a,b)$.
> 2. $f$ is not constant in $(a,b)$. By the Weirstrass Theorem, we know that $\exists c\in(a,b)$ such that $c$ is an extreme point on $f$. By Fermat’s Theorem, $f^\prime (c)=0$.
>
> $$Q.E.D.$$

### Mean Value Theorem (AKA Lagrange’s Theorem)
> [!info] If $f$ is a function that is continuous in $[a,b]$, and differentiable in $(a,b)$, then $\exists c\in(a,b)$ such that $f^\prime(c)=\frac{f(b)-f(a)}{b-a}$.
>
> Let $g(x)=f(x)-\frac{(f(b)-f(a))\cdot(x-a)}{b-a}$. Note that $g(a)=g(b)=f(a)$. Furthermore, $g(x)$ has the same continuity and differentiability properties as $f(x)$, since $g^\prime(x)=f^\prime(x)-\frac{f(b)-f(a)}{b-a}$.
> Therefore, we can apply Rolle’s Theorem that $\exists c\in(a,b)\mid g^\prime(c)=0$.
> Thus, we can immediately conclude by the definition of $g^\prime$ that $f^\prime(c)=\frac{f(b)-f(a)}{b-a}$.
>
> $$Q.E.D.$$
##### MVT Corollary I (Constant Corollary)
> [!info] If the conditions for the MVT are met, and $f^\prime(x)=0\mid\forall x\in(a,b)$, then $f$ is constant in $(a,b)$.
>
> Choose $x_1,x_2\in(a,b)$ so that $x_1<x_2$. By the MVT, $\exists c\in(x_1,x_2)$ such that $f^\prime(c)=\frac{f(x_2)-f(x_1)}{x_2-x_1}$.
> By the claim, $f^\prime(c)=\frac{f(x_2)-f(x_1)}{x_2-x_1}=0$. This can only happen if $f(x_2)-f(x_1)=0\mid\forall x_1,x_2\in(a,b)$.
>
> $$Q.E.D.$$
##### MVT Corollary II (Increasing Corollary)
> [!info] If the conditions for the MVT are met, and $f^\prime(x)>0\mid\forall x\in(a,b)$, then $f$ is increasing in $(a,b)$.
> *This is easily modified for* $f$ decreasing *in $(a,b)$, and therefore omitted.*
>
> Suppose that $f$ is **not increasing** in $(a,b)$. Choose $x_1,x_2\in(a,b)$ so that $x_1<x_2$. By the MVT, $\exists c\in(x_1,x_2)$ such that $f^\prime(c)=\frac{f(x_2)-f(x_1)}{x_2-x_1}$.
> Since $f$ is not increasing, and $x_1<x_2$, $f(x_2)-f(x_1)\le0$, and $x_2-x_1>0$. Therefore, $f^\prime(c)\le0$, which is a contradiction of the claim. By contradiction, $f$ must be increasing in $(a,b)$.
>
> $$Q.E.D.$$
##### MVT Corollary III (Other Constant Corollary)
> [!info] If the conditions for the MVT are met for functions $f$ and $g$, and $f^\prime(x)=g^\prime(x)\mid\forall x\in(a,b)$, then $f$ and $g$ differ by a constant—that is, $f(x)=g(x)+C\mid\forall x\in(a,b),C\in\R$.
>
> Define $h(x)=f(x)-g(x)$. Then, $h^\prime(x)=f^\prime(x)-g^\prime(x)=0$. By **Corollary I**, we know that if the derivative of a function is zero, that function is a constant. Therefore, $h(x)=f(x)-g(x)=C$, which is the same thing as saying $f(x)=g(x)+C\mid\forall x\in(a,b),C\in\R$
>
> $$Q.E.D.$$

### Fundamental Theorem of Calculus
> [!info] If $f$ is continuous on $[a,b]$, and $F(x)=\int_a^xf(t)dt$ for $a\le x\le b$, then $F$ is continuous on $[a,b]$ and differentiable on $(a,b)$, and $f^\prime (x)=f(x)$.
>
> $$\begin{align} f^\prime (x)&=\lim_{h\to0}{\frac{F(x+h)-F(x)}h}\\  &=\lim_{h\to0}{\frac1h\left[\int_a^{a+h}f(t)dt-\int_a^xf(t)dt\right]}\\ &=\lim_{h\to0}{\frac1{(x+h)-x}\int_x^{x+h}f(t)dt}\\  \text{Via MVT for Integrals: }&=f(c)\mid c\in(x,x+h)  \end{align}$$
>
> Since $x\le c\le x+h$, and $h\to0$, $c=x$.
> Therefore, $f^\prime (x)=f(x)$.
>
> $$Q.E.D.$$