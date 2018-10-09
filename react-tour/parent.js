class Parent {
  static hi() {
    console.log("default Hi");
  }
  constructor(name) {
    console.log("Welcome " + name);
  }
  sayHello() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  constructor(name) {
    console.log(`Hi  ${name}`);
    super(name);
    console.log("cons child");
  }
  sayHi() {
    console.log("Hi from Child");
  }
}

const ch = new Child("shiva kumar");
ch.sayHello();
ch.sayHi();
