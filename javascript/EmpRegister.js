
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


// window.addEventListener("DOMContentLoaded", ()=> {
//     let submitRef = document.getElementById('submit-btn')
//     submitRef.addEventListener('click', ()=> {
//         alert("Data submitted successfully")
//     })
// })

// window.addEventListener("DOMContentLoaded", ()=>{
//     let cancelRef = document.getElementById('cancel-btn')
//     cancelRef.addEventListener('click', ()=> {

//     })
// })

document.addEventListener('DOMContentLoaded', (event) => {
    let form = document.querySelector('.payroll-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let profile = document.querySelector('input[name="profile"]:checked')?.value;
        let gender = document.querySelector('input[name="gender"]:checked')?.value;
        let departments = Array.from(document.querySelectorAll('input[name="department"]:checked')).map(dep => dep.value);
        let salary = document.getElementById('salary').value;
        let day = document.getElementById('day').value;
        let month = document.getElementById('month').value;
        let year = document.getElementById('year').value;
        let startDate = `${day}-${month}-${year}`;
        let notes = document.getElementById('notes').value;
        let users= JSON.parse(localStorage.getItem('users')) || []  
        let employee = {
            userName:  name,
            profileImg : profile,
            gender : gender,
            departments : departments,
            salary : salary,
            startDate : startDate,
            notes : notes
        }
        users.push(employee)
        localStorage.setItem('users', JSON.stringify(users));
        // form.reset();
        alert('Data submitted successfully!');
    });

    document.getElementById('reset-btn').addEventListener('click', ()=> {
        form.reset()
    })

    document.getElementById('cancel-btn').addEventListener('click', ()=> {
        form.reset()
        window.open("./Emp_dashboard.html")
    })
});



