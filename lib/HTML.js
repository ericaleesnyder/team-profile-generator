function generateManager (employee) { 
  return `<div class="card" style="width: 18rem; margin: 10px;">
  <div class="card-header">
    <h5 class="card-title" style="text-align: center;">${employee.name}</h5>
    <p class="card-text" style="text-align: center;">Manager</p>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item"><a href="mailto: ${employee.email}">${employee.email}</a></li>
      <li class="list-group-item">${employee.officeNumber}</li>
    </ul>
  </div>
</div>`;
}

function generateEngineer (employee) {
  return `<div class="card" style="width: 18rem; margin: 10px;">
  <div class="card-header">
    <h5 class="card-title" style="text-align: center;">${employee.name}</h5>
    <p class="card-text" style="text-align: center;">Engineer</p>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item"><a href="mailto: ${employee.email}">${employee.email}</a></li>
      <li class="list-group-item"><a href="#">${employee.github}</a></li>
    </ul>
  </div>
</div>`;
}

function generateIntern (employee) {
  return `<div class="card" style="width: 18rem; margin: 10px;">
  <div class="card-header">
    <h5 class="card-title" style="text-align: center;">${employee.name}</h5>
    <p class="card-text" style="text-align: center;">Intern</p>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item"><a href="mailto: ${employee.email}">${employee.email}</a></li>
      <li class="list-group-item">${employee.school}</li>
    </ul>
  </div>
</div>`
}

function renderEmployee (employee) {
  switch (employee.getType()) {
    case "Manager":
      generateManager(employee);
      break;
    case "Engineer":
      generateEngineer(employee);
      break;
    case "Intern":
      generateIntern(employee);
      break;
  }
}

function generateHtml (compiledTeam) {
  const employees = compiledTeam.map((employee) => renderEmployee(employee));

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="../dist/style.css">
    <title>My Team</title>
  </head>
  <body>
    <header class="header">
      <h1>My Team</h1>
    </header>
    <main>
      <div class="row card-rows">
        ${employees.join("")}
      </div>
    </main>
    <footer>
  
    </footer>
  </body>
  </html>`
}

module.exports = generateHtml