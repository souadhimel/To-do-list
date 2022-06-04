let count=0;


document.getElementById('button_add').addEventListener('click',
function() {
    count++
    const inputValue=document.getElementById('field_input').value;

if (inputValue=='') {
  alert('Please enter a value');  
}
else{

    const mainContainer=document.getElementById('table_container')
    const tableContainer=document.createElement('tr');
    tableContainer.innerHTML=` <th class="text-center">${count}</th>
    <td class="text-center">${inputValue}</td>
    <td class="text-center"><button class="btn btn-danger">Delete</button><button class="btn btn-primary ms-3">Done</button></td>`
    mainContainer.appendChild(tableContainer);

    document.getElementById('field_input').value=""




}

})