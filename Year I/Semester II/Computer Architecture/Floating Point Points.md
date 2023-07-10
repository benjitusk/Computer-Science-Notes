*The powerpoint is quite disorganized, but here’s the condensed version:*

## IEEE Single Precision Floating Point Representation
Representing floating point numbers is a bit tricky in binary. We store them in something like scientific notation, where we have a sign, ‘base’, and and exponent. In regular numbers, that looks like this: $-6,267,000,000=-6.267\times10^9$. We have the same thing in binary. To store a number in 32 bits, we use the following layout:
![[Floating Point Stuff 2023-07-09 21.12.25.excalidraw|5000]]
(The mantissa means the ‘base’).

### Converting Decimal → Binary
Below follows a detailed example of how to do this, but here’s the TL;DR:

> To convert decimal numbers to binary IEEE FP Representation, convert the whole number portion and the fractional portion to binary, and mash them together. Then shift the ‘decimal point’ so it’s immediately to the right of the first `1`, and drop the leading one. That’s your mantissa. The amount of times you shifted left (negative, if you shifted right), **plus 127**, is your exponent, and the sign bit is 0 if positive, 1 if negative. For zero, set the exponent to 127, for infinity, set the exponent to 255.


#### Whole Numbers
1. Divide the decimal number by 2 and take note of the result and the remainder
2. Repeat step one with the result of the previous division, keeping track of the remainders, until the quotient becomes zero
3. Write down the remainders in reverse order. That number is the binary representation of the decimal number. Here’s an example:

> [!example] Converting $26_{\text{Dec}}\to Binary$
> 
> 1. Divide $26$ by $2$:
> 	- Quotient = $13$
> 	- Remainder = $0$
> 2. Divide $13$ by $2$:
> 	- Quotient = $6$
> 	- Remainder = $1$
> 3. Divide $6$ by $2$:
> 	- Quotient = $3$
> 	- Remainder = $0$
> 4. Divide $3$ by $2$:
> 	- Quotient = $1$
> 	- Remainder = $1$
> 5. Divide $1$ by $2$:
> 	- Quotient = $0$
> 	- Remainder = $1$
> Read the remainders from bottom to top.
> The binary representation of $27$ is $11010$.
> 

Just for fun, here’s some Python that does the same thing, sort of:
```python
def decimal_to_binary(decimal):
    if decimal == 0:
        return '0'  # Base case: If the decimal is 0, return '0'
    elif decimal == 1:
        return '1'  # Base case: If the decimal is 1, return '1'
    else:
        return decimal_to_binary(decimal // 2) + str(decimal % 2)
        # Recursive case: Divide the decimal by 2 and concatenate the binary representation
        # of the quotient with the remainder (converted to a string)
```

#### Non-Integers
Converting fractional numbers from decimal to binary involves a similar process.
1. Start with the fractional part of the decimal number you want to convert.
2. Multiply the fractional part by 2.
3. Take the integer part of the result as the first binary digit.
4. Repeat steps 2 and 3 with the decimal portion of the result obtained in step 3.
5. Continue this process until the fractional part becomes 0 or until you achieve the desired precision.
6. The result is all of the ‘integers’ you got, in top down order. Here’s an example:

> [!example] Converting $0.625_{\text{Dec}}\to Binary$
> 1. Multiply $0.625$ by $2$:
> 	- Result = $1.25$
> 1. Take the integer part ($1$) as the first binary digit.
> 2. Multiply the decimal portion ($0.25$) by $2$:
> 	- Result = $0.5$
> 3. Take the integer part (0) as the second binary digit.
> 4. Multiply the decimal portion ($0.5$) by $2$:
> 	- Result = $1.0$
> 5. Take the integer part ($1$) as the third binary digit.
> 
> Since the decimal portion becomes $0$ after step $7$, we stop the process.
> The binary representation of $0.625$ is $0.101$.

Note that the conversion may involve an infinite binary fraction for some decimal fractions, such as $\frac13$ ($0.\bar3$ in decimal), as they cannot be precisely represented in binary using a finite number of bits. In practice, the conversion is often rounded or limited to a certain number of binary digits based on the desired precision.

#### Converting Decimal → Binary Scientific Notation

> [!example] Converting $45.45_{\text{Dec}}\to Binary$
> 
> Convert left hand side of number to binary:
> $45 = 22 \times 2 + 1$
> $22 = 11 \times 2 + 0$
> $11 = 5 \times 2 + 1$
> $5 = 2 \times 2 + 1$
> $2 = 1 \times 2 + 0$
> $1 = 0 \times 2 + 1$
> 
> Reading from bottom to top, we get $101101$, which is $45$ in binary.
> 
> However, when we try to follow the steps for converting the fractional part, we run into an infinite loop: the last four digits repeat forever. Therefore, we represent the result as $01\overline{1100}$.

Great, we have our whole number portion: $101101$, and our fractional: $01\overline{1100}$.
The next step is to move the decimal place just after the first 1, noting how many times we move the decimal point to the left.
In our example, we need to move it +5 times to the left, (if you would’ve needed to move it to the right 5 times, it counts as -5) we get an exponent of 5 — that is, $2^5$, and a mantissa of $1.0110101\overline{1100}$.
Since the number is positive, our sign bit is 0. We drop the leading one of the mantissa, and let it repeat until it fills up all 23 bits of the mantissa, and that leaves $01101011100110011001100$ as the final mantissa.

In order to store super tiny numbers, ~~we allow for negative exponents~~ we do this stupid thing where we ‘bias’ the exponent with -127. That means, whatever binary number is in the exponent portion will be stored as 127 more than the value it represents. In our case, we want the exponent to be 5, so to ‘counter the bias’, we add 127 to our exponent, giving us 132, which is 10000100.

Putting it all together gives us: 01000010001101011100110011001100. Putting it in the above diagram:
![[Floating Point Stuff 2023-07-09 21.21.32.excalidraw|5000]]

> [!attention] Representing Zero and Infinity
> To represent zero, use exponent $127$.
> To represent infinity, use exponent $255$.
> 
> In both cases, the mantissa does not matter.
