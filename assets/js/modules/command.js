function ready() {

  document.querySelectorAll('.command--copy').forEach(command => {

    const button = document.createElement('button');

    command.append(button);

    button.addEventListener('click', (e) => {

      e.preventDefault();

      const code = command.querySelector('code').innerText.trim();

      navigator.clipboard.writeText(code);

    });

  });

}

export { ready };
