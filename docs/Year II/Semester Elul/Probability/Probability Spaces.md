### Axioms of Probability Spaces
**Definition:** A <u>probability space</u> is a sample space $(\Omega)$ together with a probability function that satisfies 2 axioms:
1) $P(\Omega)=1$
2) If $A$ and $B$ are disjoint events (no overlap), then $P(A\cup B)=P(A)+P(B)$
> [!example] Example 1
>  $A=$ The high temp for today $\in [28^\circ, 33^\circ)$
>  $B=$ The high temp for today $\in [33^\circ, 38^\circ]$
>  
>  $A,B$ are *disjoint*, because there is no outcome that can be in both sets.
>  Suppose $P(A)=0.7$,  $P(B)=0.15$.
>  Then, $P(A\cup B)=0.7 + 0.15=0.85$

> [!example] Example 2
> $A=$ Pass the math exam
> $B=$ Pass the computers exam
> 
> $A,B$ are *not disjoint*, because an outcome can be in both $A$ and $B$. (Passing both exams)
> $P(A\cup B)$ is **not** $P(A)+P(B)$.

> [!example] Example 3
> A 6-sided die is rolled.
> $A=$ roll ≥ 2
> $B=$ roll ≥ 4
> 
> $A\subseteq B$ because every outcome in $B$ is also in $A$.

### Properties of a Probability Space
1) $P(\overline{A})$