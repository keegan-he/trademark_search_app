let state = {
    data: [],
};

function render() {
    let output = document.querySelector('#output');
    output.innerHTML = '';

    for (let gif of state.data) {
        let image = document.createElement('p');
        image.innerHTML('src', domains.domain);
        output.appendChild(image);

    }
}

function doFetch() {
    let element = document.querySelector('#search');
    let searchTerm = element.value;
    fetch('https://www.markerapi.com/api/v2/trademarks/trademark/search term/status/active or all/start/an integer/username/api username/password/api password' + searchTerm + '}')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            state.data = data.data;
            render();
        });
}
