const modsSection = document.getElementById("mods");
const modsToggle = document.getElementById("toggleMods")

const pythonProjectsSection = document.getElementById("pythonProjects")
const pythonProjectsToggle = document.getElementById("togglePythonProjects")

modsSection.hidden = true;
pythonProjectsSection.hidden = true;

modsToggle.addEventListener("click", function() {
  modsSection.hidden = !modsSection.hidden;
});

pythonProjectsToggle.addEventListener("click", function() {
  pythonProjectsSection.hidden = !pythonProjectsSection.hidden;
});