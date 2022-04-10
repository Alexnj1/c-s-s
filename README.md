
# C-S-S

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Some technologies Used
### ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge) ![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?logo=mysql&logoColor=white&style=for-the-badge) ![Git](https://img.shields.io/badge/git-%23F05033.svg?logo=git&logoColor=white&style=for-the-badge) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white&style=for-the-badge)
  
## Description
  

### This is a full stack application, hosted on heroku, that utilizes Node.js, Express.js, various NPM packages and various full stack web development concepts to create a small social-media style website specially for communication throughout a fictional community.
  
### NPM Packages Used:

- **express**: High performance framework for server-side applications
- **express-session** and **express-session-sequelize**: For session creation and to connect/sync the sequelize database to the session.
- **mysql2 and sequelize**: To connect the application to a MySQL database and to query that database within JavaScript rather than the MySQL command-line shell.
- **dotenv**: For setting environment variables.
- **bcrypt**: For password hashing.
- **express-handlebars**: For serving dynamic HTML based on database queries.
- **nodemailer**: Linked to an external email service. This is used to stretch the functionality of the application past just the code.

## Table of Contents


  * [Installation Instructions](#installation-instructions)
  * [Intended Use](#usage)
  * [Contribution](#contribution)
  * [Tests](#testing)
  * [Questions](#questions)
  * [License](#license)

## Installation Instructions

## *Node and the MySQL Shell both need to be installed on your computer for local testing*
      npm i
### To test this application in a local environment, clone this repository and enter this command in your terminal in the root of the repository. 
### Afterwards, before running the server, you must first navigate to the MySQL shell and create a database called "css_db", then you must create a .env file in the root of the repository and store your login credentials as follows
    DB_NAME='css_db'
    DB_USER='Your MySQL username'
    DB_PW='Your MySQL password'
### Make sure .env is included in a .gitignore file
    npm start
### Once the necessary dependencies have been installed, run this command to start your local server, then navigate to localhost:3001 to test the application. 


## Usage


### This website is meant to be used by residents of a fictional community called C-S-S neighborhood. This websie provides a way for members of that community to communicate with each other and share news going on around that community as well as events. It also provides a way for residents to communicate with neighborhood administrators both informally through posts or with a formal complaint or compliment form.
  
## Contribution


### Alex Noble-James
### Blerand Ismaili
### Dedrie Peart

  
## Testing

### For the deployed application
### [C-S-S Neighborhoods](https://sheltered-fortress-48000.herokuapp.com/homepage)
  
## Questions


### If there are any questions, including those about the use of this application, refer to the information below.
  
### Link to the main contributor(s) GitHub profile: 
#### [alexnj1](https://www.github.com/alexnj1)
#### [Blerandism](https://github.com/BlerandIsm)
#### [Dedriep](https://github.com/Dedriep)

### Link to the main contributor(s) email address: alexnoble143.an@gmail.com
  
## License
  
  
### This project is licensed under the MIT open source license. Visit [LICENSE](/LICENSE) for the full license documentation.
  

