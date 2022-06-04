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
    tableContainer.innerHTML=` <th className="text-center">${count}</th>
    <td>${inputValue}</td>
    <td><button className="btn btn-danger">Delete</button><button className="btn btn-primary ms-3">Done</button></td>`
    mainContainer.appendChild(tableContainer);

    document.getElementById('field_input').value=""




}

})