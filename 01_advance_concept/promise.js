const promiseOne = new Promise(function (resolve, reject) {
  //async taks
  //DB  call , network calls
  setTimeout(function () {
    console.log("asyn is compelted");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("prmise comsumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async 2 complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async2 resolve");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "sanjeev", email: "sanjeev@google.com" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "sanjeev", email: "sanjeev@google.com" });
    } else {
      reject("ERROR : Somthing went wrong");
    }
  }, 1000);
})
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((username) => {
    console.log("user name", username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("finally its resolve or rejected");
  });

//its example of promise chaining and then and catch and finally
//finally is default it will always run

const promiseTest = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "sharma", email: "sanjeevsharma@google.com" });
    } else {
      reject("ERROR : Js went wrong");
    }
  }, 1000);
});
async function consumePromise() {
  try {
    const response = await promiseTest;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromise();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // we need to use await here also the reson behind this json conversion
    //will also take sometime
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

//getAllUsers();

fetch("https://jsonplaceholder.typicode.com/userss")
  .then((response) => {
    console.log(response.status); //status always comes inside then its not go to catch block
    return response.json();
  })
  .then((data) => console.log("data..................", data))
  .catch((err) => console.log(err));

//.fetch will have higher priorty then other webapi like setitme out and other
