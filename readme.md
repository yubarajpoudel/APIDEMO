<p align="center">
  <img width="400" height="200" src="https://github.com/yubarajpoudel/APIDEMO/blob/master/node.png?raw=true">
</p>


API Fundamental template
=================

This project is created for fundamental scratch requirement of project and to show the way how to start the API in node using express straight way with postgres as a database.

### features
1. User signin
2. User signup with encypted password
3. Category addition 
4. Category list
5. News addition
6. News list and search by params
7. API secured by JWT token.

### Setup the project

1. clone the project
2. run ```npm install ``` inside the directory
3. Make sure you have postgres installed in your system
4. create the roles and database in the postgres, Open terminal and execute command ```sudo -u postgres psql ```
   ```
    - create user <user_name> with password '<password>';
    - create database <database_name>;
    - grant all pirivileges on database <databasename> to <username>
5. Run migration ``` npx sequelize db:migrate ```
6. Run the project ``` npm run hotload ```

database configuration are stored in ``` server/config/config.json ```

### With docker

1. clone the project
2. execute dockercompose  ``` docker-compose up -d ```
3. check containers are up or not  ``` docker ps -a ```
4. create roles and db in db container.
   - execute container in bash mode ``` docker exec -it postgres bash ```
   - ![create the roles and mirate](https://github.com/yubarajpoudel/APIDEMO/blob/master/db.png?raw=true)
      


More features are comming and will be added.

![for more about author contact @yubarajpoudel708@gmail.com](yubarajpoudel708@gmail.com)
