# ✨ Read Time Calculator

Customizable, easy-to-use, zero-dependency read time calculator.

**Typedefinitions are built-in**

[![build](https://img.shields.io/github/workflow/status/barbarbar338/readtime/Build%20and%20Test?logo=github&style=for-the-badge)](https://github.com/barbarbar338/readtime)
[![supportServer](https://img.shields.io/discord/711995199945179187?color=7289DA&label=Support&logo=discord&style=for-the-badge)](https://discord.gg/BjEJFwh)
[![totalDownloads](https://img.shields.io/npm/dt/readtime?color=CC3534&logo=npm&style=for-the-badge)](http://npmjs.com/readtime)
[![weeklyDownloads](https://img.shields.io/npm/dw/readtime?color=CC3534&logo=npm&style=for-the-badge)](http://npmjs.com/readtime)
[![version](https://img.shields.io/npm/v/readtime?color=red&label=Version&logo=npm&style=for-the-badge)](http://npmjs.com/readtime)
[![stars](https://img.shields.io/github/stars/barbarbar338/readtime?color=yellow&logo=github&style=for-the-badge)](https://github.com/barbarbar338/readtime)
[![license](https://img.shields.io/github/license/barbarbar338/readtime?logo=github&style=for-the-badge)](https://github.com/barbarbar338/readtime)

# 🐮 Installation

-   Using NPM: Run `npm install readtime`
-   Using Yarn: Run `yarn add readtime`

# 🧶 Usage

```js
// Simple usage
const { calculate } = require("readtime");

const myText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

calculate(myText); // => returns "less than a minute"

/* -------------------------------------------------------------------- */

// Advanced usage
const { calculate } = require("readtime");

const myText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const options = {
	singular: "dakika",
	plural: "dakika",
	lessThanOne: "bir dakikadan kısa",
	wpm: 200,
};

calculate(myText); // => returns "bir dakikadan kısa"
```

# 🎈 Options

| Name        | Type   | Required | Default            |
| ----------- | ------ | -------- | ------------------ |
| wpm         | Number | ❌       | 200                |
| lessThanOne | String | ❌       | less than a minute |
| singular    | String | ❌       | minute             |
| plural      | String | ❌       | minutes            |

# 🧦 Contributing

Fell free to use Github's features
