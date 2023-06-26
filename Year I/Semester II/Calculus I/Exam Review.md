Below are the types of questions asked on exams. **This is not a comprehensive list!**
> [!attention] Exam Questions
> - [x] What is the domain of…
> - [x] Find all asymptotes of…
> - [x] Compute the integral of…
> - [x] Where is $f$ differentiable, cts, etc
> - [x] What value for a piecewise function makes it cts
> - [ ] Verbatim memorization of theorems (I know, crazy.)
> - [ ] Proofs of theorems and corollaries
> - [ ] Find the bounded area
> - [ ] Limit calculation
> - [ ] Finding limits by definition of limit
> - [ ] Finding tangent line to a point on a function
> - [ ] Find regions of ascent and descent
> - [ ] Name the type of discontinuity at a point
> - [ ] Sketch the function
> - [ ] Computing single sided limits
> - [ ] Find where a function is convex/concave
> - [ ] Find local extreme points

#### Finding the domain of a function
The domain of a function is the set of values for which the function is defined.
At any point where a component of the function is undefined, the entire function is undefined as well.
- **Polynomials** are defined everywhere
- **Rationals** are defined where the denominator is not zero
- **Exponents** are defined everywhere except where the exponent in simplified form has an even denominator
- The **Logarithm** function is defined for $x>0$

#### Identifying Asymptotes of a Function
##### Shortcut for Simple Rational Functions
###### Horizontal Asymptotes
- If the numerator and denominator have an equal degree
	- The equation for the asymptote is $\frac{\text{leading coefficient of the numerator}}{\text{leading coefficient of the denominator}}$
- If the degree of the numerator is *less* than the denominator
	- The asymptote is $y=0$
- If the degree of the numerator is *greater* than the denominator
	- There is no horizontal asymptote
###### Diagonal (Slant) Asymptotes
A rational function has a slant asymptote only if the degree of the numerator is exactly one more than that of the denominator. The equation is obtained by dividing the numerator by the denominator and discarding the remainder.
###### Vertical Asymptotes
Vertical asymptotes occur where factors in the denominator *that are not canceled out by the numerator* equal zero. You can identify these asymptotes by factoring the numerator and denominator. Any matching terms in the top and bottom are removable discontinuities. Any unmatched term in the denominator will cause a vertical asymptote when that term is equal to zero. The equation for that asymptote is: $x=\text{the value that makes the term zero}$.

##### Identifying Asymptotes of Any Function:
When dealing with a non rational function, you can identify the asymptotes by evaluating limits at key values:
##### Horizontal Asymptotes
If $\lim_{x\to\infty}{f(x)}=L$ or $\lim_{x\to-\infty}{f(x)}=L$, we say that $L$ is a horizontal asymptote of $f$.
Basically, evaluate the limit of the function as it approaches either + or - ∞. If it is a finite number, that’s your horizontal asymptote.
##### Diagonal Asymptotes
If you have a horizontal asymptote from the right, you don’t need to check as $x\to\infty$.
If you have a horizontal asymptote from the left, you don’t need to check as $x\to-\infty$.
If you have both, there is no diagonal asymptote.
To check if a diagonal asymptote exists, and if so, find it, for a given function $f$:
*WLOG $\pm\infty$*
1. Let $a=\lim_{x\to\infty}{\frac{f(x)}x}$. If this does not equate to a finite number, there is no diagonal asymptote as $x\to\infty$
2. Let $b=\lim_{x\to\infty}{f(x)-ax}$. If this does not equate to a finite number, there is no diagonal asymptote as $x\to\infty$.
3. Check from the other side, if needed.

The equation for the asymptote is: $y=ax+b$.
##### Vertical Asymptotes
If $\lim_{x\to c}{f(x)}=\pm\infty$, we say the function has a vertical asymptote at $c$.
A good method for identifying candidates for vertical asymptotes is to find values that are at the edge of the domain for a function. Also, any terms in *any* denominator that can go to zero for a particular value of $x$ must be checked.

#### Computing the Integral
There’s not really a straightforward how-to for this, make sure you’re familiar with [[Indefinite Integrals]] and [[Definite Integrals]].
#### Finding Where $f$ Is Continuous
$f(x)\text{ is continuous at }x=a\text{ if }f(a)=\lim_{x\to a}{f(x)}$.
##### 3 Types of Discontinuities:
1) $\lim_{x\to a}{f(x)}$ exists, but $\not=f(a)$. Either $f(a)$ is undefined, or some other number.
	- This is called a removable discontinuity, because it's an issue at just that point.
2) $\lim_{x\to a}{f(x)}$ doesn't exist because $\lim_{x\to a^-}{f(x)} \not=\lim_{x\to a^+}{f(x)}$
	- This is called a jump discontinuity, or a Type I discontinuity.
3) $\lim_{x\to a}{f(x)}$ doesn't exist, even one-sided (from at least one side).
	- This is called a Type II discontinuity.
	- This does not include extended limits, so by this definition, $\lim_{x\to0}{\frac1x}$ doesn't have a limit, meaning it's discontinuous at $x=0$ with a Type II discontinuity.
	- Usually in this case, $f$ has a vertical asymptote $x=a$, but not always.
##### Finding Discontinuities:
See [[Continuity#Finding discontinuous points]] for more details
- **Rational Polynomials** *can* be, but are not definitely, discontinuous where the denominator equals zero
- **Piecewise functions** can be discontinuous between the definitions
- **Exponential** functions can be discontinuous when the denominator of the exponent contains x.
##### Finding a value $A$ to make $f$ continuous at $x_0$
This is a relatively easy question to solve. You take the limit of $f$ from both sides as $x\to x_0$. If the two limits are finite and equal, that number is your $A$. If they don’t equal or are not finite, there is no $A$.


#### Finding where $f$ is differentiable
1) $f(x)$ is <u>differentiable</u> at the point $x=x_0$ if the limit $\lim_{h\to 0}{\frac{f(x_0+h)-f(x_0)}{h}}$ exists.
2) $f(x)$ is <u>differentiable</u> from the left   if $\lim_{h\to 0^-}{\frac{f(x_0+h)-f(x_0)}{h}}$ exists.
3) $f(x)$ is <u>differentiable</u> from the right if $\lim_{h\to 0^+}{\frac{f(h_0+h)-f(x_0)}{h}}$ exists.
	- $f$ is differentiable at $x_0$ $\iff$ $f$ is differentiable from left and from right at $x_0$ **and** these limits are equal
	
	* Example: Graph $y=|x|$. Is x differentiable at $x=0$?
	  From the left: $\lim_{h\to 0^-}{\frac{f(h)-f(0)}{h}}$ = $\lim_{h\to 0}{\frac{-h}{h}}=-1$. Note, $h<0$, so $|h|=-h$
	  From the right: $\lim_{h\to 0^+}{\frac{f(h)-f(0)}{h}}=1$
	  Hence, $f(x)=|x|$ is differentiable from each side at $x_0=0$, but is not differentiable there.
4) $f$ is differentiable in open interval $(a,b)$ if f is differentiable at each pt. in that interval

#### Limit Calculation