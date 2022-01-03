module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which Atomic design level?",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the component name?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const normalize = (string) => {
        const prefix = "s";
        const _string = string.split("");

        if (string.length === 1 || _string[0].toLowerCase() !== "s") {
          _string.unshift(prefix);
          console.log("Component name added prefix:", prefix);
        }

        _string[0] = _string[0].toUpperCase();
        _string[1] = _string[1].toUpperCase();
        return _string.join("");
      };

      answers.component_name = normalize(answers.component_name);

      const { category, component_name } = answers;

      const path = `${category}/${component_name}`;
      const absPath = `src/components/${path}`;
      return { ...answers, path, absPath, category };
    });
  },
};
