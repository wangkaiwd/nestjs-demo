import 'reflect-metadata';

const formatMetadataKey = Symbol('format');

function format() {
  return (target, propertyKey: string) => {
    console.log('target', target.constructor, propertyKey);
  };
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class Greeter {
  @format()
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    const formatString = getFormat(this, 'greeting');
    return formatString.replace('%s', this.greeting);
  }
}

// const greeter = new Greeter('hi john');

// console.log(greeter.greet());
