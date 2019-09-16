import { object_array_reverse } from './helper_function';


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

}

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

export { 
  getDataFromFirebase,
  updateDataFromFirebase,
  addDataToFirebase,
  removeDataFromFirebase
}