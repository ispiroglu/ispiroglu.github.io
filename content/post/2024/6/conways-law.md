---
title: "Conway's Law: The Organizational Mirror"
date: 2024-06-16T23:00:00+03:00
hero: /images/post/2024/6/banner.svg
excerpt:
draft: false
---

We; humans, have been communicating since we stared living together. Firstly, maybe we were just communicating with each other about where to hunt, where to find food etc... But we evolve over time, and the reason why we communicate is changed. We started to communicate for more complex reasons like find out how to live together, building relationships, expressing emotions, **_sharing knowledge_** and so on.

As we navigate the complexities of modern work, have you ever stopped to consider how our organizational structures might be influencing the very systems we're trying to build? We started to work with high number of co-workers in our jobs. With a simple math, if there is 100x work to do, we may hire 100 people to do that job correctly. We may think this will fasten the process. But it's not like that. Just as our earliest human ancestors likely communicated effectively around the campfire, so too do our teams and departments today rely on effective communication to get things done. Even we are using all kind of tools for communication and have a great communication between us, the ending result of the job may not be the one we wanted. That's why **John Conway**, an American computer scientist, came up with the Conway's law. But what happens when these communication structures become outdated or mismatched with the systems they're supposed to support? In this article, we'll explore Conway's Law, a powerful principle that reveals the complex relationship between organizational design and system architecture. Join me as we examine how understanding this law can help us build better systems and stronger teams.

> "Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure." -- John Conway

So what is that even mean? Copy of a communication structure? How could it be?
Let's examine this concept with an example. Imagine there is three different teams in a department. Now let's say the first team has a very good communication between them, they know each other well, they have a clear understanding about what they need to do. And the second team also has a great communication structure among themselves and they have a clear understanding about what they need to do aswell. And the third aswell.

Now let's say that, there has to be a new project which requires all the teams to work together. So we put them in one room and tell them "Hey guys, you are going to work on this project together". What happens? The first team starts talking about their own things, they start using their own language, they start thinking about how they can do it themselves. And the second team also does the same thing. They start talking about their own things, they start using their own language, they start thinking about how they can do it themselves. And the third team does the same thing . Even if they are in the same room, they won't be able to communicate effectively with each other. Because they have different communication structures. The first team has a structure that is based on their own way of communicating and the second team also has its own structure and the third too. And when you put them together, it's like trying to merge three different systems.

So the project starts, all the teams start to work and develop parts of the project. Every team will fill the needs of the project as they know. At the end, the result will have 3 main structures. It may be a good system but it won't be a single system. It will certanly be two systems that are connected together somehow because of there will be 3 different perspective to the project.

As previosly mentioned, The system does not have to be bad, unusable system. But what if we wanted the system to consist of 4 modules? It is clear that we can't create 4 different modules with 3 different teams. Yes, we could do it on paper but the result will be no different than the current system. Instead of 3 big systems, we would have 4 small systems that connected with 3 domains.

![alt text](/images/post/2024/6/conway.svg)

To overcome this problem, we have to remember Conway's Law. Conway's Law is closely tied to organizational design and systems thinking principles. By understanding how organization shapes technology and vice versa, we can gain valuable insights into the complexities of modern software development and with this insights, we can adjust our organizational shapes according to our needs. That's **_The Inverse Conway Maneuver_**

### The Inverse Conway Maneuver (ICM)

The term "maneuver" suggests a tactical approach to overcoming weaknesses in communication and organization.

As organizations evolve, it's crucial to adapt their design accordingly. The Inverse Conway Maneuver involves proactively adjusting organizational structures to better accommodate changing requirements.

![Inverse Conway Maneuver](/images/post/2024/6/inverse_conway_0.svg)

The Inverse Conway Maneuver is an amazing tool that can help organizations achieve their desired system architecture. By intentionally structuring their teams and communication patterns to mirror their system architecture, organizations can set clear goals and objectives for each team or department, align them with the organization's overall strategy, and foster collaboration among teams. For instance, a software development team might create separate squads for front-end and back-end development, mirroring the layers of their desired architecture. This approach can help organizations avoid common pitfalls like duplicated efforts or communication breakdowns and achieve their desired system architecture. By structuring their teams in this way, they can ensure that each component is developed with the same level of attention to detail as the entire system. This intentional approach helps organisations achieve their desired architecture and avoid common pitfalls like duplicated efforts or communication breakdowns. It's a win-win!

Long story short, applying the Inverse Conway Maneuver is basically means, instead of dealing with the outcome of your current organizational shape, you shape your organization to mirror desired system architecture.

![Inverse Conway Maneuver](/images/post/2024/6/inverse_conway_1.svg)

We often use conway's law and microservices side by side. but this does not mean that we must use microservices to benefit from conway's law. It is just a reflection of the Conway's law to a deployment/responsibility strategy.

#### Case Study: Amazon and the Inverse Conway Maneuver

#### How did align their organizational structure with their system architecture?

- **Two-Pizza Teams:** A famous Amazon principle is the "two-pizza rule." Teams are ideally small enough to be fed by two pizzas. This fosters close communication and collaboration, leading to systems that are more modular and easier to maintain, reflecting the streamlined nature of the teams themselves.
- **Focus on Loose Coupling:** The microservices architecture minimizes tight coupling between services. This enables independent scaling and deployment, reflecting the autonomy of the two-pizza teams.
- **APIs and Communication:** Communication between microservices is made easy thanks to well-defined APIs. This reduces dependencies between teams, allowing them to work independently on their services.

#### What were the benefits or outcomes of this approach?

- **Faster Development Cycles:** Smaller, independent teams can move quickly with innovation and improvements within their microservice.
- **Enhanced Agility:** The modular nature allows for easier adaptation to changing market demands.

#### Were there any challenges they faced during implementation?

- **Initial Investment:** Shifting to microservices requires upfront investment in tooling, infrastructure, and potentially cultural changes within the organization.
- **Complexity in Overall System:** Managing a large number of independent services/teams requires robust monitoring and orchestration tools both technically and non-technically.
- **Integration Challenges:** Defining clear APIs/contracts and ensuring smooth communication between services can be complex.

#### Applying the Inverse Conway Maneuver can bring it's own challanges

- **Resistance to Change:** Teams who are used to a different structure might resist the shift. Effective communication and highlighting the benefits are key.
- **Alignment Across Departments:** Coordinating diverse teams with potentially conflicting priorities requires strong leadership and a shared vision.
- **Measuring Effectiveness:** Quantifying the impact of the Inverse Conway Maneuver can be difficult. Focusing on metrics like development speed, deployment frequency, and system uptime can provide insights.

**In conclusion**, Conway's Law highlights the crucial connection between an organization's communication structure and its system architecture. By understanding this principle, we can proactively shape our teams and processes to mirror our desired system architecture. The Inverse Conway Maneuver offers a powerful tool for achieving this alignment, as demonstrated by Amazon's success with microservices. It's important to remember that Conway's Law is an observation, not a prescription. Organizations can choose to leverage it or not. Microservices, while often discussed in conjunction with Conway's Law, are an architectural style and not a requirement for applying its principles. By applying Conway's Law and the Inverse Conway Maneuver, you'll be well on your way to creating a system that truly reflects your organization's vision.
