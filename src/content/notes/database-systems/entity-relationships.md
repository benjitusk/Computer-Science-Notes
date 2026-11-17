---
title: "Entity Relationships"
order: 2
---

## Entities

**Definition:** Entity
> An Entity is a **unique** object in the real world that is distinguishable from other objects. An entity could be a physical object (e.g. a house), a concept (e.g. a customer), or an event (e.g. a sale). An entity is described using a set of attributes.
>
> In an Entity-Relationship Diagram (ERD), an entity is represented by a rectangle with the entity name written inside. The name of the entity is usually a singular noun.

<span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-28-210259.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-28-210259.dark.svg" alt="" loading="lazy" decoding="async"></span>

**Definition:** Entity Set
> An Entity Set is a collection of similar entities. An entity set is a set of entities of the same type that share the same properties, or attributes.

**Definition:** Attribute
> An Attribute is a property or characteristic of an entity. An attribute describes some aspect of the entity that is of interest to the organization. For example, a customer entity might have attributes such as customer ID, name, address, and phone number.
>
> All entities in an entity set have the same attributes, but the values of these attributes may vary from entity to entity. An attribute must be a single non-null value.
>
> In an ERD, an attribute is represented by an oval with the attribute name written inside. The name of the attribute is usually a singular noun.

<span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-28-212235.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-28-212235.dark.svg" alt="" loading="lazy" decoding="async"></span>

**Definition:** Key Attribute
> A Key Attribute is an attribute that uniquely identifies an entity within an entity set. A key attribute is used to distinguish one entity from another. For example, a customer entity might have a customer ID attribute that is used to uniquely identify each customer.
>
> Each entity set must have at least one key attribute. A key attribute must have a unique value for each entity in the entity set, and it cannot have a null value.
>
> An entity set may have more than one key attribute, in which case the combination of key attributes is used to uniquely identify each entity.
>
> Key attributes are underlined in an ERD to indicate that they are key attributes.

<span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-28-212814.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-28-212814.dark.svg" alt="" loading="lazy" decoding="async"></span>

## Relationships

**Definition:** Relationship
> A Relationship is an association between two or more entities. A relationship describes how entities are related to each other. For example, a customer entity might be related to an order entity through a relationship called "places." This relationship indicates that a customer places an order.
>
> In an ERD, a relationship is represented by a diamond shape with the relationship name written inside. The name of the relationship is usually a verb phrase.

**Definition:** Relationship Set
> A Relationship Set is a collection of similar relationships. A relationship set is a set of relationships of the same type that connect entities in an entity set.
>
> Mathematically, a relationship set is a set of relationship instances, where each relationship instance is a connection between entities in the entity set.
> <span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-29-130020.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-29-130020.dark.svg" alt="" loading="lazy" decoding="async"></span>
> $$
> \begin{align}
> &\text{Actor} = \set{A_1, A_2, \dots, A_n} \\
> &\text{Film} = \set{F1, F2, \dots, F_m} \\
> &\text{StarredIn} \subseteq \text{Actor} \times \text{Film}
> \end{align}
> $$
>

<span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-28-213149.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-28-213149.dark.svg" alt="" loading="lazy" decoding="async"></span>

**Definition:** Recursive Relationship Set
> A Recursive Relationship Set is a relationship set in which the same entity set participates more than once in different *roles*. A recursive relationship set is used to model relationships between entities of the same type.
>
> For example, an employee entity might be related to another employee entity through a relationship called "reports to." This relationship indicates that one employee reports to another employee.
>
> In an ERD, the different roles of the same entity set in a recursive relationship set are identified using role names on the relationship lines.

<span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-28-214235.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-28-214235.dark.svg" alt="" loading="lazy" decoding="async"></span>

> [!note] Relationships can have attributes too!
>
> **Definition:** Relationship Attribute
> > A Relationship Attribute is an attribute that describes some aspect of a relationship between entities. A relationship attribute is used to capture additional information about the relationship. For example, a relationship between a customer and an order might have a relationship attribute called "order date" to capture the date the order was placed.
> >
> > In an ERD, a relationship attribute is represented by an oval with the attribute name written inside. The name of the relationship attribute is usually a singular noun.
>
> <span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-28-214831.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-28-214831.dark.svg" alt="" loading="lazy" decoding="async"></span>
>
> Like any other attribute, a relationship attribute must be a single non-null value.


**Definition:** N-ary Relationship Set
> An N-ary Relationship Set is a relationship set that involves more than two entity sets. An N-ary relationship set is used to model relationships between multiple entities.
>
> Expressed in terms of set theory, an N-ary relationship set is a subset of the Cartesian product of the participating entity sets.

$$
\begin{align}
&\text{Actor} = \set{A_1, A_2, \dots, A_n} \\
&\text{Film} = \set{F1, F2, \dots, F_m} \\
&\text{Director} = \set{D1, D2, \dots, D_k} \\
&\text{DirectedActorIn} \subseteq \text{Actor} \times \text{Film} \times \text{Director}
\end{align}
$$

<span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-29-125249.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-29-125249.dark.svg" alt="" loading="lazy" decoding="async"></span>


**Definition:** Many-to-Many Relationships
> A Many-to-Many Relationship is a relationship between two entity sets in which each entity in one entity set can be related to many entities in the other entity set, and vice versa. A many-to-many relationship is represented by a simple line connecting the two entity sets.

<span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-29-130939.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-29-130939.dark.svg" alt="" loading="lazy" decoding="async"></span>


**Definition:** One-to-Many Relationships
> A One-to-Many Relationship is a relationship between two entity sets in which each entity in one entity set can be related to many entities in the other entity set, but each entity in the other entity set can be related to *at most* one entity in the first entity set. A one-to-many relationship is represented by an arrow pointing from the “one” side through the relationship diamond to the “many” side.


<span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-29-132317.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-29-132317.dark.svg" alt="" loading="lazy" decoding="async"></span>


**Definition:** One-to-One Relationships
> A One-to-One Relationship is a relationship between two entity sets in which each entity in one entity set is related to *at most* one entity in the other entity set, and vice versa. A one-to-one relationship is represented by a line connecting the two entity sets with an arrow pointing in both directions through the relationship diamond.

<span class="drawing"><img class="drawing__light" src="/drawings/02-entity-relationships-2024-05-29-134300.light.svg" alt="" loading="lazy" decoding="async"><img class="drawing__dark" src="/drawings/02-entity-relationships-2024-05-29-134300.dark.svg" alt="" loading="lazy" decoding="async"></span>
