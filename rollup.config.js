import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";

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

    plugins: [dts()],
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
      postcss({
        plugins: [],
        minimize: true,
      }),
      terser(),
    ],
  },
];

export default config;
