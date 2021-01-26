var dbPromised = idb.open("contacts-database", 1, function (upgradeDb) {
    var contactsObjectStore = upgradeDb.createObjectStore("contacts", {
        keyPath: "cell"
    });


});


function saveContacts(contact) {
    dbPromised
        .then(function (db) {
            var tx = db.transaction("contacts", "readwrite");
            var store = tx.objectStore("contacts");
            console.log(contact);
            store.add(article.result);
            return tx.complete;
        })
        .then(function () {
            console.log("Contact berhasil di simpan.");
        });
}





const save = () => {
    getContactByCell();
    console.log("tombol save diklik");
}
