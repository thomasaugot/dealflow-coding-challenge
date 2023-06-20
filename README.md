# DealFlow Coding Challenge - Web React App

## Description

I built this app as my solution to Dealflow's coding challenge.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functionalities](#functionalities)
- [API Reference](#api-reference)

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
