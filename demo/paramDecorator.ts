const identify = (target: any, key: string, i: number) => {
  const originalMethod = target[key];
  target[key] = (...args) => {
    const value = args[i];
    value.uid = Math.random() * 1000;
    return originalMethod.apply(this, args);
  };
  // why this must return something except undefined/null
  return target[key];
};

class User {
  print(@identify user: { name: string; age: number }) {
    console.log(user);
  }
}

const user = new User();

user.print({ name: 'test', age: 12 });
