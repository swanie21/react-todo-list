# React To-do List

Followed Egghead [React tutorial](https://egghead.io/lessons/react-bootstrap-a-react-application-through-the-cli-with-create-react-app)

Created server to persist the list of to-dos with a JSON server node module  

```
npm i -g json-server
```  

Create `db.json` file to store the to-do objects

Run server on port `localhost:8080`

```
json-server -p 8080 --watch db.json
```

Check object data in the server

```
curl localhost:8080/todos
```
