// function hello() {
//     console.log("Hello World");
// }

// // Duplicate function implementation not Allowed
// function hello(name: string) {
//     console.log("Hello " + name);
// }

// ------------------------------------
function hello(): void;
function hello(name: string): void;

function hello(...args: string[]): void {
    if (args.length === 0)
        console.log("Hello World");
    else
        console.log("Hello " + args[0]);
}

hello();
hello("Manish");