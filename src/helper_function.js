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
        state.collections = object_array_reverse(snapShot.val())
    })
}


let updateDataFromFirebase = (state, item, key) => {
    let { title, link, category } = item;
    state.db.ref('/yonno/'+key).set({
        title: title,
        link: link,
        category: category,
        isEditing: false
    })



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
    object_array_reverse,   
    getDataFromFirebase,
    updateDataFromFirebase,
    addDataToFirebase
}
