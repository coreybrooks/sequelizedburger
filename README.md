# burger

### Overview
This application is a MVC "burger logger" that utilizes MySQL, Node, Express and Handlebars.  Node and MySQL are used to query and route data into the app, and Handlebars is used to generate the HTML.

### Purpose
Burger is a restaurant app that lets users input the names of burgers they would like to eat.  When a user submits a new burger in the add burger section, the burger will be added to either the "Burgers to Eat" or the "Devoured" section depending on which option is selected.

Each burger in the "Burgers to Eat" section has a "DEVOUR IT!" button next to it.  When the user clicks the button, the burger moves to the "Devoured" section with a "MAKE ANOTHER!" button next to it.  When the "MAKE ANOTHER!" button is clicked the burger moves back to the "Burgers to Eat" section.  Every burger is stored in a database with a value of 1 if the burger is devoured and 0 if not.


#### Model setup
The methods used to execute the MySQL commands in the controller files are stored in the orm.js file. The code that l calls the ORM functions with specific input is stored in the burger.js file in the models folder.


#### Controller setup
The controller routes are saved in burger_controller.js and exported as router. The burger_controller.js file links to the model file burger.js which links to orm.js to function.
* The get ("/") route grabs all the burgers from the database.  
* The post ("/") route creates a new burger in the database with the name and devoured value of the added burger.  The page is then redirected to the get route to display all burgers including the new addition.
* The put ("/:id") route updates the devoured value of the burger in the database when the button next to it is pushed.  The page is then redirected to the get route to display all burgers including the changed position of the updated burger.

#### View setup
The views folder contains the handlebar files.  The information is rendered to index.handlebars which is then sent to main.handlebars via Handlebars.  Buttons are rendered by index.handlebars which relay information to the database through the controller and model files.