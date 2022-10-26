module.exports = function employeeTemplate(data) {

    return `<div class="card">
<div class="card-body">
    <h5 class="card-title text-center">${data.name}</h5>
    <p class="card-text">ID: ${data.id}</p>
    <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
    <p class="card-text">${data.officenumber}</p>
    <p class="card-text">GitHub: ${data.github}</p>
    <p class="card-text">School: ${data.school}</p>
</div>
</div>`;
}