## Steps to be perfromed to Run the API Locally

1. Clone this repository to your local machine.

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory.

3. Install the required dependencies.

   ```bash
   npm install
   ```

4. Set up a MongoDB database either locally or using a cloud solution like MongoDB Atlas. Update the MongoDB connection URI in the db.js file.

5. Run the application.

   ```bash
   npm start
   ```
 # Book Management API  Overview

This is a RESTful API for managing books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on book data. The API is built using Node.js, Express.js, and MongoDB(moongoose).

## API Endpoints and Discriptions
- **User Login and Authorization:**

  - Endpoint: `POST /login`
  - Impcat:
    - Send a POST request('/login') to the external user micro service api . with a JSON body containing book details ("email" ,"password") to login a  user and  get the access_token.
    This endpoint is used for user login, it takes email and password as input parameters and returns a token which can be used in subsequent requests.
    Please  after a success full  login and verify the  token then  user  will be able to proceed  the next endpoints

- **Add a New Book:**

  - Endpoint: `POST /books`
  - Impcat:
    - Send a POST request to `/books` with a JSON body containing book details (title, author, summary) to create a new book.

- **View a List of All Books:**

  - Endpoint: `GET /books`
  -Impact:
    - Send a GET request to `/books` to retrieve a list of all books in the database.

- **View Details of a Specific Book by its ID:**

  - Endpoint: `GET /books/:id`
  - Impact:
    - Send a GET request to `/books/:id` with the book's ID to retrieve the details of a specific book.

- **Update a Book's Details:**

  - Endpoint: `PUT /books/:id`
  - Impact:
    - Send a PUT request to `/books/:id` with the book's ID and a JSON body containing the updated book details (title, author, summary) to update a specific book.

- **Delete a Book:**
  - Endpoint: `DELETE /books/:id`
  - Impact:
    - Send a DELETE request to `/books/:id` with the book's ID to delete a specific book.



