const renderForm = function() {
    const $functionForm = $('#primaryFunction');

    checkBoxesHTML = checkBoxes(authorData);
    dropdownHTML = dropdowns();
    document.getElementById('primaryFunctionLabel').innerHTML = 'Special Interests<br>';

    document.getElementById('primaryFunction').innerHTML = checkBoxesHTML;
    document.getElementById('primaryFunction').innerHTML += `<br><br>`;
    document.getElementById('primaryFunction').innerHTML += dropdownHTML;
    $functionForm.on("change", ".filterCheck", filterButton);
    $functionForm.on("change", ".filterDropdown", filterDropdown);
    $functionForm.on("click", "#resetButton", resetButton);
}

const checkBoxes = function(data) {
    var areas = compileAreas(data);
    var columns = 7;
    var l = areas.length;
    var t = Math.floor(l / columns);
    var form = ``;
    for (var i = 0; i < columns; i++) {
        form += `<div class="flex-item flex-column"><form>`;
        for (var j = 0; j < t; j++) {
            ind = i * columns + j;
            if (ind < l) {
                area = areas[ind];
                area_upper = area.toUpperCase();
                form += `<input type="checkbox" id="check_${area}" class="filterCheck" checked>`;
                form += `<label for="check_${area}">${area_upper}</label><br>`;
            }
        }
        form += `</form></div>`;
    }
    return form;
};

const dropdowns = function() {
    var form = `<div class="flex-item flex-column">`;
    form += `<form><label>Choose a beginning year:</label>`;
    form += `<select id="begYearDropdown" class="filterDropdown">`;
    for (var i = 1980; i <= 2020; i++) {
        year = i;
        form += `<option id="beg_${year}" class="filterDropdownOption" value=${year}>${year}</option>`;
    }
    form += `</select><br><br>`;
    form += `<label>Choose an ending year:</label>`;
    form += `<select id="endYearDropdown" class="filterDropdown" value=${endYear}>`;
    for (var i = 1980; i <= 2020; i++) {
        year = i;
        form += `<option id="end_${year}" class="filterDropdownOption" value=${year}>${year}</option>`;
    }
    form += `</select></form></div>`;
    return form;
};

const filterDropdown = function(event) {
    var target = event.currentTarget;
    if (target.id == "begYearDropdown") {
        begYear = target.value;
    } else {
        endYear = target.value;
    }
    console.log('filtered.');
    renderTable(authorData);
}

const filterButton = function(event) {
    var target = event.currentTarget;
    var area = target.id.split("_")[1];
    if (this.checked) {
        areasData.push(area);
    } else {
        ind = areasData.indexOf(area);
        areasData.splice(ind, 1);
    }
    renderTable(authorData);
};

const resetButton = function(event) {
    var target = event.currentTarget;
    for (var i = 0; i < areas.length; i++) {
        area = areas[i];
        id = 'check_' + area;
        document.getElementById(id).checked = true;
    }
};