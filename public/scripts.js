document.getElementById('fetch-all-data').addEventListener('click', fetchAllDinoData);
document.getElementById('fetch-sorted-data').addEventListener('click', fetchSortedDinoData);
document.getElementById('fetch-random-data').addEventListener('click', fetchRandomDinoData);
document.getElementById('fetch-one-data-name').addEventListener('click', fetchDinoDataByName);
 
async function fetchAllDinoData() {
    // Fetch data from the API
    await fetch('https://dino-api-five.vercel.app/api/v1/dinos')
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
                    fetch('https://dino-api-five.vercel.app/api/v1/dinos/sorted')
                        .then(response => response.json())
                        .then(data => {
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
                    fetch('https://dino-api-five.vercel.app/api/v1/dinos/random')
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
                };

                function fetchDinoDataByName() {

                    const name = document.getElementById('name').value;

                    fetch(`https://dino-api-five.vercel.app/api/v1/dinos/name/${name}`)
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