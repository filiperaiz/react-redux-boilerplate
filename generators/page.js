module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da página?'
      },
      {
        type: 'list',
        name: 'category',
        message: 'Qual a categoria?',
        choices: ['public', 'private']
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{lowerCase category}}/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/component.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{lowerCase category}}/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{lowerCase category}}/{{pascalCase name}}/test.jsx',
        templateFile: 'templates/test.jsx.hbs'
      }
    ]
  })
}
