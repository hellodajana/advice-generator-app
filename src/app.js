const loadAvice = async () => {
  try {
    const API_LINK = "https://api.adviceslip.com/advice";
    const res = await fetch(API_LINK, { cache: "no-cache" });
    // console.log(res.ok);
    const data = await res.json();
    const show = data.slip;
    const title = document.getElementById("advice");
    const advice = document.getElementById("text");
    title.innerHTML = `Advice #${show.id}`;
    advice.innerHTML = `"${show.advice}"`;
  } catch (error) {
    console.log(error);
  }
};

const btn = document.getElementById("btn");

window.onload = loadAvice;
btn.addEventListener("click", loadAvice);
