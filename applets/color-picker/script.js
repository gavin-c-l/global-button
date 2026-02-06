var count = 0;
var count2 = 0;

const total = 1566;
var found = new Set();
var colorHex;
document.addEventListener('DOMContentLoaded', function() {
    var goal = this.getElementById("goal"); 
    goal.innerHTML = "Colors Found: " + count2 + "/" + total;
    var counter = this.getElementById("counter");
    counter.innerHTML = count;
    var colorname = this.getElementById("text");
    colorname.innerHTML = "White"
    ntc.name("White")[2] = true;
    document.addEventListener('click', function() {
        var chars = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        var hex1 = chars[Math.floor(Math.random() * chars.length)];
        var hex2 = chars[Math.floor(Math.random() * chars.length)];
        var hex3 = chars[Math.floor(Math.random() * chars.length)];
        var hex4 = chars[Math.floor(Math.random() * chars.length)];
        var hex5 = chars[Math.floor(Math.random() * chars.length)];
        var hex6 = chars[Math.floor(Math.random() * chars.length)];
        count += 1;
        counter.innerHTML = count;
        colorHex = '#' + hex1 + hex2 + hex3 + hex4 + hex5 + hex6;
        colorname.innerHTML = ntc.name(colorHex)[1];
        if (!found.has(ntc.name(colorHex)[1])) {
            count2++;
            goal.innerHTML = "Colors Found: " + count2 + "/" + total;
            found.add(ntc.name(colorHex)[1]);
        }
        this.body.style.backgroundColor = (colorHex);
    });
});