class Hello {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}
const hello = new Hello("shiva");
hello.sayHello();
