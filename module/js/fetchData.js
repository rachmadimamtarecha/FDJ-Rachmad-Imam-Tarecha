// Fetch data dari fetchURL
const dataJson = (fetchURL) => {

    fetch(fetchURL).then(response => {
        return response.json()
    }).then(responseJson => {
        writeData(responseJson);
    }).catch(err => {
        console.log(err)
    })

}

// Olah data dari Fetch
const writeData = (responseJson) => {
    console.log(responseJson);
    const writeInModal = (item) => {
        console.log(item);
        $(".list-group").append(`<li class="list-group-item"><a onclick="save()"><img src="${item.picture.thumbnail}"></img> ${item.name.first} ${item.name.last}</li></a>`);
    }

    responseJson.results.forEach(writeInModal);
}

const saveData = () => {

}

export {
    dataJson
}
