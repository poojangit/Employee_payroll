
 const daySelect = document.getElementById('day');
 for (let day = 1; day <= 31; day++) {
     const option = document.createElement('option');
     option.value = day;
     option.textContent = day;
     daySelect.appendChild(option);
 }

 const monthSelect = document.getElementById('month');
 for (let month = 1; month <= 12; month++) {
     const option = document.createElement('option');
     option.value = month;
     option.textContent = month;
     monthSelect.appendChild(option);
 }

 const yearSelect = document.getElementById('year');
 const currentYear = new Date().getFullYear();
 const startYear = 2000;
 for (let year = startYear; year <= currentYear; year++) {
     const option = document.createElement('option');
     option.value = year;
     option.textContent = year;
     yearSelect.appendChild(option);
 }

document.addEventListener('DOMContentLoaded', (event) => {
    let form = document.querySelector('.payroll-form');
    let editEmp = JSON.parse(localStorage.getItem('editEmp'));

    if (editEmp) {
        document.getElementById('userName').value = editEmp.userName || '';
        
        let profileElement = document.querySelector(`input[name="profile"][value="${editEmp.profileImg}"]`);
        if (profileElement) {
            profileElement.checked = true;
        }

        let genderElement = document.querySelector(`input[name="gender"][value="${editEmp.gender}"]`);
        if (genderElement) {
            genderElement.checked = true;
        }

        editEmp.departments.forEach(dep => {
            let depElement = document.querySelector(`input[name="department"][value="${dep}"]`);
            if (depElement) {
                depElement.checked = true;
            }
        });

        document.getElementById('salary').value = editEmp.salary || '';
        
        let startDate = editEmp.startDate ? editEmp.startDate.split('-') : ['', '', ''];
        document.getElementById('day').value = startDate[0];
        document.getElementById('month').value = startDate[1];
        document.getElementById('year').value = startDate[2];
        
        document.getElementById('notes').value = editEmp.notes || '';
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = document.getElementById('userName').value;
        let profile = document.querySelector('input[name="profile"]:checked')?.value;
        let gender = document.querySelector('input[name="gender"]:checked')?.value;
        let departments = Array.from(document.querySelectorAll('input[name="department"]:checked')).map(dep => dep.value);
        let salary = document.getElementById('salary').value;
        let day = document.getElementById('day').value;
        let month = document.getElementById('month').value;
        let year = document.getElementById('year').value;
        let startDate = `${day}-${month}-${year}`;
        let notes = document.getElementById('notes').value;

        let employees = JSON.parse(localStorage.getItem('users')) || [];
        if (editEmp) {
            employees = employees.map(emp => emp.userName === editEmp.userName ? {
                userName: name,
                profileImg: profile,
                gender: gender,
                departments: departments,
                salary: salary,
                startDate: startDate,
                notes: notes
            } : emp);
            localStorage.removeItem('editEmp');
        } else {
            let employee = {
                userName: name,
                profileImg: profile,
                gender: gender,
                departments: departments,
                salary: salary,
                startDate: startDate,
                notes: notes
            };
            employees.push(employee);
        }
        localStorage.setItem('users', JSON.stringify(employees));
        alert('Data submitted successfully!');
        window.location.href = './Emp_dashboard.html';
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        form.reset();
    });

    document.getElementById('cancel-btn').addEventListener('click', (event) => {
        event.preventDefault();
        form.reset();
        window.location.href = './Emp_dashboard.html';
    });
});
