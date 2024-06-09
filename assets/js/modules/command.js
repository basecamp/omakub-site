function ready() {

  const commandListener = (button, code) => {

    document.querySelector(button).addEventListener('click', (e) => {

      e.preventDefault();

      const commandText = document.querySelector(code).innerText.trim();

      navigator.clipboard.writeText(commandText);

    });

  };

  commandListener('.header__buttons .button--command', '.header__command pre code');
  commandListener('.command--copy button', '.command--copy pre code');

}

export { ready };
