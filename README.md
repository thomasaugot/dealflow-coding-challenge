# DealFlow Coding Challenge - Web React App

## Description

I built this app as my solution to Dealflow's coding challenge.

Visit the deployed page at: https://dealflow-coding-challenge.netlify.app/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functionalities](#functionalities)
- [API Reference](#api-reference)
- [Good Practices Highlights](#good-practices-highlights)
- [Possible bugs and improvements](#possible-bugs-and-improvements)
- [Performance Testing](#performance-testing)

## Installation

Instructions on how to install and set up your React app. Include any necessary prerequisites, dependencies, or configuration steps.

```bash
$ git clone <repository-url>
$ cd <project-folder>
$ npm install
```

## Usage

To start the app locally, run

```bash
$ npm start
```

## Functionalities

The app:

- Fetches a list of DealFlow's freelancers (fake list, see [API Reference](#api-reference))
- Displays this list
- Filters freelancers by name
- Offers pagination and Chunks to optimize rendering (only loads what needs to be to avoid to many DOM elements)

## API Reference

The challenge requests to mock data fetching from a REST API.
Since no API actually exists, I am using faker.js to fetch fake data.
In other cases, I would have chosen Axios, and used the following:

Endpoint <br/>
URL: /api/freelancers <br/>
Method: GET <br/>
Description: This endpoint to fetch a complete list of all freelancers.

## Good Practices Highlights

- I have divided my code into separate components (App, SearchFilter, and FreelancerList), which improves maintainability and reusability.
- I used React hooks (useState, useEffect) to manage state and side effects.
- I have implemented error handling by catching and logging errors during the data fetching process.
- I have used sementic HTML elements to structure the content of the app

## Possible bugs and improvements

- It would be nice to improve error the handling in the `fetchFreelancers` function to provide the user with a feedback during the data fetching process.
- The application isn't responsive and only works on desktop, which would be great to implement.
- Write more complete tests.
- Use CSS processors such as SCSS to improve styling method and make code reusable.
- Make each freelancer's item a reusable component
- and probably many more... :)

## Performance Testing

- I use Google Lighthouse
- Open app in the browser and access Lighthouse from DevTool
- Run performance Audit which evaluates various performance aspects, including load time, rendering, network requests, etc.
- Generate a report and analyze how the report tells you to improve the app's performances
- try several methods depending on what you're getting, eg. lazy-loading, etc

<br/>

Visit the deployed page at: https://dealflow-coding-challenge.netlify.app/
