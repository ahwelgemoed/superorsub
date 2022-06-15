<p align="center">

<h1 align="center">Super- or Sub Script</h1>
<p align="center">
</p>
A package to Type Super or Subscript in HTML inputs with minimal setup.
</p>

<p align="center">
<img  align="center" alt="headerIMG" src="https://img.shields.io/github/issues/ahwelgemoed/superorsub/assets/logo.png" target="_blank" />
</p>

#### Demo [Here]()

This is a package that solves and Issue I had some time ago. How to write Chemical Formulas on A website without knowing difficult Key Combos.

This solves a very specific problem and the only reason to make it a package is for someone who might need to do something similar and will be able to fork from or find inspiration form this. When I needed it, I could not find something similar.

## How it works

It adds an event listener when initialized for `focusin`.

It also adds a event listener for `keydown`.

When a user focuses on an input and presses the key Como the packages will "inject" the Unicode char for the Subscript or Superscript.

Under the hood it uses [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) as appose to the unrecommend and deprecated [KeyboardEvent.keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode).

Currently the only supported Key combonatiation are `ctrlKey` + `shiftKey` + `1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -, +, [, ]`

## How to Install

```bash
npm i superorsub
```

or

```bash
yarn add superorsub
```

## How To use it.

```ts
import { SuperorSub } from 'superorsub';

const mySubOrSuper = SubSuper.getInstance({
  subOrSuper: 'supValue',
});

// Toggle isSuper (Function to change isSuperValue)

superorsub.toggleScript();
```

### Initiate Class

Setting `isSuper` to true will make it Type in Super Script, setting it to false will make it Subscript.

### Props/Methods

|                  | Type   | Info                                                                                  |
| ---------------- | ------ | ------------------------------------------------------------------------------------- |
| `toggleScript()` | method | Passing a boolean in this method will change the isSuper to whatever value is passed. |

So you can initiate the Class and set is Super and leave it if only Super or Sub script is necessary. With `toggleSuperorSub` you can make the user toggle between that.

## TODO / ISSUES

- Let user select Key Combos To Trigger
- Add more options than just Numeric Chars (Full list of Alphanumeric)
- Local Dev "superorsub": "file:../."
