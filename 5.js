//let a: number[] = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
//let b: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function is_bigger_array(array1, array2) {
    return array1.length > array2.length ? true : false;
}
function generate_list(size) {
    var list = [];
    for (var i = 0; i < size; i++) {
        var random_number = Math.floor((Math.random() * size) + 1);
        list.push(random_number);
    }
    return list;
}
var a = generate_list(10);
var b = generate_list(20);
var a_is_bigger = is_bigger_array(a, b);
var set_a = new Set(a);
var set_b = new Set(b);
var intersection;
if (a_is_bigger) {
    intersection = a.filter(function (number) { return set_b.has(number); });
}
else {
    intersection = new Set(b.filter(function (item) { return set_a.has(item); }));
}
console.log("A: " + a);
console.log("B: " + b);
console.log(intersection);
