<div align="center">

![genreLogo](https://user-images.githubusercontent.com/30735738/209177310-e5e7984f-d10b-4177-85f2-f2649f88467e.png)

# Genre-cli 

Genre-cli (GENerate REsource) is a tool for lazy developers to create resources for React components.
</div>

--- 

### Installation
`npm i -g genre-cli`

### Usage
In the directory where you need to create, or where the components folder already is, type: `genre -n <name> -s <style 
file extension>`.

#### Available parameters
| Parameter                       | Description                                       |
|---------------------------------|---------------------------------------------------|
| `-n, --name <name>`             | The name of resource and it's files.              |
| `-s, --style <styleExtension>`  | The extension of stylesheet file - default css.   |
| `-js, --javascript`             | Generates js files instead of ts - default false. |

### Example
```bash
super-awesome-nextjs-app on main 
$ ➜ tree .
.
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── public
│   ├── favicon.ico
│   ├── next.svg
│   ├── thirteen.svg
│   └── vercel.svg
├── styles
│   ├── Home.module.css
│   └── globals.css
└── tsconfig.json

4 directories, 16 files
```

Then
```bash
$ genre -n superButton -s scss
```
```bash
super-awesome-nextjs-app on main
$ ➜ genre -n superButton -s scss
There is no components directory - creating...
components/superButton/superButton.scss created
components/superButton/SuperButton.tsx created
components/superButton/index.ts created
```

In result

```bash
super-awesome-nextjs-app on main
$ ➜ tree .
.
├── README.md
├── components
│   └── superButton
│       ├── SuperButton.tsx
│       ├── index.ts
│       └── superButton.scss
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── public
│   ├── favicon.ico
│   ├── next.svg
│   ├── thirteen.svg
│   └── vercel.svg
├── styles
│   ├── Home.module.css
│   └── globals.css
└── tsconfig.json

6 directories, 19 files
```

---
#### Additionally `index.ts/js` and `Component.tsx/jsx` files are filled with basic structure.

#### index
```ts
export { default as SuperButton } from './SuperButton'
```

#### SuperButton.tsx (component)
```tsx
function SuperButton() {
  return (
    <div>
      <span>SuperButton</span>
    </div>
  );
}
export default SuperButton;
```
