// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the input values
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;

    // Create a JSON object with the input values
    const data = {
        name: name,
        lastname: lastname
    };

    // Convert the JSON object to a JSON string
    const jdata = JSON.stringify(data);

    // Append the JSON string to the DOM
    document.getElementById('output').textContent = jdata;
});