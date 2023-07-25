// function Open(mode: string) {
//     console.log(`File opened in "${mode}" mode`)
// }

// Open("Read");
// Open("Write");
// Open("ReadWrite");
// Open("Manish");


// enum Mode { Read, Write, ReadWrite };
// enum Mode { Read = 10, Write = 20, ReadWrite };
enum Mode { Read = "Read", Write = "Write", ReadWrite = "ReadWrite" };
// enum Mode { Read = "Read", Write = 20, ReadWrite  };

function Open(mode: Mode) {
    console.log(`File opened in "${mode}" mode`)
}

Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);