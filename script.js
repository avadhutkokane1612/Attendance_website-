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
    localStorage.setItem("attendance", table.innerHTML);
}

window.onload = function () {
    let data = localStorage.getItem("attendance");
    if (data) {
        document.getElementById("table").innerHTML = data;
    }
}
