const sortDescending = function(data, col) {
    return data.sort(function (a, b) {
        if (a[col] > b[col]) { return -1; }
        else if (a[col] < b[col]) { return 1; }
        else { return 0; }
    });
};

const sortAscending = function(data, col) {
    return data.sort(function (a, b) {
        if (a[col] < b[col]) { return -1; }
        else if (a[col] > b[col]) { return 1; }
        else { return 0; }
    });
};

const compilePublications = function(data, begYear, endYear, areas) {
    const compiledPubs = data.filter(pub =>
                                     pub['year'] >= begYear &&
                                     pub['year'] <= endYear &&
                                     areas.includes(pub['area']));
    return compiledPubs;
}

const compileAreas = function(data, load) {
    var lookup = {};
    var result = [];
    for (var author, i = 0; author = data[i++];) {
        var area = author['area'];
        if (!(area in lookup)) {
            result.push(area);
            lookup[area] = 1;
        }
    }
    result = result.sort();
    return result;
}

const compileInst = function(data) {
    var lookup = {};
    var result = [];
    var institutions = [];
    for (var pub, i = 0; pub = data[i++];) {
        if (pub['year'] >= begYear && pub['year'] <= endYear && areasData.includes(pub['area'])) {
            var instName = pub['dept'];
            if (!(instName in lookup)) {
                lookup[instName] = 1;
                institutions.push(instName);
            }
        }
    }
    return institutions;
}

const compileInstitutions = function(data) {
    var lookup = {};
    var result = [];
    var institutions = [];
    var faculty = [];
    for (var pub, i = 0; pub = data[i++];) {
        if (pub['year'] >= begYear && pub['year'] <= endYear && areasData.includes(pub['area'])) {
            var instName = pub['dept'];
            var count = pub['count'];
            var facultyMember = pub['name'];
            var years = endYear - begYear;
            if (!(instName in lookup)) {
                lookup[instName] = 1;
                result.push({'Name': instName,
                             'Faculty': 1,
                             'Publications': count,
                             'Publications per Faculty Member': count,
                             'Annual Publications': count / years,
                             'Faculty Names': [facultyMember]});
                institutions.push(instName);
                faculty.push(facultyMember);
            } else {
                var ind = institutions.indexOf(instName);
                inst = result[ind];
                if (!(facultyMember in faculty)) {
                    inst['Faculty Names'].push(facultyMember);
                    inst['Faculty'] += 1;
                }
                inst['Publications'] += count;
                inst['Publications per Faculty Member'] = inst['Publications'] / inst['Faculty'];
                inst['Annual Publications'] = inst['Publications'] / years;
            }
        }
    }
    return result;
}

const compileAuthors = function(data, begYear, endYear, areas) {
    var lookup = {};
    var result = [];
    for (var author, i = 0; author = data[i++];) {
        var name = author['name'];
        if (!(name in lookup)) {
            lookup[name] = 1;
            result.push({'Author': author['name'],
                         'Institution': author['dept']});
        }
    }
    return result;
}

const filterByText = function() {
    institutions = compileInstitutions(authorData);
    badInd = [];
    for (var i = 0; i < institutions.length; i++) {
        var inst = institutions[i];
        if (!(inst['Name'].includes(document.getElementById('tags').value))) {
            badInd.push(i);
        }
    }
    for (var i = badInd.length; i > 0; i--) {
        institutions.splice(badInd[i - 1], 1)
    }
    console.log(institutions);
    return institutions;
}