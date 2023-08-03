/*const receivesAFunction = (callback) => {
  callback();
};*/

const receivesAFunction = (callback) => callback();

/*receivesAFunction(function () {
  console.log('The callback function return');
});*/

/*receivesAFunction(() => {
  console.log('The callback function return');
});*/

receivesAFunction(() => console.log('The callback function return'));

/*const returnsANamedFunction = () => {
  const namedFunction = () => {
    console.log('Named function return');
  };
  return namedFunction;
};

const myNamedFunction = returnsANamedFunction();
myNamedFunction();*/

const returnsANamedFunction = () => namedFunction = () => console.log('Named function return');
const myNamedFunction = returnsANamedFunction();
myNamedFunction();

const returnsAnAnonymousFunction = () => {
  return () => {
    console.log('Anonymous function return!');
  };
};

const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction();

/*const returnsAnAnonymousFunction = () => () => {
  console.log('Anonymous function return!');
};

const myAnonymousFunction = returnsAnAnonymousFunction();
myAnonymousFunction();*/



