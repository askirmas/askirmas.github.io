# Managing

## Stage (named *Milestone*)

### Source

http://www.chambers.com.au/glossary/milestone.php

### Main points

> progress in terms of achievement of predefined milestone [goals](http://www.chambers.com.au/glossary/goal.php)

> All projects should have at least 4 major milestones: requirements complete, design complete, code complete and test ready, and product shipped/accepted/deployed.
>
>@ http://www.chambers.com.au/glossary/milestone.php#top



> | **Milestone**                | **Milestone Goal**                                           |
> | ---------------------------- | ------------------------------------------------------------ |
> | Concept approval             | Feasibility studies and basic system concepts have been approved by management and the project is authorized to proceed to detailed requirements definition. |
> | Requirements review          | Requirements specifications are complete, correct, approved and suitable for input to design. |
> | Preliminary design review    | The architectural design satisfies all product requirements, is approved and is suitable for input into the detailed design process. |
> | Critical design review       | Detailed designs fully implement the system architecture, are approved and are suitable for input into the development of code. |
> | Test plan review             | Test plans are adequate for the testing of all product features, are approved and are suitable for input to the development of test cases and test procedures. |
> | Test readiness review        | Developed and unit tested software has been passed by the test team and is suitable for input into integration testing. |
> | System test review           | The software product has passed system testing and is suitable for input into acceptance testing. |
> | Operational readiness review | The software product has passed acceptance testing and is suitable for deployment in its target production environment. |
> | Product operational          | The software is in use in its target operational environment. |
>
> @ http://www.chambers.com.au/glossary/milestone.php#top

##  Git stuff

https://stackoverflow.com/questions/39591795/what-is-the-difference-relationship-between-github-projects-and-milestones

> - **Milestones** is a tool for **Scrum** methodology. Milestones are good for timeboxed iterations and working in sprints with batches of issues.
> - **Projects** is a tool for **Kanban** methodology. Projects are good for continuous delivery and steady flow of work.
> 
> @ https://stackoverflow.com/a/39701381

Also 
> A Project answers the question, "What are we working on at the moment?"
> A milestone answers the question, "What is remaining to finish this product?"
> 
> @ https://stackoverflow.com/a/47542346



| Project                     | Milestone                   |
| --------------------------- | --------------------------- |
| Issue belongs MANY projects | Issue belongs ONE milestone |
| No progress. No deadline.   | Progress. Deadline          |

# Software

## Quality by CISQ

[https://en.wikipedia.org/wiki/Software_quality#CISQ's_quality_model](https://en.wikipedia.org/wiki/Software_quality#CISQ's_quality_model)

### [Reliability](https://en.wikipedia.org/wiki/Reliability_(engineering))

An attribute of **resiliency and structural solidity**. Reliability measures the level of risk and the likelihood of **potential application failures**. It also measures the defects injected due to modifications made to the software (its "**stability**" as termed by ISO). The goal for checking and monitoring Reliability is to reduce and prevent application downtime, application outages and errors that directly affect users, and enhance the image of IT and its impact on a company's business performance.

### [Efficiency](https://en.wikipedia.org/wiki/Efficiency)

The source code and software architecture attributes are the elements that ensure **high performance** once the application is in run-time mode. Efficiency is especially important for applications in high execution speed environments such as algorithmic or transactional processing where performance and scalability are paramount. An analysis of source code efficiency and scalability provides a clear picture of the latent business risks and the harm they can cause to customer satisfaction due to **response-time degradation**.

### [Security](https://en.wikipedia.org/wiki/Security)

A measure of the likelihood of potential **security** breaches due to poor coding practices and architecture. This quantifies the risk of encountering **critical vulnerabilities** that damage the business.[[20\]](https://en.wikipedia.org/wiki/Software_quality#cite_note-20)

### [Maintainability](https://en.wikipedia.org/wiki/Maintainability)

Maintainability includes the notion of **adaptability, portability and transferability** (from one development team to another). Measuring and monitoring maintainability is a must for mission-critical applications where change is driven by tight time-to-market schedules and where it is important for IT to remain responsive to business-driven changes. It is also essential to **keep maintenance costs under control**.

### Size

While not a quality attribute per se, the sizing of source code is a software characteristic that obviously impacts maintainability. Combined with the above quality characteristics, software size can be used to assess the amount of work produced and to be done by teams, as well as their productivity through correlation with time-sheet data, and other [SDLC](https://en.wikipedia.org/wiki/Software_development_process)-related metrics.