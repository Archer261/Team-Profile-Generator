module.exports = function employeeTemplate(data) {

    return `<div class="card">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">${data.id}</p>
    <p class="card-text">${data.email}</p>
    <p class="card-text">${data.officenumber}</p>
    <p class="card-text">${data.github}</p>
    <p class="card-text">${data.school}</p>
</div>
</div>`;
}