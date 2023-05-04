function reportableClassDecorator<T extends { new (...args: any[]): object }>(
  constructor: T,
) {
  return class extends constructor {
    reportingURL = 'http://www...';
  };
}

@reportableClassDecorator
class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport('Needs dark mode');
console.log(bug.title);
console.log(bug.type);
// add property successfully but ts can't infer its type
// console.log(bug.reportingURL);

export {};
