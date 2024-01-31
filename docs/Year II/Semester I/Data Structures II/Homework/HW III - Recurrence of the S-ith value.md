## Question One

### Part A
$$
\begin{align}
	T(n)&=2T\left(\frac n2\right)+n^3\\
	a=2\\b=2\\f(n)=n^3\\
	n^{\log_ba}&=n^{\log_22}=n^1=n\\
	f(n)&=\Omega(n^{1+\epsilon})\qquad\text{(Case III)}\\
	\text{for any }0<&\epsilon<2\\
	\\
	a\cdot f\left(\frac nb\right)&=2\left({\frac n2}\right)^3\\
	&=2\frac{n^3}{2^3}\\
	&=\frac{n^3}{2^2}=\frac{n^3}{4}\\
	\text{We can can take any }&\text{$c$ between $\frac14$ and 1}\\
	\therefore T(n)&=\Theta(n^3)
\end{align}
$$

### Part B
