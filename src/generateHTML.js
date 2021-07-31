// create manager card
const createMgr = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 shadow">
            <div class="card-header bg-primary text-white">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`;
}

// create engineer card 
const createEng = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 shadow">
            <div class="card-header bg-primary text-white">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">engineering</i>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.githubUser}" target = "_blank">${engineer.githubUser}</a></p>
            </div>
        </div>
    </div>`;
}

// create intern card 
const createInt = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100 shadow">
            <div class="card-header bg-primary text-white">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">badge</i>
            </div>
            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.schoolInfo}</p>
            </div>
        </div>
    </div>`;  
}

generateHTML = (data) => {

    let teamRoster = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createMgr(employee);

            teamRoster.push(managerCard);
        }

        if (role == 'Engineer') {
            const engineCard = createEng(employee);

            teamRoster.push(engineCard);
        }

        if (role === 'Intern') {
            const internCard = createInt(employee);

            teamRoster.push(internCard);
        }
    };

    const roster = teamRoster.join('');
    const generateRoster = generateTeam(roster);

    return generateRoster;
}

const generateTeam = (roster) => {
    return `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        </head>
        <body>
            <div>
                <nav class="navbar bg-danger text-white">
                    <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text"><h1>My Team</h1></span>
                </nav>
            </div>
            <div>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        ${roster}
                    </div>
                </div>
            </div>
      
        </body>

        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `;
}

module.exports = generateHTML;