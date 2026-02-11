const modsSection = document.getElementById("mods");
const modsToggle = document.getElementById("toggleMods")

modsSection.hidden = true;

modsToggle.addEventListener("click", function() {
  modsSection.hidden = !modsSection.hidden;
});