import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
// import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";

import packageJson from "./package.json";

const config = [
  {
    input: "./distTS/index.d.ts",
    output: [
      {
        file: packageJson.types,
        format: "es",
        compact: true,
      },
    ],
    plugins: [
      dts(),
      scss({
        output: false,
      }),
    ],
  },
  {
    input: "./distTS/index.js",
    output: [
      {
        file: packageJson.module,
        format: "es",
        compact: true,
      },
      {
        file: packageJson.main,
        format: "cjs",
        compact: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
      }),

      commonjs(),
      babel({
        comments: false,
        compact: true,
        minified: true,
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      scss({
        output: "lib/main.css",
        outputStyle: "compressed",
      }),
      terser(),
    ],
  },
];

export default config;
