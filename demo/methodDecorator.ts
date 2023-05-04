function log(target, name, descriptor) {
  const original = descriptor.value;
  if (typeof original === 'function') {
    descriptor.value = function (...args) {
      console.log(`Arguments: ${args}`);
      try {
        const result = original.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
      } catch (e) {
        console.log(`Error: ${e}`);
        throw e;
      }
    };
  }
  return descriptor;
}

class BugReport {
  type = 'report';
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  @log
  getTitle() {
    return this.title;
  }
}

const bugReport = new BugReport('x');
console.log('getTitle', bugReport.getTitle());
console.log('bugReport', bugReport);
