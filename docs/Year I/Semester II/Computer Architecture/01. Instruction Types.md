*Note: It seems like the sketches don’t adapt to dark mode in the exported version. If you want to see the epic sketches, get your sunglasses and SPF-100 and turn on light mode.*

## I-Type

![[Notes 2023-07-09 15.27.48.excalidraw|600]]
The offset value is a signed 16-bit number in 2’s compliment.
Examples of I-type:
- `lw`
- `sb`
- `beq`
- `andi`

## J-Type

![[Notes 2023-07-09 15.31.37.excalidraw|600]]
The only two J-type instructions are `j` and `jal`.
These commands work by extending the address by 2 bits (multiplying by four) and appending it to the most significant four bits of the PC (after incrementing), and then setting the PC to that address.

## R-Type

![[Notes 2023-07-09 15.32.17.excalidraw|600]]
The opcode for all R-type commands is 0.

`RS`, `RT`, `RD` stand for Registers Source, Target, and Destination. The order can be remembered with the mnemonic S.T.D., which stands for Sexually Transmitted Disease, or Simcha’s To Do (app), whichever suits your fancy. Yeah, that might’ve been gross and unnecessary, but trust me, now you’re definitely not going to forget the order any time soon. 🙃

`ShAmt` is short for Shift Amount. This value is only used for the shift commands: `sll`, `srl`, and `sra`.

The function field tells the ALU what operation to do. We need this, since the opcode is zero. More on this later.