# babel-plugin-import-helpers

Generate helpers that reference named imports from a module.

.babelrc

```json
{
  "plugins": [
    ["import-helpers", { "module": "my-module/babel-helpers" }]
  ]
}
```

adds import

```js
import { toArray } from "my-module/babel-helpers";
```
