import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__/**"],
      }),
      postcss({
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
        extract: false,
      }),
      terser(),
    ],
  },
  {
    input: "dist/cjs/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/, /\.scss$/, /\.less$/, /\.styl$/],
  },
];


//     plugins: [
//       // NEW
//       typescript(),
//       peerDepsExternal(),

//       resolve(),
//       commonjs(),

//       // NEW
//       terser(),
//     ],

//   {
//     input: 'dist/cjs/types/src/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'esm' }],
//     plugins: [dts.default()],
//     external: [/\.css$/],
//   },
// ]
