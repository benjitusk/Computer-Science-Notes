---
title: "Instruction Types"
order: 1
---

## I-Type

<span class="drawing"><img class="drawing__light" src="/drawings/notes-2023-07-09-152748.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/notes-2023-07-09-152748.dark.svg" alt="" loading="lazy" decoding="async"></span>
The offset value is a signed 16-bit number in 2’s compliment.
Examples of I-type:
- `lw`
- `sb`
- `beq`
- `andi`

## J-Type

<span class="drawing"><img class="drawing__light" src="/drawings/notes-2023-07-09-153137.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/notes-2023-07-09-153137.dark.svg" alt="" loading="lazy" decoding="async"></span>
The only two J-type instructions are `j` and `jal`.
These commands work by extending the address by 2 bits (multiplying by four) and appending it to the most significant four bits of the PC (after incrementing), and then setting the PC to that address.

## R-Type

<span class="drawing"><img class="drawing__light" src="/drawings/notes-2023-07-09-153217.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/notes-2023-07-09-153217.dark.svg" alt="" loading="lazy" decoding="async"></span>
The opcode for all R-type commands is 0.

`RS`, `RT`, `RD` stand for Registers Source, Target, and Destination. The order can be remembered with the mnemonic S.T.D., which stands for Sexually Transmitted Disease, or Simcha’s To Do (app), whichever suits your fancy. Yeah, that might’ve been gross and unnecessary, but trust me, now you’re definitely not going to forget the order any time soon. 🙃

`ShAmt` is short for Shift Amount. This value is only used for the shift commands: `sll`, `srl`, and `sra`.

The function field tells the ALU what operation to do. We need this, since the opcode is zero. More on this later.
