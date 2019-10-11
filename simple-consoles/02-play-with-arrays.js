const hobbies = ['Sports', 'Coocking'];

for (const hobby of hobbies) {
    console.log(hobby);
}

for (const hobbyMapped of hobbies.map(itemArray => 'Hobby: ' + itemArray)) {
    console.log(hobbyMapped);
}