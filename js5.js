function makeBuffer() {
    let buffer = [];

    buffer.clear = function() {
        let clear = buffer.length = 0;
        return clear;
    };

    buffer.print = function() {
        return buffer.join(" ");
    };

    buffer.add = function(value) {
        return buffer.push(value);
    };

    return buffer;
}

let buffer = makeBuffer();

buffer.add("JavaScript");
buffer.add("Вчити");
buffer.add("Потрібно!");

console.log(buffer.print());

buffer.clear();

buffer.add(0);
buffer.add(1);
buffer.add(0);

console.log(buffer.print());