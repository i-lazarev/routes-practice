//const button = document.querySelector(".btn");
// button.addEventListener("click", () => {
//     randomPhoto()
// });
// let randomPhoto =()=>{
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then(res => res.json())
//       .then(data => {
//         const image = data.message;
//         const imageElement = document.querySelector("img");
//         imageElement.src = image;
//       });
// }
//window.addEventListener("load",randomPhoto());

//--------------------------------------------------------------
//Use this way -------------------------------------------------
//--------------------------------------------------------------

// const button = document.querySelector(".btn");
// const fetchIt = async () => {
//   const fetchResult = fetch("https://dog.ceo/api/breeds/image/random");
//   const myResponse = await fetchResult;
//   const myJsonData = await myResponse.json();
//   const imgUrl = myJsonData.message;
//   document.querySelector("img").src = imgUrl;
// };
// window.addEventListener("load", fetchIt);
// button.addEventListener("click", fetchIt);

//--------------------------------------------------------------
//Use this way with classes-------------------------------------------------
//--------------------------------------------------------------

class MyDogCeo {
  constructor() {
    this.author = "Leandro the Dog CEO";
    this.dogsApi = "https://dog.ceo/api/breeds/image/random";
  }

  async fetchIt() {
    // console.log(this.dogsApi)
    const fetchResult = fetch(this.dogsApi);
    const myResponse = await fetchResult;
    const myJsonData = await myResponse.json();
    const imgUrl = myJsonData.message;
    document.querySelector("img").src = imgUrl;
  }

  init() {
    // console.log(this.dogsApi)
    window.addEventListener("load", () => this.fetchIt());
    document
      .querySelector("button")
      .addEventListener("click", () => this.fetchIt());
  }
}

const MyDogCeoInstance = new MyDogCeo();
MyDogCeoInstance.init();
