import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  mode: "jit",
  darkMode: 'class',
  content: [
    `./components/**/*.{vue,js}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  safelist: [
    ...[...Array(20).keys()].flatMap(i => [`top-[${i*5}%]`]),
    ...[...Array(50).keys()].flatMap(i => [`w-[${i}%]`]),
    ...[...Array(50).keys()].flatMap(i => [`h-[${i}%]`]),
    ...[...Array(20).keys()].flatMap(i => [`p-[${i}%]`]),
  ],
  theme: {
    extend: {
      colors: {
        // 't-primary': '#333333',
        // 'd-t-primary': '#ffffff',
        // 't-secondary': '#4b5563',
        // 'd-t-secondary': '#e5e7eb',
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      transform: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
