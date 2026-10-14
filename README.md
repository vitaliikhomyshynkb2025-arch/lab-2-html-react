# Лабораторна робота 2 — HTML та React

Хомишин Віталій Вікторович, КБ-208. Технології вебпрограмування.

## Частина 1
Відкрити `index.html` у браузері. Семантичне навчальне резюме без CSS і JavaScript.

## Частина 2
React-застосунок із Vite, сім компонентів, передавання props та виведення масиву через map.

```sh
cd lab_2_react
npm ci
npm run dev
```

Адреса сервера виводиться в терміналі. Перевірки:

```sh
npm run lint
npm run build
```

## Структура
- `index.html` — HTML-версія.
- `lab_2_react/src/main.jsx` — точка входу, createRoot та StrictMode.
- `lab_2_react/src/App.jsx` — компонування сторінки та передавання props.
- `lab_2_react/src/components` — Header, About, Education, Experience, Skills, Resources, Footer.

Header отримує name і role. Skills отримує items та виводить список через map із стабільними key. Вміст HTML та React однаковий.

Для перегляду дерева встановити офіційне розширення [React Developer Tools](https://react.dev/learn/react-developer-tools), відкрити застосунок, перезавантажити сторінку й вибрати Components у DevTools.

## Джерела
- https://www.w3schools.com/html/
- https://web.dev/html?hl=ru
- https://react.dev/learn
- https://vite.dev/guide/
