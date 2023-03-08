/* Purchase Section */

//Toggle Between Small Quantity and Case
document.querySelector(".smallQ-btn").addEventListener("click", () => {
  document
    .querySelector(".product-img")
    .setAttribute("src", "../../img/product/bandage-1.jpg");
});

document.querySelector(".case-btn").addEventListener("click", () => {
  document
    .querySelector(".product-img")
    .setAttribute("src", "../../img/product/bandage-1-case.jpg");
});

//Increase and Decrease Quantity
let plus = document.querySelector(".fa-plus");
let minus = document.querySelector(".fa-minus");
let remove = document.querySelector(".remove");
let total = document.querySelector(".total-value").innerHTML.slice(1);
let newTotal = Number(total);

plus.addEventListener("click", () => {
  document.querySelector(".cart-quantity").innerHTML++;
  newTotal += Number(total);
  document.querySelector(".total-value").innerHTML = "$" + newTotal.toFixed(2);
});

minus.addEventListener("click", () => {
  if (document.querySelector(".cart-quantity").innerHTML > 1) {
    document.querySelector(".cart-quantity").innerHTML--;
    newTotal -= Number(total);
    document.querySelector(".total-value").innerHTML =
      "$" + newTotal.toFixed(2);
  }
});

remove.addEventListener("click", () => {
  document.querySelector(".total-value").innerHTML = "$" + total;
  document.querySelector(".cart-quantity").innerHTML = 1;
});

/* Review Section */
//New Review Toggle
let click = 0;
document.querySelector(".review-outline-btn").addEventListener("click", () => {
  if (click === 0) {
    document.querySelector(".new-review-box").style.display = "block";
    click++;
  } else {
    document.querySelector(".new-review-box").style.display = "none";
    click--;
  }
});

//Rating Info On Hover
let ratingRadio = document.querySelectorAll(".rating");

for (let i = 0; i < ratingRadio.length; i++) {
  ratingRadio[i].addEventListener("mouseover", function (e) {
    let id = ratingRadio[i].getAttribute("id");
    console.log(id);
    let span = document.createElement("span");
    span.classList.add("rating-info");
    span.innerHTML = `(${id} out of 5 stars)`;
    span.style.position = "absolute";
    document.querySelector(".label-rating").append(span);
  });

  ratingRadio[i].addEventListener("mouseout", function (e) {
    document.querySelector(".rating-info").remove();
  });
}

//Change UI on different device
let reviewRow = document.querySelectorAll(".form-inline.row");
let purchaseRow = document.querySelectorAll(".purchase-section .row");

if (window.innerWidth <= 990) {
  purchaseRow.forEach((element) => {
    element.children[0].classList.remove("col-6");
    element.children[1].classList.remove("col-6");
  });

  reviewRow.forEach((element) => {
    element.children[0].classList.remove("col-6");
    element.children[1].classList.remove("col-6");
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 990) {
    purchaseRow.forEach((element) => {
      element.children[0].classList.remove("col-6");
      element.children[1].classList.remove("col-6");
    });

    reviewRow.forEach((element) => {
      element.children[0].classList.remove("col-6");
      element.children[1].classList.remove("col-6");
    });
  } else {
    purchaseRow.forEach((element) => {
      element.children[0].classList.add("col-6");
      element.children[1].classList.add("col-6");
    });

    reviewRow.forEach((element) => {
      element.children[0].classList.add("col-6");
      element.children[1].classList.add("col-6");
    });
  }
});
