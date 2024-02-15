const getResults = () => {
    const A = getCoordinate(document.getElementById("input-A"));
    const B = getCoordinate(document.getElementById("input-B"));
    const C = getCoordinate(document.getElementById("input-C"));

    const AB = coordinatesDistance(A, B);
    const AC = coordinatesDistance(A, C);
    const BC = coordinatesDistance(B, C);

    const alpha = triangleAngle(BC, AC, AB);
    const beta = triangleAngle(AC, AB, BC);
    const gamma = triangleAngle(AB, BC, AC);
    
    if (alpha + beta + gamma > 179) {
        document.getElementById("results-block").style.display = "block";

        document.getElementById("angle-A").innerHTML = alpha;
        document.getElementById("angle-B").innerHTML = beta;
        document.getElementById("angle-C").innerHTML = gamma;

        document.getElementById("distances-AB").innerHTML = AB;
        document.getElementById("distances-AC").innerHTML = AC;
        document.getElementById("distances-BC").innerHTML = BC;
    } else {
        document.getElementById("results-block").style.display = "none";
        alert("The inserted coordinates are not valid. Insert the geographical coordinates in decimal form.");
    }
};

const clearResults = () => {
    document.getElementById("results-block").style.display = "none";
};

function getCoordinate(input) {
    return input.value.split(' ').map(str => {
        return str[0] === 'N' || str[0] === 'E' ? Number(str.slice(1)) * Math.PI / 180 : 0 - Number(str.slice(1)) * Math.PI / 180;
    });
};

function coordinatesDistance(X, Y) {
    return 2 * 6371 * 10**3 * Math.asin(Math.sqrt(Math.sin((X[0] - Y[0]) / 2)**2 + Math.cos(X[0]) * Math.cos(Y[0]) * Math.sin((X[1] - Y[1]) / 2)**2));
}

function triangleAngle(a, b, c) {
    return Math.acos((b**2 + c**2 - a**2) / (2 * b * c)) * 180 / Math.PI;
};
