// import '@babel/polyfill'

function promise() {
  return new Promise((r) => {
    setTimeout(() => {
      r('promise');
    }, 0);
  })
}

const asyncFn = async () => {
 const res =  await promise();
  console.log(res);
}

asyncFn();