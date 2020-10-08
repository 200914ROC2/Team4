# Team4
ROC2
Team 4

Arya 

Phillip

Steven

Jonah

Daniel

http://rocp-fitness.s3-website.us-east-2.amazonaws.com/

# Instructions for Running JSON-Server
Once you have the branch on your local machine, locate the folder `api`. `db.json` is where the JSON is.

You should first run `npm install` to ensure all modules are installed. Then in your terminal, run `npm run api` to start the JSON server. Then open another terminal, either by clicking on the `+` or the split view on the top right of the terminal window, and run angular from there. Now angular will be able to call JSON-Server.

I (Steven) have scripted it so that JSON-Server can be proxied to the same port as Angular, so any HttpClient call can simply use `/api/endpoint` instead of the full URL.

# ROCP2 Project

You and a few of your developer coworkers have thought up an interesting concept for a startup. You all conduct a sprint to create the first iteration/Proof of Concept for this idea of yours. The marketing campaign that you all set out to do went surprisingly well. Maybe it actually went a little too well, because now your team all of a sudden has a an eager investor who wants to see your product at the end of your two week sprint. This investor is known to invest in emerging tech startups, so they seem to know their way around technology.

For your second project, get into groups of 3 or 4. You will be creating a full stack application that uses the following technologies and methodologies at a minimum: **Angular**, **HTML/CSS/JS**, **Bootstrap** or **Angular Material UI**, **AWS**, and **Agile/Scrum Methodologies**. In addition you must have a **DevOps** pipeline where applicable (suggested that you use Jenkins, but you can use whichever technology you want). In addition, your application must consume at least one external API and have at least a rudimentary backend.

The quality of your project is a reflection of your skills and abilities, so I recommend that you create something you can be proud of. That being said, this time around, it is arguably more important that the investor is happy with what you have, so remember to talk up your product and give a good presentation.

Make sure you pitch your idea to me so that I can approve it. During this project, follow the best practices for the following: _Daily Standup Meetings_, _Sprint Planning Meeting_, _Burndown Chart_, _Scrum Board_, _CI_, _CD_, and _Pull/Merge Requests_. Consider using services such as GitHub, GitLab, Jira, or Trello to manage your Scrum Board.

## Soft Suggestions for options in constructing your backend:

- Take your previous servlet API and adapt it to the current project
- Create a new backend from scratch using whichever technology you like. Here are some suggestions for building backends in a more traditional way:
  - Spring Boot (Java Framework)
  - Servlets
  - Express (Node.js Framework)
  - literally any other backend technology you know
- Trying to do something different that takes advantage of cloud services? Look into some of these technologies (however, make sure that you are aware of how to stay within free tier):
  - AWS Lambda
  - AWS API Gateway
  - AWS DynamoDB
  - AWS CloudFront
- If you really hate backend and you want to make the minimum requirements:
  - Json Server (from npm)

## Still trying to impress me?

- Make your app aesthetically pleasing
- implement "proper" security
- Try using Docker
- Consider using AWS ECS or AWS Fargate
- Try to make your cloud architecture "Highly Available", "Durable", and "Scalable" (watch out for exceeding free tier)
- These are just suggestions, if you would like over-achieve in different ways, you are more than welcome to do so.

This project is tentatively due at the end of the final week of training.

# Minimum Requirements:

- [ ] Make a Front End using the required technologies
- [ ] Make a Back End using the technologies of your choosing
- [ ] Create a DevOps pipeline
- [ ] Deploy all of the architecture on the AWS Cloud

## Teams

[Team Sheet](https://docs.google.com/spreadsheets/d/1oESoHAOI8lwMTgV1iRTrCe78P3TKL0m3-BUTYSe45dA/edit#gid=0)

# Team4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
