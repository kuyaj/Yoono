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

export { object_array_reverse }
