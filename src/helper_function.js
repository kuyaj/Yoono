let object_array_reverse = (data) => {
    let sorts = Object.entries(data).sort();
    let reverse = sorts.reverse();
    return reverse.map(item => {
        var [keys, values] = item;
        var { title, link, category, isEditing } = values;
        return {
            key: keys,
            title: title,
            link: link,
            category: category,
            isEditing: isEditing,
        }
    })
}

let getDataFromFirebase = (state) => {
    state.db.ref('yonno').on('value', snapShot => {
        state.collectionCount = snapShot.numChildren() + " items";
        state.collections = object_array_reverse(snapShot.val())
    })
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


let updateDataFromFirebase = (state, item, key) => {
    // frankly key here is rendundant because key is within item.key
    let { title, link, category } = item;
    state.db.ref('/yonno/'+key).set({
        title: title,
        link: link,
        category: category,
        isEditing: false
    })

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

let filterDataFromFirebase = (state, { child, keyword }) => {
    state.db
    .ref("/yonno")
    .orderByChild(child)
    .startAt(keyword)
    .endAt(keyword.concat("\uf8ff"))
    .on("value", snap => {
      state.collections = snap.val();
    });
}


}


export { 
        getDataFromFirebase, 
        addDataToFirebase,
        updateDataFromFirebase,
        removeDataFromFirebase,
        filterDataFromFirebase
    }
