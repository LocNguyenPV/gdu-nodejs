# Nodeamon
## Install nodeamon
`npm i nodemon -D`

## Config nodeamon
- Go to package.json
- Find `scripts` section
- Fill out with this: `"dev": "nodemon server.js"`

## Run
Open terminal and run: `npm run dev`

# Handle JSON format for request, such as APIs or JS-based clients
- Accepts data like `{ "name": "Loc", "age": 25 }` and makes it available as `req.body`
- Add this line to your `server.js` file: `app.use(express.json());`

# Handle URL-encoded data, such as HTML forms
- Accept data like `name=Loc&age=18&phone=01238` and makes it available as `req.body`
- Add this line to your `server.js` file: `app.use(express.urlencoded({ extended: true }));`
**Extended option:**
    - `true`: allowing nested objects and arrays, example: `name=Loc&address={street: "123 Main St", city: "New York", state: "NY", zip: "10001"}`
    - `false`: not allowing nested objects and arrays, example: `name=Loc&address=123 Main St&city=New York&state=NY&zip=10001`

