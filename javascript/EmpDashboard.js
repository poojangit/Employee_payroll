function createTableRow(empData) {
  let tableRow = ""
  // let empData = []
  for (let emp of empData) {
    tableRow = tableRow + `<tr>
    <td class="img-th"><img src=${emp.profileImg} alt=""></td>
    <td class="name-th"><span>Amarpa Shashanka</span></td>
    <td class="gender-th"><span>Female</span></td>
    <td class="dept-th"class="dept-fields">
        <a href="">sales</a>
        <a href="">HR</a>
        <a href="">Finance</a>
    </td>
    <td class="sal-th"><span>10,000</span></td>
    <td class="date-th"><span> 29 Oct 2001</span></td>
    <td class="action-th" class="action-icon"><i  class="fa-solid fa-trash-can"></i><i class="fa-solid fa-pen"></i></td>
  </tr>`
  }
}



<img src="/assests/bin.png" alt="delete" width="20px" height="24px" onclick="deleteEmp('${ele.userName}')"></img>