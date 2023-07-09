![[Pasted image 20230709184544.png]]

There are 5 stages to a Single Cycle chip:
1. Fetch
2. Decode
3. Execute
4. Memory access
5. Register write

### Fetch Stage
This stage is identical for every type of command.
The command is loaded from “Code Memory” at the address stored in the PC. The PC is then incremented by 4.

### Decode
This stage is identical for every type of command.
We look at the command and figure out what needs to happen:
First, the opcode is read to determine the instruction type and field lengths
Then, the necessary data is read from the relevant registers.

For a Branch command, the `offset` value is sign extended from 16 bits to 32 bits.

### Execute
The ALU is used to compute the requested calculation. Even in commands like `lw`, we still need to compute the offset. Yes, even if the offset is zero.

For an R-Type command, the ALU looks at the ALU-Control line to determine what to do. The ALU-Control line is determined by the opcode and function value.

For a Branch command, the the ALU is told to subtract RT from RS. If the result is zero, the zero flag from the ALU is set to 1, otherwise, 0.

### Memory Access
Only load and store commands really do anything during this stage. The computed address from the ALU is used to access memory, and data is either written to memory from a register, read from memory, depending on read or write.

For an R-Type command, the output of the memory is transferred to the Registry File.

For a Branch command, the sign extended `offset` is multiplied by 4 with a dedicated shift-left-two unit, and the result of that is passed into a dedicated add unit which performs: `(PC+4)+(shifted_offset)`. This result is the branch destination.

### Register Write
The results of the instruction are stored in a register. Store, Jump, and Branch commands don’t write to registers, because they don’t have anything to write.

For a Branch Command, if the zero flag from the ALU is 1, the address calculated in stage 4 is written to the PC. If the flag is 0, `PC+4` is written to the PC instead.