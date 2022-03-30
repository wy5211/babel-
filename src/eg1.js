import '@babel/polyfill';

const fn = () => {
  return new Promise((resolve, reject) => {
    resolve({ success: true, result: [7, 8, 9] });
  });
};

const arr = Array.from([1, 2, 3]);

const list = [4, 5, 6].map((item) => item);

const getList = async () => {
  const res = await fn();
  const newList = [...arr, ...list, ...res?.result];
  console.log('new List', newList);
};

getList();