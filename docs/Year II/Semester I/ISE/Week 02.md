### Extreme Programming
- A type of **agile software development**
- Values responsiveness to changing customer requirements
- Values frequent releases in short development cycles
- Rapid testing cycles (unit tests happen very frequently)
#### Pair Programming
- Two programmers are working together at one station
- The **driver** writes the code
- The **navigator** reviews each line of code as it’s being written
- They switch roles frequently
> [!tip] In Pair Programming, each member is at the keyboard about half the time
##### Advantages of Pair Programming
- Many mistakes caught immediately
- Improved code style
- Faster problem solving
- More collective learning
- More people understand more parts of the project

##### Disadvantages of Pair Programming
If there’s an expert/novice pair, there may be **disengagement**, which is when one of the members physically withdraws from the computer. There may also be **watch the master**, where the novice just navigates and never drives.

#### Extreme Programming Dev Cycle
Sorted by order of frequency:
- Code
- Pair Programming
- Unit Tests
- Pair Negotiation
- Stand Up Meeting
- Acceptance Test
- Iteration Plan
- Release Plan
This is the inverse of the order that they first occur.
Meaning, there is first a Release Plan, and then part of that is making an Iteration Plan. Then that plan is run by the customer (Acceptance Test), etc…

> [!tip] Unit tests usually happen every few minutes

### Software Architecture
Every system has a certain amount of **essential complexity** required to do it’s job, but most systems contain *cruft* that makes it harder to understand. This *cruft* causes changes to take more effort, and is called **technical debt**.

> [!tip] Essential Complexity is a required response to the complexity of the problem solved by the system

> [!tip] Most systems have unnecessarily complex code segments (*crufts*) that make the code difficult to understand
### Code Smells
#### Rigidity
A design is **rigid** if a simple change causes a cascade of subsequent changes to be made in dependent modules.
*Meaning, things aren’t just plug 'n' play. If you want to swap out a module, it takes a lot of effort.*

#### Fragility
A design is **fragile** if a change in one place in the code causes changes in seemingly unrelated parts of the codebase elsewhere.

> [!tip] Code that is Rigid is often but **not always** Fragile

#### Immobility
A design is **immobile** if it’s difficult to extract code in one part of the system to make it reusable by other parts. (If the implementation of the component is so specific, it’s difficult to modularize it.)

#### Viscosity
A design is **viscous** if it’s easier to add a quick band-aid hack then to properly add code that preserves the original design of the system.

(If extending capability requires a lot of refactoring, the system is viscous).

> [!tip] Viscosity can happen immediately with the initial design

#### Needless Repetition
When the same code appears over and over again, the developers are missing an abstraction.

#### Opacity
A design is **opaque** if, after not working on it for a while, it is difficult for the developers to understand what the code is doing. This is prevented by writing very clear code and comments.

### Object Oriented Development

- **Objects** represent an entity. Basic unit.
- **Classes** are wrappers (black boxes) that hide internal mechanisms
- **Abstractions** represent the behavior of a real-world entity
- **Encapsulation** is the mechanism of hiding internal components from external access
- **Inheritance** is the method of extending existing classes to make new ones
- **Composition** is the utilization of existing classes in the functionality of new ones
- **Polymorphism** allows classes of different forms to be used the same way

The three central characteristics of OOD:

**Encapsulation**: Promotes modular readable, and debugging oriented program

**Inheritance**: Hierarchal design, Promotes reusability and efficiency. 

> [!tip] Inheritance is more performant than Composition

**Polymorphism:** Allows values of different types to be handled the same way using a uniform interface.

### Separation of Concerns (SoC)
Divide functionality into distinct features with as little overlap as possible. The goal is to minimize interaction points to achieve low coupling and high cohesion.

**Coupling** is a measure of how closely connected different modules are.

**Cohesion** is the degree to which elements of a module belong together. (How conceptually related they are)

**Single Responsibility Principle \[SRP]** is the principle that each module should be responsible for only one specific functionality.
#### S.O.L.I.D.
Intended to make software more *understandable*, *flexible*, and *maintainable*.

- **S**ingle Responsibility Principle (discussed above)
	- Each module should be responsible for only one specific functionality.
- **O**pen Closed Principle
	- Classes should be extendable, but not modifiable
- **L**iskov Substitution Principle
- **I**nterface Segregation Principlep
- **D**ependency Inversion Principle

### Principle of Least Knowledge / Law of Demeter (LoD)

**Only talk to your immediate friends.**
A module should only have limited knowledge about other modules. Specifically, it should only interact directly with its immediate dependencies and not access the internal details of those dependencies.


### Don’t Repeat Yourself (DRY)
Avoidance of [[Week 02#Needless Repetition|needless repetition]]. Functionality should not be duplicated in other components.
