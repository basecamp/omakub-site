function ready() {

  document.querySelector('.button--command').addEventListener('click', (e) => {

    e.preventDefault();

    const commandText = document.getElementById('command').innerText.trim();

    navigator.clipboard.writeText(commandText);

  });

}

export { ready };
