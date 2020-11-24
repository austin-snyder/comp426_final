const renderTable = function() {
    const $visual = $('#visual');
    document.getElementById('visualLabel').innerHTML = 'Ranking<br>';
    var table = beginTable();
    institutions = filterByText();
    console.log(institutions);
    institutionsSorted = sortDescending(institutions, 'Publications');
    for (var i = 0; i < institutionsSorted.length; i++) {
        var row = renderRow(institutionsSorted[i]);
        table += row;
    }
    
    table += endTable();
    document.getElementById('visual').innerHTML = table;
    $visual.on('change', '#tags', function() {
        console.log('updated');
    });
};

const renderRow = function(a) {
    var row = `<tr>`;
    row += `<td>${a['Name']}</td>`;
    row += `<td class="text-center">${a['Publications'] | 0}</td>`;
    row += `<td class="text-center">${a['Faculty']}</td>`;
    row += `<td class="text-center">${a['Annual Publications'] | 0}</td>`;
    row += `</tr>`;
    return row;
};

const beginTable = function() {
    var begTable = '<div class="flex-item flex-column"><div id="instTable" class="custom-table-container center add-top-margin-small">';
    begTable += '<table class="custom-table" style="overflow-y:scroll; height:500px; display:block;"><thead>';
    begTable += '<tr class="bg-color-gray">';
    begTable += '<th>Institution Name</th>';
    begTable += '<th class="text-center">Publication Count</th>';
    begTable += '<th class="text-center">Faculty</th>';
    begTable += '<th class="text-center">Annual Publications</th>';
    begTable += '</tr></thead><tbody></div></div>';
    return begTable;
};

const endTable = function() {
    var endTable = '</tbody></table>';
    return endTable;
};