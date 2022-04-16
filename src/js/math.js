function mathSelling() {
  const today = [23, 56, 23, 56, 1, 96, 23, 154, 67];
  const yesday = [23, 56, 23, 56, 24, 33, 89, 35];
  const [yes, to] = numberSelling(yesday, today);

  // document.getElementsByClassName('progress').style.display = 'inline';
  // document.querySelectorAll("progress").forEach(a=>a.style.display = "initial");
  document.getElementById("today").innerHTML = to + " Plants Sold This Week";
  document.getElementById("yesday").innerHTML = yes + " Plants Sold Last Week";

  document.getElementById("todayBar").style.width = `${to}%`;
  document.getElementById("yesdayBar").style.width = `${yes}%`;
}

//testing fun
function numberSelling(num1, num2) {
  // console.log(num1)
  // console.log(num2)
  var countOne = 0;
  var countTwo = 0;
  var totalOne = 0;
  var totalTwo = 0;
  num1.map((elem) => (totalOne += elem));
  num2.map((elem) => (totalTwo += elem));

  num1.map((elem) => (countOne += 1));
  num2.map((elem) => (countTwo += 1));

  var avg1 = Math.round(totalOne / countOne, 2);
  var avg2 = Math.round(totalTwo / countTwo, 2);

  return [avg1, avg2];
}

function mathRashHour() {
  const hoursrash = [
    { hour: "2 pm", num: 40, state: "" },
    { hour: "4 pm", num: 50, state: "" },
    { hour: "6 pm", num: 45, state: "" },
    { hour: "8 pm", num: 5, state: "" },
    { hour: "10 pm", num: 10, state: "" },
    { hour: "12 am", num: 0, state: "" },
  ];
  const num = mathNumRashHour(hoursrash);
  // contt = num[0].num >= 100
  // console.log(contt)
  // document.getElementById('me').innerHTML = num[0].hour

  var results = "<tr><th>Time</th><th>States</th></tr>";
  hoursrash.map((elem) => {
    results += `<tr><td>${elem.hour}</td><td>${elem.state}</td></tr>`;
  });
  document.getElementById("table").innerHTML = results;
}

function mathNumRashHour(num) {
  num.forEach((element) => {
    if (element.num > 30 && element.num < 50 && element.hour != "12 am") {
      var x = (element.state = "Busy");
    } else if (element.hour === "12 am") {
      var y = (element.state = "Close");
    } else if (element.num <= 10 && element.hour != "12 am") {
      var m = (element.state = "Not Busy");
    } else if (element.num === 50 && element.hour != "12 am") {
      var n = (element.state = "Full");
    }
  });
  console.log(num);
  return num;
}

const labels = ["2 pm", "4 pm", "6 pm", "8 pm", "10 pm", "12 am"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Rash",
      data: [40, 50, 45, 5, 10, 0],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(153, 102, 255)",
        "rgb(153, 102, 255)",
        "rgb(153, 102, 255)",
      ],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

function chart() {
  // eslint-disable-next-line no-undef
  const myChart = new Chart(document.getElementById("myChart"), config);
}

function all() {
  const speedoftype = 10;
  const backspeedoftype = 100;
  const str = [
    "You can transform a room with minimal effort.liza Blank founded The Sill in 2012. Passionate about plants, she wanted to help demystify them, make them accessible to non-horticulturists and elevate the experience beyond the local garden supply center. She broke new ground with an online plant delivery business that has grown to include stores in New York City, Los Angeles, San Francisco, and Chicago. Hands-on educational workshops are now hosted in-store and online, and the brand vision has expanded beyond plants to include biophilic design that evokes an essential connection to the natural world. As Eliza says, “Plants create time and space to nurture yourself. If you’re not making time for them, you’re probably not making time for yourself either.” The Sill is here to help you connect to plants and nature, so you can cultivate a life well-lived..",
  ];
  // eslint-disable-next-line no-undef
  let typedd = new Typed(".auto-input2", {
    strings: str,
    typeSpeed: speedoftype,
    backSpeed: backspeedoftype,
    loop: false,
  });
  return speedoftype, backspeedoftype, str;
}

function butterfly() {
  timeone();
  timetwo();
  timethree();
  timefour();
}

function timeone() {
  setTimeout(function1, 1000);
}

function function1() {
  const one = (document.getElementById("one").style.display = "inline");
}
function timetwo() {
  setTimeout(function2, 1500);
}

function function2() {
  const two = (document.getElementById("two").style.display = "inline");
}
function timethree() {
  setTimeout(function3, 1700);
}

function function3() {
  const three = (document.getElementById("three").style.display = "inline");
}
function timefour() {
  setTimeout(function4, 2000);
}

function function4() {
  const four = (document.getElementById("four").style.display = "inline");
}
// eslint-disable-next-line no-undef
module.exports = {
  numberSelling,
  mathNumRashHour,
  all,
  timeone,
  timetwo,
  timethree,
  timefour,
};
