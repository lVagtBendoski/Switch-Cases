sweetList = ['BOOberry pies', 'Rice Krispy Brains', '12 Kit Kats', 'Spiderweb Brownies'];
savoryList = ['BIG PIZZA', 'raw meat', 'peeled grapes', 'small pizza']
listContainer = document.getElementById('recipieList');
displaySweetTreats = () =>{
    listContainer.innerHTML = "";
    for(let i = 0; i < sweetList.length; i++){
        console.log(sweetList[i]);
        const li = document.createElement("li");
        li.textContent = sweetList[i];
        listContainer.appendChild(li);
    }
}
displaySavoryTreats = () =>{
    listContainer.innerHTML = "";
    for(let i = 0; i < savoryList.length; i++){
        console.log(savoryList[i]);
        const li = document.createElement("li");
        li.textContent = savoryList[i];
        listContainer.appendChild(li);
    }
}