const loadAvice = async () => {
  try {
    const API_LINK = "https://api.adviceslip.com/advice";
    const res = await fetch(API_LINK);
    // console.log(res.ok);
    const data = await res.json();
    // console.log(data);
    const title = document.getElementById("advice");
    const advice = document.getElementById("text");
    title.innerHTML = `Advice #${data.slip.id}`;
    advice.innerHTML = `"${data.slip.advice}"`;
  } catch (error) {
    console.log(error);
  }
};

const btn = document.getElementById("btn");

window.onload = loadAvice;
btn.addEventListener("click", loadAvice);
