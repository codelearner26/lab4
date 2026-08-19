const buffer=Buffer.from("Hello");
console.log("Buffer");
console.log(buffer);
console.log("String:",buffer.toString());
console.log("length:",buffer.length);
const buf=Buffer.alloc(10);
buf.write("Node.JS");
console.log(buf);
console.log(buf.toString());