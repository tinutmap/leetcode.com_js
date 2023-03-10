# Prerequisites:

- Node https://nodejs.org/en/download/
- Git Setup https://git-scm.com/downloads
  - `git config --global user.name 'Tin Dinh'`
  - `git config --global user.email 'tinutmap@gmail.com'`

# First time setup:

- Git init
  - `git init`
  - Add .gitignore
  - `git remote add origin  <remote url>`
  - `git push --set-upstream origin master`
- Install Jest
  - `npm install --save-dev jest`
  - Optional testing Jest setup, follow https://jestjs.io/docs/getting-started
  - Optional install Jest VSCode extension https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
    - Add `vscode-jest-tests.v2` Debug. See https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest#how-to-debug-tests
- Install prettier formatter:
  - Extension https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
  - add to workspace `settings.json`
    - `"editor.defaultFormatter": "esbenp.prettier-vscode"`
