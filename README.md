# Ecommerce-Backend
As a manager at an internet retail company I WANT a back end for my e-commerce website that uses the latest technologies SO THAT my company can compete with other e-commerce companies

# OverView 
## The Challenge 
This challenge requires the creation of an e-commerce back-end site that meets specific user requirements. These requirements include the ability to connect to a MySQL database using Sequelize, create a development database that is seeded with test data, sync Sequelize models to the MySQL database, and display data from categories, products, and tags in a formatted JSON. The application should also be able to create, update, and delete data in the database.


## Description
The back-end database has been purposed towards e-commerce websites using Express.js API and Sequelize to connect to the MySQL database. The back-end database allows users to create a development database, seed it with test data, and sync Sequelize models to MySQL database. User's have the ability to use GET, POST, PUT, and DELETE routes to display and manipulate data in the users database.

## Usage Instructions
1. Repository: Open documentation run 'npm i' and update '.env'.
2. Create database: use the schema.sql file in the db folder with MySQL shell commands. Use environment variables to store sensitive data like your MySQL username, password, and database name.
3. Run 'npm run seed' to seed the database with test data. Then, run 'npm start' or 'nodemon' to start the server and sync the Sequelize models to the MySQL database.
4. Generate a development database with test data, use the schema and seed commands.
5. Use Insomnia to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for categories, products, and tags, ensuring successful creation, updating, and deletion of data in the database.
 You can create, read, update, and delete categories, tags, and products using these urls:

http://localhost:3006/api/categories
http://localhost:3006/api/categories/:id (required to delete, update, or just to read one category)
http://localhost:3006/api/tags
http://localhost:3006/api/tags/:id (required to delete, update, or just to read one tag)
http://localhost:3006/api/products
http://localhost:3006/api/products/:id (required to delete, update, or just to read one tag)


<img width="765" alt="image" src="https://github.com/SoniiPP/Ecommerce-Backend/assets/157616916/8b046112-8dae-4934-8a21-c59e6651aced">

<img width="956" alt="image" src="https://github.com/SoniiPP/Ecommerce-Backend/assets/157616916/4629a2f7-8fbc-4d51-92e4-7cfd8572f245">

## Walk_through Video
Insomnia(https://drive.google.com/file/d/13wxpAcbdxrTjMU4mDFYq3CxqNMvcWgdM/view)
The installion:(https://drive.google.com/file/d/1ikct7fzVT0xzKoKO0j-gGdSGSHtwpQyd/view) i forget to put on first one:

## Built-with 
JSON , Dynamic JavaScript , DOTenV, Express.JS, Node.js, Insomnia

## Contribution 
A bit of google and youtube videos , class activities
