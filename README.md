# lint-problem

to demonstrate https://github.com/prettier/eslint-config-prettier/issues/29

```bash
npm install
npm run lint
```

and look at index.js

## workaround

add this to .eslintrc.json

```json
  "rules": {
    "standard/computed-property-even-spacing": 0
  },
```
