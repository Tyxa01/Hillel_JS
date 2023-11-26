
/* 1. Створити модуль api_helper.js, в якому будуть реалізовані функції посилання get та post запитів
та десеріалізація респонсу у json об'єкт, який вони будуть повертати (при реалізації поста зверніть увагу на хедери, 
які вказані у інструкції під блоком Post with JSON). Для створення запитів використати пакет
node-fetch, інструкця по використанню тут https://www.npmjs.com/package/node-fetch?activeTab=readme, для 
реалізації асинхронності використати async/await */

import * as request from "./api_helper/api_helper.js";

 const baseUrl = "https://jsonplaceholder.typicode.com/posts/";

/* 2. Реалізувати функцію getPostsByUsedId, яка буде знаходити пости з ресурсу https://jsonplaceholder.typicode.com/posts та робити 
вибірку постів за id користувача. Також у всіх відфільтрованих постів повинна бути відсутня властивість title */

async function getPostsByUsedId(url, userId) {
  const response = await request.getRequest(url);
  const filteredPosts = response.filter((post) => post.userId === userId);
  filteredPosts.forEach((post) => delete post.title);
  return filteredPosts;
}

const posts = await getPostsByUsedId(baseUrl, 5);
console.log(posts); // маємо тільки пости юзера з id = 5, у яких нема title

/* 3. Реалізувати функцію createNewPost, яка буде створювати новий пост на ресурсі https://jsonplaceholder.typicode.com/posts */
const body = {
  userId: 155,
  title: "New title",
  body: "New body",
};
async function createNewPost(url, body) {
let response =  request.postRequest(url,body)
return response
}

const result = await createNewPost(baseUrl, body);
console.log(result); // повинен буди респонс у вигляді { userId: 155, title: 'New title', body: 'New body', id: 101 }

/* 4. Використовуючи синтаксис промісів створити функцію, яка генерує рандомне число від 0 до 10 та з затримкою в 3 секунди
резолвить проміс з результатом "Resolved <число>" у випадку, якщо число більше 5ти, або повертає reject з 
результатом "Rejected <число>", якщо число меньше 5ти. Reject обробити через catch. */
function resolveNumber() {
   let promise = new Promise ((resolve,reject) => {
    setTimeout (() => {
      const number = Math.round(Math.random() * 10)
      if (number>=5) {
        resolve ("Resolved"+ number)
      }else{
        reject ("Rejected" + number)
      }
    }, 3000)
  
   })
   return promise
}
resolveNumber()
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
}); //далі обробка промісу, в консолі або, наприклад, Resolved 7, або Rejected 2 (в залежності від рандомно створенного числа)