---
title: BookWorm
description: A CrowdSourced Book Exchange Platform.
date: 2022-5-5
template: portfolio
image: ./cover.png
tags: Product Design & Development | UX Design | Adobe XD | Material UI | AWS Amplify | React.js
---



<center><img alt="Book Covers" src="/bookCovers.jpeg"></center>

#### Project Details:

 **Timeframe:** 2 Months
<br/>

 **Role:** Product Designer and Developer
<br/>

 **Team:** This is a passion project completed while I was working on my [Google UX Design Professional Certificate Program](https://www.coursera.org/professional-certificates/google-ux-design)
<br/>

 **Tools:** Adobe XD, Xtensio, React, AWS Amplify, Node.js, Github
<br/>
<br/>

###### Summary: 

BookWorm is a crowd sourced book exchange platform that allows free circulation of books amongst book lovers. This is a passion project that I have been ideating, designing and developing.

<br/>
<br/>


###### The Problem: 
Bookshelves in our homes contain the world’s knowledge but they remain underutilized and inaccessible for many readers. 
The Internet has opened a whole new arena for  eReaders taking 35% of the book market. While print books are abundant, their price remains higher than ebooks.<br/>
<br/>

###### The Goal: 
Design a Book Sharing Library website to be user friendly by providing clear navigation and offering a fast checkout process.<br/>
<br/>

###### Tasks: 

- Ideate the product, 
- Create user stories and break down the project to tasks using Asana. 
- Research and Conduct Interviews
- Design mockups and build prototypes
- Build the initial MVP using React js and AWS Amplify

<br/>
<br/>

##### User Research Summary
I conducted user interviews, which I then turned into empathy maps to better understand the target user and their needs. I discovered that books they possessed elements of emotional attachment and revered as items of value amongst book lovers.
<br/>
“You are not done with a book until you pass it to another reader.” - Donalyn Miller



##### User Research Pain Points

-  Community: Book Apps focus on bookselling and less in building a community of book lovers. 
- Environmental Impact: Users state they would like to discover more sustainable options for reading and reducing their carbon footprint. 
- Book Availability: Millions of books stay unread in bookshelves while millions book readers have limited reading options in their bookshelves. 
  
<br/>
<br/>

##### Persona
Jackie is a Sci-fi bookworm who loves to discuss and share books with her friends.
While moving to her tiny apartment in  Boston she donated numerous.

<center> <img alt="Persona" style= "width:400; height:auto;" src="/persona.png"> </center>

<br/>
<br/>


##### User Journey Map

I created a user journey map of Jackie’s experience using the site to help identify possible pain points and improvement opportunities. 

<center> <img alt="user-journey" style= "width:400; height:auto;" src="/userJourney.png"> </center>

<br/>
<br/>



##### Sitemap

My goal here was to make strategic information architecture decisions that work for a rapid developed MVP and that are scalable in the future.

<center> <img alt="user-flow" style= "width:400; height:auto;" src="/BookWormJam.png"> </center>

<br/>
<br/>



<br/>
<br/>


##### Low Fidelity Prototype


To create a low-fidelity prototype, I connected all of the screens involved in the primary user flow of adding an item to the cart and checking out.

At this point, I had received feedback on my designs from members of my team about things like placement of buttons and page organization. I made sure to listen to their feedback, and I implemented several suggestions in places that addressed user pain points. 

Moving from paper to digital wireframes made it easy to understand how the redesign could help address user pain points and improve the user experience. 

Prioritizing useful button locations and visual element placement on the home page was a key part of my strategy.

<center >
<img alt="paperWireframe" style= "width:400; height:auto;" src="/wireframe.png">
 </center>


<br/>
<br/>


##### Usability Study
I conducted 1 round of usability study which helped guide the designs from wireframes to mockups.

** Findings** : 
 - When Selecting a book users wanted to know the book condition. 
 - Users weren’t able to easily  have a book preview and sample its contents.
 - Users wanted a way to quickly save or share a book from the card.


##### Key Mockups 

Based on the insights from the usability study, I made changes to improve the site’s checkout flow. One of the changes I made was adding the option to select one of the copies available This allowed users more freedom to pick their book and how much they are paying for shipping.

I included considerations for additional screen sizes in my mockups based on my earlier wireframes.

<br/>

<center >
<img alt="Key Mockups" style= "width:400; height:auto;" src="/cover.png">
 </center>

<br/>
<br/>

##### High Fidelity Prototype 

My hi-fi prototype followed the same user flow as the lo-fi prototype, and included the design changes made after the usability study, as well as several changes. I created two different personas and build two prototypes one for Give a Book and one for Get a Book flow to emulate a more real life situation.

View the BookWorm’s high-fidelity prototype.


<center> <img alt="Prototype" style= "width:400; height:auto;" src="/proto.png"> </center>

<br/>
<br/>


##### Clickable Prototype  
Navigate through the menu for full functionality. Follow the pointer to dicover the full user journey.


<center>

<br/>

###### Get a book Flow  - Jackie 
<br/>
<br/>
  <iframe width="400" height="400" src="https://xd.adobe.com/embed/1014981b-80a3-4132-aa26-7e62b59b0a2c-4547/?fullscreen" frameborder="1" ></iframe>

</center>

##### Accesibility Consideration

 - Provided access to users who are vision impaired through adding alt text to images for screen readers.
 - Used icons to help make navigation easier.
 - Used detailed imagery for frames and art to help all users better understand the product.


<br/>
<br/>

<br/>


### Building the prototype in code


##### Scoping Out the Product in Asana
I used the free Asana plan to keep track of the project in a Kanban Board 
<center> <img alt="Asana" style= "width:400; height:auto;" src="/Asana.png"> </center>

<br/>
<br/>

##### Tech Stack
   1. Setup AWS Amplify Project: Initialize Project & Setup Authentication 
   2. Basic Functionality: Build the basic React App using Material UI and mock the backend.
   3. Hi-Fi React Frontend and Harden the Backend: Use Styled Components to polish the UI and build the API on Amplify.
<br/>
<br/>



##### Building the Backend with AWS Amplify 

Why I chose AWS Amplify for my App:
Keeping the future in mind Amplify will help scale the product as it grows.
Out of the box Solutions: 
- Authentication, 
- Rapid API development 
- Serverless
- Fast App Deployment

<center> <img alt="Amplify" style= "width:400; height:auto;" src="/amplify.png"> </center>


<br/>
<br/>

##### Building the Frontend 

Using Material UI library kit in the design project, made it easy building components in React. 

Use the same Components in both design and development
Integrate Styled Components library to polish the UI
Integrate the same theme structure in both design and frontend to make any color change super fast.

<center> <img alt="Frontend" style= "width:400; height:auto;" src="/mui.jpeg"> </center>

<br/>
<br/>

##### Checkout Flow

After researching for checkout APIs I selected Stripe Checkout for a rapid Checkout process development.
- Customizable payment page.
- Scalable solution.
- User-friendly documentation.
<center> <img alt="Stripe" style= "width:400; height:auto;" src="/stripe.png"> </center>

<br/>
<br/>
<br/>

##### Integrating External APIs
**Google Books API**
- Get books by category so users can add for exchange
-  Book Preview and Sell Link
-  Major Bonus: I was able to fetch my custom shelves so I could edit Trending, Popular shelves in the home screen without building a separate UI.
<br/>

**ShipEngine API**
- Use USPS Media Mail for Low Cost Shipments ($2.5)
- Create Shipments
- Automatically generate shipping labels
<br/>
<br/>


##### Takeaways 

**Impact:**
Our target users shared that the app was intuitive and responded to the reader’s needs for circulating, discussing and reading books. Most users shared that they will give Bookworm a try when it is launched.

<br/>

**What I learned:** 
- I learned that UI kits such as material UI allow for fast iterations from both UX UI and also Developer perspective especially in a small team.  
- Being a one person team I wanted  to focus on the real needs of the user when coming up with design ideas and solutions in order to produce an MVP.

<br/>
<br/>


##### Product Demo

<center>
<iframe width="400" height="315" src="https://www.youtube.com/embed/i4m9xdB2yi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>


##### Next steps 
- Work on the social aspect of the app adding Bookclubs and user interactions
  
<br/>
<br/>


<center> Thank You! </center>

<br/>
<br/>


