const saveStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem('donation')) || [];
    const exists = saveData.find((item) => item.id == data.id);
    if(!exists){
        saveData.push(data)
        localStorage.setItem('donation', JSON.stringify(saveData));
        alert('successfully added')
    }
    else {
        alert('already exist');
    }
}
export default saveStorage;