// fetch("https://jsonplaceholder.tyicode.com/users")
//   .then((response) => response.text())
//   .then((result) => {
//     const users = JSON.parse(result);
//     console.log(users.length);
//     users.forEach((user) => {
//       console.log(user.name);
//     });
//   });

// fetch("https://learn.codeit.kr/api/topics")
//   .then((response) => response.text())
//   .then((result) => {
//     const topics = JSON.parse(result); // GET 메소드는 JSON.parse()
//     const beginnerLevelTopics = topics.filter(
//       (topic) => topic.difficulty === "초급"
//     );
//     console.log(beginnerLevelTopics);
//   });

// const newMember = {
//   name: "Kaya",
//   email: "kaya@methinks.io",
//   department: "engineering",
// };

// fetch("https://learn.codeit.kr/api/members", {
//   method: "POST",
//   body: JSON.stringify(newMember), // POST 메소드는 JSON.stringify()
// })
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

// const member = {
//   name: "Alice",
//   email: "alice@methinks.io",
//   department: "marketing", // Alice의 부서를 바꿀 때
// };

// fetch("https://learn.codeit.kr/api/members/2", {
//   method: "PUT",
//   body: JSON.stringify(member), // PUT 메소드도 JSON.stringify()
// })
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

// // Alice가 퇴사해서 정보를 지워버리고 싶을 때
// fetch("https://learn.codeit.kr/api/members/2", {
//   method: "DELETE", // DELETE 메소드는 body property 필요없음
// })
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

// Promise
console.log("Start!");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    return users[0];
  })
  .then((user) => {
    console.log(user);
    const { address } = user;
    return address;
  })
  .then((address) => {
    console.log(address);
    const { geo } = address;
    return geo;
  })
  .then((geo) => {
    console.log(geo);
    const { lat } = geo;
    return lat;
  })
  .then((lat) => {
    console.log(lat);
  });
console.log("End");
