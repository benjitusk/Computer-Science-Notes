---
title: "Memory"
order: 8
---

There are three important control lines for memory chips:
- CS — Chip Select (or chip enable)
- OE — Output Enable (or read enable)
- WE — Write Enable

These are important parameters for all memory systems:
- Capacity — How much data can be stored by the system
- Access Time — This is defined differently for different systems
	- Random Access
		- <span class="drawing"><img class="drawing__light" src="/drawings/8-memory-2023-07-11-170144.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/8-memory-2023-07-11-170144.dark.svg" alt="" loading="lazy" decoding="async"></span>
		- Defined as the time elapsed from when the MAR gives the address to Memory until the data is ready in the MIR
	- Sequential Access (not relevant i think)
		- Defined as the time elapsed from when the data 
- Data Rate — how many bits per second can be read. usually for sequential access
- Cycle Time — Minimum amount of time the processor must wait between the starts of two consecutive memory accesses. This is not the same as access time.
	- Cycle Time = Access Time + Recovery Time + Transient Time
		- Recovery Time: Time needed for the data to be electrically stable
		- Transient Time: Time needed to ‘recharge’ the voltage in the transistors that store data

## SRAM
The size of an SRAM with $m$ address lines (as in, the address is $m$ bits long) and $n$ data lines (as in, each ‘word’ is $n$ bits) is $2^m\times n$ bits. For example, if an SRAM has 11 address lines (thus, a capacity of $2^{11}=2048$ bits) and an $8$ bit word, the capacity is $16,384$ bits, or 2 KiB.

An SRAM Chip looks like this:
<span class="drawing"><img class="drawing__light" src="/drawings/8-memory-2023-07-11-175627.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/8-memory-2023-07-11-175627.dark.svg" alt="" loading="lazy" decoding="async"></span>
CE, WE, and RE are all active low, which means in order to activate that line, you must set the bit to 0.

CE|WE|RE|Chip Mode
-|-|-|-
1|X|X|No Access
0|0|1|Read Mode
0|1|0|Write Mode

### 1D Layout of SRAM
1D Layout of SRAM looks like this:
<span class="drawing"><img class="drawing__light" src="/drawings/8-memory-2023-07-11-183138.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/8-memory-2023-07-11-183138.dark.svg" alt="" loading="lazy" decoding="async"></span>
Each output line is connected to the output of an AND gate of the entry in memory with the decoder output.
<span class="drawing"><img class="drawing__light" src="/drawings/8-memory-2023-07-11-184544.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/8-memory-2023-07-11-184544.dark.svg" alt="" loading="lazy" decoding="async"></span>
The output of all these AND gates get OR-ed together and results in the memory value at the requested address.

### 2D SRAM Layout
This layout works by splitting the data across multiple memory segments, and using a MUX to choose which segment output to pass on:
<span class="drawing"><img class="drawing__light" src="/drawings/8-memory-2023-07-11-185258.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/8-memory-2023-07-11-185258.dark.svg" alt="" loading="lazy" decoding="async"></span>

# INCOMPLETE.
The slides *suck*. There’s just too much fluff to actually figure out what we need to know, and what’s important. I’m coming back to this, but if you have notes on this section, *please PM me* on WhatsApp. Thanks! 😉
