#### Definition
<u>Conditional Probability</u> is the probability of A *if* B occurs. Denoted by $P(A|B)$.

> [!example] A Die Is Rolled
> Let A be the event of rolling greater than a three.
> Let B be the event of rolling an even number.
> $\Omega=\{1,2,3,4,5,6\}$
> We are told that B happens. *Now* what is the probability of A?
> ---
> $\Omega_{\text{new}}=\{2,4,6\}$
> Given our $\Omega_{\text{new}}$, $A_{\text{new}}=\{4,6\}$
> 
> $$\frac{|A_{\text{new}}|}{|\Omega_{\text{new}}|}=\frac23$$

#### The Formula
$$P(A|B)=\frac{P(A\cap B)}{P(B)}$$

> [!example]  Reuven Has 2 Children
> Let A be the event that Reuven has exactly 2 boys.
> Let B be the event that Reuven has *at least* one boy.
> Given that Reuven has at least one boy, what is the probability of Reuven having 2 boys?
> ---
> Applying The Formula, 