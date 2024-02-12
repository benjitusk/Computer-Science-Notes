> [!tip] Super Important Introduction
> In the tapestry of algorithms, two names resound,
> Benji Tusk and Eyal Schachter, profound,
> Their minds, a symphony of intellect's grace,
> Embark on a journey, a recursive embrace.
> 
> With pens poised and hearts alight,
> They venture into complexity's sight,
> In the realm where algorithms dance and weave,
> They seek the rhythm their minds perceive.
> 
> Recursive melodies, they aim to divine,
> In the labyrinth of time, where patterns entwine,
> Benji's insight, a beacon so bright,
> Eyal's logic, a guiding light.
> 
> Together they traverse the recursive maze,
> In pursuit of truths, in myriad ways,
> Analyzing runtimes, each algorithm's flight,
> In the waltz of complexities, they find delight.
> 
> From towering structures to intricacies small,
> They unravel the mysteries, they heed the call,
> In the tapestry of data, where brilliance gleams,
> Benji Tusk and Eyal Schachter, dreamers of dreams.
> 
> ---
> Eyal Schachter (209792266) and Benji Tusk (650282680)

## Question One

#### Part A
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

$$
T(n)=T\left(\frac n 3\right) + 2\log n
$$
We *cannot* use the Master Method, so we use iteration:

$$\begin{align}
T(n)&=T\left(\frac n 3\right) + 2\log n\\

&=T\left(\frac{n}{3^2}\right) + 2\log\frac n3 + 2 \log n\\

\dots&=T\left(\frac{n}{3^i}\right) + \sum_{j=0}^{i-1}{2\log\frac{n}{3^j}}\\

&=T\left(\frac{n}{3^i}\right) + 2\left[\sum_{j=0}^{i-1}{\left(\log n - \log{3^j}\right)}\right]\\

&=T\left(\frac{n}{3^i}\right) + 2\left[\sum_{j=0}^{i-1}{\log n - \sum_{j=0}^{i-1}\log{3^j}}\right]\\

&=T\left(\frac{n}{3^i}\right) + 2\left[i\log n - \sum_{j=0}^{i-1}\log{3^j}\right]\\

&=T\left(\frac{n}{3^i}\right) + 2i\log n - 2\sum_{j=0}^{i-1}\log{3^j}\\

&=T\left(\frac{n}{3^i}\right) + 2i\log n - 2\sum_{j=0}^{i-1}j\log{(3)}\\

&=T\left(\frac{n}{3^i}\right) + 2i\log n - 2\log{(3)}\sum_{j=0}^{i-1}j\\

&=T\left(\frac{n}{3^i}\right) + 2i\log n - 2\log{(3)}\frac{i^2-i}{2}\\

&=T\left(\frac{n}{3^i}\right) + 2i\log n - \log{(3)}\cdot(i^2-i)\\\\
&\text{Bottom Row is where }i=\log_3(n)\\\\
    T(n) &= T(1) + 2 \cdot \log_3 n \cdot \log_2 n - \log_2 3 (\log_3^2 n - \log_3 n) \\
    &\leq 2 \cdot \log_3 n \cdot \log_2 n - \log_2 3 \cdot \log_3^2 n + \log_2 3 \cdot \log_3 n \\
    &= 2 \cdot \log_3 n \cdot \frac{\log_3 n}{\log_3 2} - \frac{1}{\log_3 2} \cdot \log_3^2 n + \frac{1}{\log_3 2} \cdot \log_3 n \\
    &= \frac{2}{\log_3 2} \cdot \log_3^2 n  - \frac{1}{\log_3 2} \cdot \log_3^2 n + \frac{1}{\log_3 2} \cdot \log_3 n \\
    &= \frac{1}{\log_3 2} \cdot \log_3^2 n + \frac{1}{\log_3 2} \cdot \log_3 n \\
    &\leq \frac{1}{\log_3 2} \cdot \log_3^2 n \\
    &= \log 3 \cdot \left(\frac{\log n}{\log 3}\right)^2 \\
    &= \frac{1}{\log 3} \cdot \log^2 n \\
    &\leq c \log^2 n \quad \text{for } c \geq \log_3^{-1} 3\\\\
    \therefore T(n)&=O(\log^2(n))
\end{align}$$

**Since I cannot be bothered to transcribe the math, you’re just gonna have to deal with the pictures. Hope the poem at the top makes up for this 🙃**
#### Part C
![[PHOTO-2024-02-03-23-39-57.jpg]]
#### Part D
![[PHOTO-2024-02-04-00-28-28.jpg]]
#### Part E
![[PHOTO-2024-02-04-00-37-11.jpg]]
#### Part F
![[PHOTO-2024-02-04-00-43-39.jpg]]
#### Part G
![[PHOTO-2024-02-04-01-01-34.jpg]]
#### Part H
![[PHOTO-2024-02-04-14-23-20.jpg]]
#### Part I
![[PHOTO-2024-02-07-00-16-14.jpg]]
#### Part J
![[PHOTO-2024-02-07-00-39-24.jpg]]

## Question 2
$$\begin{align*}
    T(n) &= 2T\left(\left\lfloor\frac{n}{2}\right\rfloor\right) + 1 \\
    a &= 2, \quad b = 2, \quad f(n) = 1 \\
    n^{\log_b a} &= n^1 \\
    1 &= O(n^{1-\epsilon}) \quad \text{for } 0 < \epsilon < 1 \\
    &\quad (\text{case 1}) \\
    T(n) &= \Theta(n)
\end{align*}
$$
## Question 3
$$
\begin{align}
    T(n) &= T(n-1) + \Theta(n) \\
    &= T(n-1) + dn \\
    &= [T(n-2) + d(n-1)] + dn \\
    &= T(n-2) + d(n + (n-1)) \\
    &= T(n-3) + d(n + (n-1) + (n-2)) \\
    &= \dots \\
    &= T(n-i) + d \sum_{j=0}^{i-1} (n - j) \\
    &= \dots \\
    &= T(1) + d \sum_{j=0}^{n-1} (n - j) \\
    &= 1 + d(1 + 2 + \dots + n) \\
    &= 1 + d\left(\frac{n(n+1)}{2}\right) \\
    &= 1 + \frac{d}{2}(n^2 + n) \\
    &\leq cn^2 \quad \text{for } c \geq \frac{d}{2}
    \\\\
    \therefore T(n)&=\Theta(n^2)
\end{align}
$$
## Question 4

The general form of the recurrence is $T(n) = T(n-k) + sort(k) + n$ where $k$ is the number of elements to the left of the partition, and $sort(k)$ the time taken by the sorting algorithm.

We will calculate worst-case scenario, where there is no early exit (eg $i=n$).

We will examine a few cases:

#### Case 1
$k=1$, $sort(k) = k^2$ (bubble sort)
The recurrence is $T(n) = T(n-1) + 1^2 +n = T(n-1) + \theta(n)$ 
Using iteration, the general form is $T(n) = T(n-i) + \sum_{j=0}^{i-1}\theta(n-j)$ 
We can continue until $i=n-1$ (note $i$ here has no relation to $i$ from the question). $T(n) = T(1) +\sum_{j=0}^{n-2}\theta(n-j) = d_1 +\sum_{j=0}^{n-2}d_2(n-j) = d_1 +d_2\sum_{j=2}^{n}(j) \le d_2n^2$
So $T(n) = O(n^2)$

#### Case 2
$k=\frac n2,$ sort$(k)=k\log k=\frac n2\log (\frac n2)$ (merge sort)
The recurrence is $T\left(n\right)=T\left(\frac n2\right) + \frac n2\log\left(\frac n2\right) + n$
Which simplifies to $T(\frac n2) + \frac n2(\log n + 1)$.
We use the master method, where $a=1,b=2,f(n)=\frac n2(\log n + 1)$.
$n^{\log_ba}=n^0=1$
$f(n)=\Omega(n^\epsilon) \mid 0<\epsilon≤1$ (Case III of Master Method)
We now check for regularity:
$1\cdot f(\frac n2) ≤ c\cdot f(n)$
$\frac n4(\log (\frac n2)+1) = \frac n4(\log n \cancel{-1+1}) ≤ c\frac n2(\log n + 1)$
For $\frac 12 ≤ c < 1$.

So, $T(n)=O(\frac n2(\log n + 1))=O(n\log n)$

#### Case 3
$k=\frac n2,$ sort$(k)=k^2={\left(\frac n2\right)}^2$ (bubble sort)
The recurrence is $T\left(n\right)=T\left(\frac n2\right) + {\left(\frac n2\right)}^2 + n$
Which simplifies to $T(\frac n2) + \frac{n^2+4n}4$.
We use the master method, where $a=1,b=2,f(n)=\frac{n^2+4n}4$.
$n^{\log_ba}=n^0=1$
$f(n)=\Omega(n^\epsilon) \mid 0<\epsilon≤2$ (Case III of Master Method)
We now check for regularity:
$1\cdot f(\frac n2) ≤ c\cdot f(n)$
$\frac{n^2+8n}{16} ≤ c\frac{n^2+4n}4$
For $\frac 12 ≤ c < 1$.

So, $T(n)=O(\frac{n^2+4n}4)=O(n^2)$
#### Case 4
$k=n-1$, sort$(k)=k\log k$
Since this is pretty much our ‘early exit’ case, the computation is immediate:
$T(n)=T(n-k)+sort(k)+n=T(1)+(n-1)\log(n-1)+n=O(n\log n)$

