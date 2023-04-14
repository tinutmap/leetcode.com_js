# Summary:

This repo stores the practice of Data Structure and Algorithm challenges on [leetcode.com](leetcode.com) using Javascript. This has a few highligted advantages over coding directly on [leetcode.com](leetcode.com)'s IDE:

- Testing is set up locally with Jest and VSCode testing framework and can run conveniently without hitting rate limiting or user' rating on [leetcode.com](leetcode.com)
  ![testing](https://github.com/tinutmap/leetcode.com_js/blob/master/static/testing.png?raw=true)
- Abstraction classes and methods for commonly used structures such as linked list have already been coded and tested by the author. See details in and implementation in `./linked_list/base.js` and files that import those.

# Prerequisites:

- Node https://nodejs.org/en/download/. If multiple Node versions needed for different projects on the same dev machine, use https://github.com/volta-cli
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

# Start new challenge/question:

- At project root run `node newQ` and input question number.
