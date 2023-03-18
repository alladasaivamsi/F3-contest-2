let btn = document.getElementById("btn");

function PromiseAPI1()
{
  return new Promise((resolve , reject) => 
  {
    setTimeout(() => 
    {
      resolve(
        fetch("https://dummyjson.com/posts")
           .then((response) => response.json())
           .then((data) => 
           {
                let item = data.posts;
                let content1 = document.getElementById("content1");

                item.map((posts)=> 
                {
                    content1.innerHTML += 
                    `
                        <div class = "section1">
                            <div class = "posts-id"><span>Id : </span>${posts.id}</div><br>
                            <div class = "posts-title"><h3>Title : </h3>${posts.title}</div><br>
                            <div class = "posts-body"><h3>Body : </h3>${posts.body}</div><br>
                            <div class = "posts-tags"><h3>Tags : </h3>${posts.tags}</div>
                        </div>
                    `;
                })
           })
      )
    resolve = true;
    } , 1000)
  })
}

function PromiseAPI2()
{
  return new Promise((resolve , reject) => 
  {
    setTimeout(() => 
    {
      resolve(
        fetch("https://dummyjson.com/products")
           .then((response) => response.json())
           .then((data) => 
           {
                let item2 = data.products;
                let content2 = document.getElementById("content2");

                item2.map((products)=> 
                {
                    content2.innerHTML += 
                    `
                        <div class = "section2">
                            <div class = "products-id"><span>Id : </span>${products.id}</div><br>
                            <div class = "products-title"><h3>Title : </h3>${products.title}</div><br>
                            <div class = "products-description"><h3>Description : </h3>${products.description}</div><br>
                            <div class = "products-price"><h3>Price : </h3>${products.price}</div>
                            <div class = "products-discountpercentage"><h3>Discount Percentage : </h3>${products.discountPercentage}</div>
                        </div>
                    `;
                })
           })
      )
    resolve = true;
    } , 2000)
  })
}

function PromiseAPI3()
{
  return new Promise((resolve , reject) => 
  {
    setTimeout(() => 
    {
      resolve(
        fetch("https://dummyjson.com/todos")
           .then((response) => response.json())
           .then((data) => 
           {
                let item2 = data.todos;
                let content3 = document.getElementById("content3");

                item2.map((todos)=> 
                {
                    content3.innerHTML += 
                    `
                        <div class = "section1">
                            <div class = "todos-completed"><span>Completed : </span>${todos.completed}</div><br>
                            <div class = "todos-id"><span>Id : </span>${todos.id}</div><br>
                            <div class = "todos-todo"><span>ToDo : </span>${todos.todo}</div><br>
                            <div class = "todos-userId"><span>User ID : </span>${todos.userId}</div>
                        </div>
                    `;
                })
           })
      )
    resolve = true;
    } , 3000)
  })
}

let promise1Data = document.querySelector(".promise1Data");
let promise2Data = document.querySelector(".promise2Data");
let promise3Data = document.querySelector(".promise3Data");

btn.addEventListener("click" , () =>
{
    PromiseAPI1()
    .then((data1) => PromiseAPI2(data1))
    .then((data2) => PromiseAPI3(data2));
    
    promise1Data.style.display = "block";
    promise2Data.style.display = "block";
    promise3Data.style.display = "block";
});