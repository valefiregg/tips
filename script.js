const link = "https://www.boycatec.wipuc.com/";
const copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(link);
  } catch (e) {
    const area = document.createElement("textarea");
    area.value = link;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  copyButton.textContent = "ENLACE COPIADO ✓";
  setTimeout(() => {
    copyButton.textContent = "COPIAR ENLACE";
  }, 1800);
});
