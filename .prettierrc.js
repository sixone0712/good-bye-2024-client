// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  // 쌍따옴표 대신 홑따옴표 사용
  singleQuote: true,
  // 모든 구문 끝에 세미콜론 출력
  semi: true,
  // 탭 대신 공백으로 들여쓰기
  useTabs: false,
  // 들여쓰기 공백 수
  tabWidth: 2,
  // 가능하면 후행 쉼표 사용
  trailingComma: 'all',
  // 줄 바꿈할 길이
  printWidth: 80,
  // 객체 괄호에 공백 삽입
  bracketSpacing: true,
  // 항상 화살표 함수의 매개 변수를 괄호로 감쌈
  arrowParens: 'always',
  // OS에 따른 코드라인 끝 처리 방식 사용
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',
};

export default config;
