const activityInput = document.getElementById('activityInput');
const activityList = document.getElementById('activityList');

function addActivity() {
    if (activityInput.value) {
        const li = document.createElement('li');
        li.innerHTML = `${activityInput.value} <span class="delete" onclick="deleteActivity(this)">delete</span><span class="edit" onclick="editActivity(this)">edit</span>`;
        activityList.appendChild(li);
        activityInput.value = '';
    } else {
        alert('Please enter an activity!');
    }
}

function deleteActivity(item) {
    item.parentElement.remove();
}

function editActivity(item) {
    const newText = prompt('Edit activity', item.parentElement.firstChild.textContent);
    if (newText) {
        item.parentElement.firstChild.textContent = newText;
    }
}
