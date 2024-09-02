document.getElementById('fetch-all-data').addEventListener('click', fetchAllDinoData);
document.getElementById('fetch-sorted-data').addEventListener('click', fetchSortedDinoData);
document.getElementById('fetch-random-data').addEventListener('click', fetchRandomDinoData);
document.getElementById('fetch-one-data-name').addEventListener('click', fetchDinoDataByName);
window.addEventListener('load', menuLinks);endpointLinks
window.addEventListener('load', endpointLinks);

function getCurrentURL() {
    return window.location.href
  }
 
 function fetchAllDinoData() {

    // Fetch data from the API
     fetch(`${getCurrentURL()}api/v1/dinos`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text(); // Get the response as text
    })
    .then(text => {
        console.log('Raw response text:', text); // Log the raw response to inspect it
        try {
            const data = JSON.parse(text); // Attempt to parse JSON
            if (!Array.isArray(data)) {
                throw new Error('Expected an array but got something else');
            }

            // Display the data in the HTML
            const dinoDataDiv = document.getElementById('dino-data');
            dinoDataDiv.innerHTML = ''; // Clear previous content

            data.forEach(dino => {
                const dinoItem = document.createElement('div');
                dinoItem.className = 'dino-item';
                dinoItem.innerHTML = `
                    <h3>${dino.name}</h3>
                    <p><strong>description:</strong> ${dino.description}</p>
                    <p><strong>length:</strong> ${dino.length}</p>
                    <p><strong>height:</strong> ${dino.height}</p>
                    <p><strong>weight:</strong> ${dino.weight}</p>
                    <p><strong>diet:</strong> ${dino.diet}</p>
                    <p><strong>geographical distribution:</strong> ${dino.geographical_distribution}</p>
                    <p><strong>period:</strong> ${dino.period}</p>
                    <p><strong>last fossil registry:</strong> ${dino.last_fossil_registry}</p>
                    <p><strong>curiosity:</strong> ${dino.curiosity}</p>
                `;
                dinoDataDiv.appendChild(dinoItem);
            });
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

                function fetchSortedDinoData() {
                    // Fetch data from the API
                    fetch(`${getCurrentURL()}api/v1/sorted`)
                        .then(response => response.json())
                        .then(data => {
                            console.log('Sorted raw response data:', data); // Log the raw response to inspect it
                            // Display the data in the HTML
                            const dinoDataDiv = document.getElementById('dino-data');
                            dinoDataDiv.innerHTML = ''; // Clear previous content

                            data.forEach(dino => {
                                const dinoItem = document.createElement('div');
                                dinoItem.className = 'dino-item';
                                dinoItem.innerHTML = `
                            <h3>${dino.name}</h3>
                            <p><strong>description:</strong> ${dino.description}</p>
                            <p><strong>length:</strong> ${dino.length}</p>
                            <p><strong>height:</strong> ${dino.height}</p>
                            <p><strong>weight:</strong> ${dino.weight}</p>
                            <p><strong>diet:</strong> ${dino.diet}</p>
                            <p><strong>geographical distribution:</strong> ${dino.geographical_distribution}</p>
                            <p><strong>period:</strong> ${dino.period}</p>
                            <p><strong>last fossil registry:</strong> ${dino.last_fossil_registry}</p>
                            <p><strong>curiosity:</strong> ${dino.curiosity}</p>
                        `;
                                dinoDataDiv.appendChild(dinoItem);
                            });
                        })
                        .catch(err => {
                            console.error('Error fetching data:', err);
                        });
                }

                function fetchRandomDinoData() {
                    // Fetch data from the API
                    fetch(`${getCurrentURL()}api/v1/random`)
                        .then(response => response.json())
                        .then(data => {
                            // Display the data in the HTML
                            console.log(data);
                            const dinoDataDiv = document.getElementById('dino-data');
                            dinoDataDiv.innerHTML = ''; // Clear previous content
                                const dinoData = data[0];
                                const dinoItem = document.createElement('div');
                                dinoItem.className = 'dino-item';
                                dinoItem.innerHTML = `
                            <h3>${dinoData.name}</h3>
                            <p><strong>description:</strong> ${dinoData.description}</p>
                            <p><strong>length:</strong> ${dinoData.length}</p>
                            <p><strong>height:</strong> ${dinoData.height}</p>
                            <p><strong>weight:</strong> ${dinoData.weight}</p>
                            <p><strong>diet:</strong> ${dinoData.diet}</p>
                            <p><strong>geographical distribution:</strong> ${dinoData.geographical_distribution}</p>
                            <p><strong>period:</strong> ${dinoData.period}</p>
                            <p><strong>last fossil registry:</strong> ${dinoData.last_fossil_registry}</p>
                            <p><strong>curiosity:</strong> ${dinoData.curiosity}</p>
                        `;
                                dinoDataDiv.appendChild(dinoItem);
                            
                        })
                        .catch(err => {
                            console.error('Error fetching data:', err);
                        });
                };

                function fetchDinoDataByName() {

                    const name = document.getElementById('name').value;

                    fetch(`${getCurrentURL()}api/v1/dinos/${name}`)
                        .then(response => response.json())
                        .then(data => {
                            // Display the data in the HTML
                            const dinoDataDiv = document.getElementById('dino-data');
                            dinoDataDiv.innerHTML = ''; // Clear previous content
                            
                                const dinoItem = document.createElement('div');
                                dinoItem.className = 'dino-item';
                                dinoItem.innerHTML = `
                            <h3>${data.name}</h3>
                            <p><strong>description:</strong> ${data.description}</p>
                            <p><strong>length:</strong> ${data.length}</p>
                            <p><strong>height:</strong> ${data.height}</p>
                            <p><strong>weight:</strong> ${data.weight}</p>
                            <p><strong>diet:</strong> ${data.diet}</p>
                            <p><strong>geographical distribution:</strong> ${data.geographical_distribution}</p>
                            <p><strong>period:</strong> ${data.period}</p>
                            <p><strong>last fossil registry:</strong> ${data.last_fossil_registry}</p>
                            <p><strong>curiosity:</strong> ${data.curiosity}</p>
                        `;
                                dinoDataDiv.appendChild(dinoItem);
                            
                        })
                        .catch(err => {
                            console.error('Error fetching data:', err);
                        });
                }

                function menuLinks(){
                    
                    const url = getCurrentURL()

                    const menuDiv = document.getElementById('menu-div');
                    menuDiv.innerHTML = '';

                    const links = document.createElement('div');
                    links.className = 'menu-links';
                    links.innerHTML =
                    
                    links.innerHTML = `
                <a href="${url}">Home</a>
                <a href="#">About me(In development)</a>
                `;
                menuDiv.appendChild(links);
                }

                function endpointLinks(){
                    
                    const url = getCurrentURL()

                    const contentDiv = document.getElementById('endpoints');
                    contentDiv.innerHTML = '';

                    const links = document.createElement('ul');
                    links.className = 'endpoint-links';
                    links.innerHTML = `
                <li><a href="${url}api/v1/dinos">GET /dinos - Get all dinosaurs</a></li>
                <li><a href="${url}api/v1/random">GET /random - Get a random
                        dinosaur</a>
                </li>
                <li><a href="${url}api/v1/sorted">GET /sorted - Get all
                        dinosaurs
                        alphabetically sorted</a></li>
                <li>GET /dinos/by-id/:id - Get a specific dinosaur by id</li>
                <li>GET /dinos/:name - Get a specific dinosaur by name</li>
                `;
                contentDiv.appendChild(links);
                }