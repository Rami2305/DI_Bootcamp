// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
// Esto porque se reinicia cada vez que yo clickeo send, prestar atencion!!
    
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    //  llamamos a los datos que hay dentro del formulario

//    creamos el object
    const data = {
        name: name,
        lastname: lastname
    };

    // lo transformo a json
    const jdata = JSON.stringify(data);

//    lo vinculo al archivo html creando un div
    document.getElementById('output').textContent = jdata;
});