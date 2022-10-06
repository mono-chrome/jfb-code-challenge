
# TechStyle - JFBrands Coding Challenge

## Contents

  - [Setup Instructions](#setup-instructions)
  - [Goals](#goals)
    - [Challenge One](#challene-one)
    - [Challenge Two](#challene-two)
    - [Challenge Three](#challene-three)
    - [Challenge Four](#challene-four)
    - [Challenge Five](#challene-five)
    - [Bonus](#bonus)
  -  [References](#references)


## Setup Instructions

Before you follow the remaining instructions, ensure you have the following installed on your machine:

- [`Node`](https://nodejs.org/en/) latest lts (ie: lts/gallium) version e.g. via [NVM](https://github.com/nvm-sh/nvm).

1. Clone this repo via SSH and open the directory: `git clone https://github.com/mono-chrome/tfg-code-challenge.git && cd tfg-code-challenge`
2. Create a new branch off `main` called `development-<CURRENT DATE>` to do your work.
3. Run `npm install`.
4. Run `npm start` to start the application
5. If the application does not open a browser automatically, navigate to http://localhost:3000/ in your browser of choice and familiarize yourself with each page.

## Goals

During this exercise, we'll be working towards completing as many of the following challenges as you can. Before you dive into each challenge, please read them all. You are welcomee to tackle them in any order.  Please take some time to familiarize yourself with the each page.

Our main goal with this sample project is to get a better understanding of if you'll be a good fit for our team. We'll be looking for these main attributes on no particular order:

- Comfort with javascript/typescript, html, css
- Problem solving skills
- Your ability to communicate your problems and ideas
- How you use the tools available to you
- How well you handle given requirements
- Reading comprehension

Treat this like a work environment. Use the internet, source documentation, ask questions to the team.

### Challenge One

Please modify the User page so that the columns for email and phone number are reversed. (http://localhost:3000/user)

### Challenge Two

There is some information missing from the User Detail page (http://localhost:3000/user/detail/1). Please add Company information ("Company name" and "Catchphrase") to the User Detail page.

### Challenge Three

Please modify the page title 'TFG Coding Challenge' to 'JFB Challenge' and modify the color to `#e04fad`
Please add a subtitle containing today's date.

### Challenge Four

The comment section allows you to view details of the comment using the "eye" button in the Action column (http://localhost:3000/comment).  Please modify it, so that it instead redirects to the post where the comment was made.

Please also add a column to the comment table for the email associated with the comment.

### Challenge Five

A few of the pages already have a filter option based on user.  Can you formulate a plan to add a text search to the filter as well that would include only ressults that have the search string present in the title, content, etc.?

Can you think of multiple ways to implement this?

Stretch Goal: If there is time please implement a text search on one of the pages


### Bonus

- Identify and fix any bugs that you encounter along the way
- Identify at least one new feature that would make the site better

## References

This project was created originally with [Create React App](https://github.com/facebook/create-react-app) and modified from [JSON Placeholder App](https://github.com/locbq/jsonplaceholder-app).  It also makes use of [JSON Placeholder](https://github.com/typicode/jsonplaceholder).
