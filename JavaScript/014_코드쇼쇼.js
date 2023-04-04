// step 1
fetch("http://test.api.weniv.co.kr")
  .then((data) => data.json())
  .then((data) => console.log(data));

// step 2
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item);
    });
  });

// step 3
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item.thumbnailImg);
      console.log(item.productName);
      console.log(item.price);
    });
  });

// 이미지 맞는지 확인
// http://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg

// step 4
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      console.log("http://test.api.weniv.co.kr/" + item.thumbnailImg);
      console.log(item.productName);
      console.log(item.price);
    });
  });

// step 5 DOM을 생성하여 화면에 출력합시다!
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    const main = document.createElement("main");
    data.forEach((item) => {
      // console.log("http://test.api.weniv.co.kr/" + item.thumbnailImg);
      // console.log(item.productName);
      // console.log(item.price);
      const productCard = document.createElement("article");
      const productNimg = document.createElement("img");
      const productName = document.createElement("h2");
      const productPrice = document.createElement("p");

      productName.textContent = item.productName;
      productPrice.textContent = item.price;
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);

      main.appendChild(productCard);
    });
    document.body.appendChild(main);
  });

// step6 DOM을 생성하여 화면에 출력되게 해봅시다!
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    const main = document.createElement("main");
    data.forEach((item) => {
      // console.log('http://test.api.weniv.co.kr/' + item.thumbnailImg)

      const productCard = document.createElement("article");
      const productimg = document.createElement("img");
      const productName = document.createElement("h2");
      const productPrice = document.createElement("p");

      productName.textContent = item.productName;
      productPrice.textContent = item.price;
      productimg.setAttribute(
        "src",
        "http://test.api.weniv.co.kr/" + item.thumbnailImg
      );
      // productimg.attributes
      productCard.appendChild(productimg);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);

      main.appendChild(productCard);
    });
    document.body.appendChild(main);
  });
