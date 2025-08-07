// php dashboard code--

document.getElementById("adminForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Page reload na ho

  let password = document.getElementById("password").value;

  // Data bhejna dashboard.php ko
  fetch("dashboard.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "password=" + encodeURIComponent(password)
  })
  .then(res => res.text())
  .then(data => {
    if (data.includes("<table")) {
      document.getElementById("adminForm").style.display = "none"; // form hide
    }
    document.getElementById("ordersTable").innerHTML = data; // table show
  });
});

// Jab dobara dashboard pe aaye to form wapas dikhana
window.addEventListener("hashchange", function() {
  if (window.location.hash === "#dashboard") {
    document.getElementById("adminForm").style.display = "block"; // form show
    document.getElementById("ordersTable").innerHTML = ""; // table hatao
  }
});

