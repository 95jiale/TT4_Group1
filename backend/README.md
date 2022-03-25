# node-mysql

1. clone project
2. From project root, create a ".env" file. A sample file ".env.sample" can be found in the same folder, change variables as required
3. run "mysql -uroot -ppassword < ./src/scripts/init.sql" to create db tables, modify -u and -p as neccesary
3. run "npm install"
4. run "npm run start:nodemon" to start server when developing