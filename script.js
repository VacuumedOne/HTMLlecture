console.log("Hello World");

onload = function () {
  setInterval(updateDate, 1000);
}

function updateDate() {
  console.log("Update");

  let obj = document.querySelector("#time");

  let time = new Date();
  let year = time.getFullYear(); // 2020
  let month = time.getMonth() + 1; // 2
  let date = time.getDate() // 19
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  obj.textContent = "今日は" + year + "年" + month + "月" + date + "日" + hour + "時" + minute + "分" + second + "秒です。";
}

