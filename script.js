const drums = document.querySelectorAll(".drum");
const litresDrank = document.querySelector(".litres-drank");
const litresRemaining = document.querySelector(".litres-remaining");
const litresRemainingText = litresRemaining.querySelector('span');
const percentDrank = litresDrank.querySelector('p');

let volume = 0;
drums.forEach((drum) => {
  drum.addEventListener("click", (e) => {
    const currentDrum = e.currentTarget;
    if (currentDrum.classList.contains("fill-drum")) {
      currentDrum.classList.remove("fill-drum");
      if (volume == 0) return;
      volume -= 250;
      updateTexts(volume);
      setProperty(litresDrank, 'drank', volume);
      setProperty(litresRemaining, 'remaining', 2000 - volume);
    } else {
      currentDrum.classList.add("fill-drum");
      volume += 250;
      updateTexts(volume)
      setProperty(litresDrank, 'drank', volume);
      setProperty(litresRemaining, 'remaining', 2000 - volume);
    }

  });
});

function setProperty(element, property, volume) {
  const volumePercent = (volume / 2000) * 100;
  element.style.setProperty(`--${property}`, `${volumePercent}%`);
}
function updateTexts(volume){
    litresRemainingText.textContent = `${(2000 - volume) / 1000}L`;
    percentDrank.textContent = `${(volume/2000) * 100}%`
}