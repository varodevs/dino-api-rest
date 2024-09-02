# Dino API by Alvaro Barba
---

Welcome to the **Dino API** project! This API provides access to a collection of dinosaur data, allowing users to retrieve information about various dinosaurs, create new entries, update existing ones, and delete records. This API is built using Node.js, Express, and MongoDB.

![T-rex](https://dinosaurland.es/wp-content/uploads/elementor/thumbs/27-Tyrannosaurus-qm421igre950ile329ckf4p99w3nj370rbkeuspb7k.jpeg)

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/varodevs/dino-api-rest.git
```

Navigate to the project directory:
```bash
cd dino-api-rest
```

Install the required dependencies:
```bash
npm install
```

## Environment Variables

To run the api locally with npm run dev (nodemon), create a nodemon.json file in the root directory and add the following environment variables:

```javascript
    {
        "env": {
            "MONGO_ATLAS_URI":"your_mongodb_atlas_uri",
        }
    }
```
To run the api locally with vercel dev, create a .env file in the root directory and add the following environment variables:

```javascript
    MONGO_ATLAS_URI=mongodb+srv://<mongodb_atlas_user>:<mongodb_atlas_password>@<mongodb_atlas_cluster>/?retryWrites=true&w=majority&appName=<mongodb_atlas_database>
```

These variables are used to configure the server port and MongoDB connection.

## API Endpoints

Public Endpoints

- GET /api/v1/dinos: Retrieve a list of all dinosaurs.
- GET /api/v1/dinos/by-id/:id: Retrieve a specific dinosaur by ID.
- GET /api/v1/dinos/:name: Retrieve a specific dinosaur by name.
- GET /api/v1/random: Retrieve a random dinosaur.
- GET /api/v1/sorted: Retrieve dinosaurs sorted alphabetically by name.

## Usage

Start the development server with Express:
```bash
npm run dev
```
Access the Homepage at http://localhost:3000/

---

Start the development server with Vercel:
```bash
vercel dev --listen <desired-port>
```
Access the Homepage at http://localhost:3001/

Use a tool like Postman, Insomnia, or cURL to test the API endpoints.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request.