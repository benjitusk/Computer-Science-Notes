---
title: "Continuous Distributions"
order: 11
---

# Uniform Distribution
##### Definition
$X\sim U(a,b)$ means that $X$ can take *any* value in the interval $(a,b)$, with probability equally dense everywhere in the interval density function.

For example, take the following density function: $f(x)=\begin{cases}0&b>x<a\\\frac1{b-a}&a<x<b\end{cases}$

<span class="drawing"><img class="drawing__light" src="/drawings/11-uniform-distribution-2023-09-14-141028.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/11-uniform-distribution-2023-09-14-141028.dark.svg" alt="" loading="lazy" decoding="async"></span>

The cumulative distribution function is: $F(x)=\begin{cases}0&x<a\\\int_a^x\frac1{b-a}dt=\frac{t}{b-a}\bigr|_a^x=\frac{x-a}{b-a}&a<x<b\\1&x>b\end{cases}$

$$
\begin{aligned}F(x)&=\begin{cases}0&x<a\\\frac{x-a}{b-a}&a<x<b\\1&x>b\end{cases}\\E[X]&=\frac{a+b}2\\V(X)&=\frac{(b-a)^2}{12}\\\sigma(X)&=\frac{b-a}{2\sqrt{3}}\end{aligned}
$$

# Exponential Distribution
$X\sim Exp(\lambda)$


$$
\begin{aligned}f(x)&=\cases{\lambda e^{-\lambda x} &{$x>0$}\\0&$x\le0$}\\F(x)&=\cases{1-e^{-\lambda x} &{$x>0$}\\0&$x\le0$}\\E[X]&=\frac1\lambda\\V(X)&=\frac1{\lambda^2}\end{aligned}
$$
