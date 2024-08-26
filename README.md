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
git clone https://github.com/your-username/dino-api.git
```

Navigate to the project directory:
```bash
cd dino-api
```

Install the required dependencies:
```bash
npm install
```

## Environment Variables

Create a nodemon.json file in the root directory and add the following environment variables:

```javascript
    {
        "env": {
            "MONGO_ATLAS_USER": "your_mongodb_username",
            "MONGO_ATLAS_PASSWORD": "your_mongodb_password",
            "MONGODB_HOST": "localhost",
            "MONGODB_PORT": "27017",
            "MONGODB_DATABASE": "your_mongodb_database"
        }
    }
```

These variables are used to configure the server port and MongoDB connection.

## API Endpoints

Public Endpoints

- GET /api/v1/dinos: Retrieve a list of all dinosaurs.
- GET /api/v1/dinos/:id: Retrieve a specific dinosaur by ID.
- GET /api/v1/dinos/name/:name: Retrieve a specific dinosaur by name.
- GET /api/v1/dinos/random: Retrieve a random dinosaur.
- GET /api/v1/dinos/sorted: Retrieve dinosaurs sorted alphabetically by name.

## Usage

Start the development server:
```bash
npm run dev
```
Access the Homepage at http://localhost:3000/  
Access the API at http://localhost:3000/api/v1/

Use a tool like Postman, Insomnia, or cURL to test the API endpoints.

## Development

Running Locally

Start the server using:
```bash
npm run dev
```

The server will automatically restart when files are changed, thanks to nodemon.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request.