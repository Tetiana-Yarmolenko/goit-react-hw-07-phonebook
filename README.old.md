# goit-react-hw-07-phonebook

npx create-react-app . --use-npm

npm i prop-types

линтинг npm install --save-dev prettier husky lint-staged

Проверяем настройки VSCode(autoSeve - onFocusChange; formatOnSave - вкл; codeActionsOnSave - all)

Добавляем настройки в проект(https://github.com/goitacademy/react-lint-config)

настраиваем абсолютные импорты (https://create-react-app.dev/docs/importing-a-component/#absolute-imports) (создаем файл jsconfig.json,вставляем... после чего можно писать import Button from 'components/Button'; без ../../../)

Ставим пакет [https://reactrouter.com/core/guides/quick-start] - (npm install react-router-dom)

Анимированная стилизация npm install react-transition-group

Redux - npm i redux

React-redux - npm i react-redux

Redux DevTools (http://extension.remotedev.io/) - npm install --save-dev redux-devtools-extension

В файл с редьюсером import { createStore, applyMiddleware } from 'redux'; import { composeWithDevTools } from 'redux-devtools-extension'; const store = createStore(reducer, composeWithDevTools());

Redux Toolkit - npm install @reduxjs/toolkit

logger [https://github.com/LogRocket/redux-logger] - показывает все actions красиво в консоле

deploy on netlify

В корне создать файл netlify.toml - ( [build] publish = "build"

[[redirects]] from = "/" to = "/index.html" status = 200)

npm install netlify-cli -g

netlify login

Authorized

package.json ("predeploy": "npm run build", "deploy": "netlify deploy -p")

npm run deploy

Create (enter), enter, name project

netlify open --site

0.12 Coздаем store, папку redux

0.17 Объявляем actions

0.27 На примере Counter создаем в actions increment & decrement

0.30 Пишем под них reducer

0.36 Соединяем все файлы с помощью пакета react-redux. ReduxProvider

0.42 Передаем пропсами state в Counter (mapStateToProps)

0.46 Передаем методы для отправки actions (mapDispatchToProps)

0.53 Переписываем в store весь initialState и соответсвенно весь файл

1.02 Redux DevTools

Композиция редюсеров - import { combineReducers } from 'redux';

Разбиваем отдельно на редьюсеры весь стейт 24 1.17 Рефакторим код

1.24 Переписываем todos, todos-types.js

1.28 todos-reducer.js

1.30 store.js
