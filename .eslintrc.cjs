module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "vue"
  ],
  "rules": {
    // off=0, warn=1, error=2, 如果是数组, 第二项表示参数option
    // indent: [2, 2], // 控制缩进为2
    "vue/multi-word-component-names": "0",
    eqeqeq: 1, // 警告使用全等
    // quotes: [2, 'single'], //单引号
    singleQuote: 0,
    'no-console': 0, //不禁用console
    'no-debugger': 1, //警告debugger
    'no-var': 2, //对var禁止
    semi: 2, //强制使用分号
    'semi-spacing': [2, { before: false, after: true }], // 强制分号前后不允许空格
    // 'no-irregular-whitespace': 0, //不规则的空白不允许
    // 'no-trailing-spaces': 1, //一行结束后面有空格就发出警告
    'eol-last': 0, //文件以单一的换行符结束
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
    'no-underscore-dangle': 0, //标识符不能以_开头或结尾
    'no-alert': 2, //禁止使用alert confirm prompt
    'no-lone-blocks': 0, //禁止不必要的嵌套块
    'no-class-assign': 2, //禁止给类赋值
    'no-cond-assign': 2, //禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-delete-var': 2, //不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-dupe-args': 2, //函数参数不能重复
    'no-empty': 2, //块语句中的内容不能为空
    'no-func-assign': 2, //禁止重复的函数声明
    'no-invalid-this': 0, //禁止无效的this，只能用在构造器，类，对象字面量
    'no-redeclare': 2, //禁止重复声明变量
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-this-before-super': 0, //在调用super()之前不能使用this或super
    'no-undef': 2, //不能有未定义的变量
    'no-use-before-define': 2, //未定义前不能使用
    camelcase: 0, //强制驼峰法命名
    'jsx-quotes': [2, 'prefer-double'], //强制在JSX属性（jsx-quotes）中一致使用双引号
    'no-mixed-spaces-and-tabs': 0, //禁止混用tab和空格
    'prefer-arrow-callback': 0, //比较喜欢箭头回调
    'arrow-parens': 0, //箭头函数用小括号括起来
    'arrow-spacing': 0, //=>的前/后括号
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
  },
};
