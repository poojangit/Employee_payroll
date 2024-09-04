
document.addEventListener('DOMContentLoaded', () => {
  function createTableRow(empData) {
    let count = 0
      let tableRows = '';
      for (let emp of empData) {
        console.log(emp);
          tableRows += `<tr>

              <td class="img-th"><img src=${emp.profileImg} alt=""></td>
              
              <td class="name-th"><span>${emp.userName}</span></td>
              <td class="gender-th"><span>${emp.gender}</span></td>
              <td class="dept-th" class="dept-fields">
                  ${emp.departments.map(dep => `<a href="">${dep}</a>`).join(' ')}
              </td>
              <td class="sal-th"><span>${emp.salary}</span></td>
              <td class="date-th"><span>${emp.startDate}</span></td>
              <td class="action-th" class="action-icon">
                  <i class="fa-solid fa-trash-can" onclick="deleteEmp('${emp.userName}')"></i>
                  <i class="fa-solid fa-pen" onclick= "editEmp('${emp.userName}')"></i>
              </td>
          </tr>`;
          count++
      }
      document.getElementById('emp-count').innerHTML= `( ${count} )`
      return tableRows;
  }


  function loadEmployeeData() {
      let employees = JSON.parse(localStorage.getItem('users')) || [];
      let tableBody = document.querySelector('tbody');
      tableBody.innerHTML = createTableRow(employees); 
  }
  
  function deleteEmp(userName) {
      let employees = JSON.parse(localStorage.getItem('users')) || [];
      employees = employees.filter(emp => emp.userName !== userName);
      localStorage.setItem('users', JSON.stringify(employees));
      // confirm(`Are you sure you want to delete ${userName} details`)
      loadEmployeeData();
  }
  function editEmp(userName) {
    let employees = JSON.parse(localStorage.getItem('users')) || []
    let employee = employees.find(emp => emp.userName === userName)
    localStorage.setItem('editEmp', JSON.stringify(employee))
    window.location.href = './Emp_Register_Form.html'
    // alert("Data edited successfully")
  }
  loadEmployeeData()

  window.deleteEmp = deleteEmp;
  window.editEmp = editEmp


    let searchRef = document.getElementById('searchInput')
    let employees = JSON.parse(localStorage.getItem('users'));

    console.log(employees)
    searchRef.addEventListener('keyup', ()=>{
      console.log(searchRef.value)
     let searchedEmp = employees.filter(emp => {
      if( emp.userName.includes(searchRef.value)){
        return emp
      }
    })
  
    let tableBody = document.querySelector('tbody');
    tableBody.innerHTML = ""
    tableBody.innerHTML = createTableRow( searchedEmp)
    console.log(searchedEmp)
    })

     
  document.getElementById('add-user-btn-id').addEventListener('click', ()=>{
    localStorage.removeItem('editEmp')
    window.open("./Emp_Register_Form.html")
  })
  }
  
)
