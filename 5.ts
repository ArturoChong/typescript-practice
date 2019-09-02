//let a: number[] = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
//let b: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function is_bigger_array(array1: number[], array2: number[]): boolean {
    return array1.length > array2.length ? true : false;
}

function generate_list(size: number): number[] {
    let list: number[] = [];

    for (let i = 0; i < size; i++) {
        let random_number: number = Math.floor((Math.random() * size) + 1);
        list.push(random_number);
    }
    
    return list;
}

let a = generate_list(10);
let b = generate_list(20);

let a_is_bigger: boolean = is_bigger_array(a, b);

let set_a = new Set(a);
let set_b = new Set(b);

let intersection: any;

if ( a_is_bigger ) {
    intersection = a.filter((number: number) => set_b.has(number)); 
}
else {
    intersection = new Set(b.filter((item: number) => set_a.has(item)));
}

console.log(`A: ${a}`);
console.log(`B: ${b}`);

console.log(intersection);