let removeDataFromFirebase = (state, key) => {
    var answer = confirm("Do you really want to delete this data?");
    if (answer == true) {
      state.db.ref("/yonno/" + key).remove();
      alert("Data is now deleted.");
      return true;
    } else {
      alert("Delete canceled.");
      return false;
    }
}

let addDataToFirebase = (state, item) => {
    const { title, link, category } = item;
    state.db.ref("/yonno/").push({
     title: title,
     isEditing: false,
     link: link,
     category: category,
   })
}

export { removeDataFromFirebase, addDataToFirebase }