const commands = [
  {
    command: "whois",
    description: "Shows information about Joost Bijlsma",
    function: whois,
  },

  { command: "clear", description: "Clears the terminal.", function: clear },
  {
    command: "help",
    description: "Shows a list of all possible commands.",
    function: help,
  },
];

const whoisText = `Hey, I am Joost Bijlsma, a full stack web developer and educator in The Netherlands.`;

const terminalEl = document.querySelector("#terminal");
const commandLineEl = document.querySelector("#commandLine");
const inputEl = document.querySelector("#input");

printLine('Welcome! Use "help" to see a list of commands.');

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const command = inputEl.value;
    parseCommand(command);
  }
});

document.addEventListener("click", () => {
  inputEl.focus();
});

function printLine(text, arrow) {
  const lineEl = document.createElement("span");
  lineEl.className = "terminal-line";

  if (arrow) {
    const arrowEl = document.createElement("span");
    arrowEl.innerHTML = ">";
    arrowEl.className = "arrow";
    lineEl.appendChild(arrowEl);
  }
  lineEl.innerHTML += text;

  terminalEl.appendChild(lineEl);
  terminalEl.appendChild(commandLineEl);
  inputEl.value = "";
  inputEl.focus();
}

function parseCommand(command) {
  for (let i = 0; i < commands.length; i++) {
    const checkCommand = commands[i];
    if (checkCommand.command.toLowerCase() === command.toLowerCase().trim()) {
      printLine(command, true);
      checkCommand.function();
      return;
    }
  }

  printLine(
    `Command not found: ${command}. Use "help" to see a list of commands.`
  );
}

function help() {
  for (let i = 0; i < commands.length; i++) {
    const curCommand = commands[i];
    printLine(`${curCommand.command}: ${curCommand.description}`);
  }
}

function clear() {
  document.body.appendChild(commandLineEl);
  terminalEl.innerHTML = "";
  terminalEl.appendChild(commandLineEl);
  inputEl.focus();
}

function whois() {
  printLine(whoisText);
}
