const options = document.createElement('option');
const estados = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Amazonas'];
const select = document.getElementById('state');
const date = document.getElementById('date');
const submitBtn = document.getElementById('submitBtn');


for (let i = 0; i < estados.length; i += 1) {
    const options = document.createElement('option');
    options.value = estados[i]
    options.innerText = estados[i]
    select.appendChild(options)

    console.log(options.value)
};


function teste(e) {
e.target.preventDefault()
let newDiv = document.createElement('div');
newDiv.append()
}

submitBtn.addEventListener('click', teste)


date.DatePickerX.init({
    mondayFirst: true,
    todayButton: true,
    format: 'dd/mm/yy',

});


