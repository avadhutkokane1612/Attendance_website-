function markAttendance() {
    let name = document.getElementById("name").value;
    let status = document.getElementById("status").value;

    if(name === "") {
        alert("Enter name");
        return;
    }

    let table = document.getElementById("table");

    let row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = status;

    // save data
    function markAttendance() {
  let name = document.getElementById("name").value;
  let status = document.getElementById("status").value;
  let table = document.getElementById("table");

  let row = table.insertRow(-1);

  row.insertCell(0).innerHTML = table.rows.length - 1;
  row.insertCell(1).innerHTML = name;
  row.insertCell(2).innerHTML = new Date().toISOString().split('T')[0];
  row.insertCell(3).innerHTML = status;

  // 🔥 important (overwrite)
  localStorage.setItem("attendance", table.innerHTML);
    }
}
console.log("JS WORKING");
window.onload = function () {
    let data = localStorage.getItem("attendance");
    if (data) {
        document.getElementById("table").innerHTML = data;
    }
}
