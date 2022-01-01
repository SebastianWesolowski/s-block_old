import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";

import packageJson from "./package.json";

const external = [
  "react",
  "react-dom",
  "@emotion/styled",
  "@mui/icons-material",
  "@mui/material",
  "@mui/styled-engine-sc",
];

const plugins = [
  peerDepsExternal(),
  resolve({
    browser: true,
  }),

  commonjs(),
  babel({
    babelHelpers: "bundled",
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
];

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
    external,
  },
  {
    input: "./distTS/index.js",
    output: [
      {
        dir: "./lib/es",
        format: "es",
        compact: true,
        preserveModules: true,
        preserveModulesRoot: "./distTS",
      },
    ],
    plugins,
    external,
  },
  {
    input: "./distTS/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        compact: true,
      },
    ],
    plugins,
    external,
  },
];

export default config;
