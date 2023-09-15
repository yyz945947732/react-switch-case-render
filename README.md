# react-switch-case-render

> Switch-case React component to render nested components.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
npm install --save react-switch-case-render
```

## Usage

```ts
import { Switch, Case, Default } from 'react-switch-case-render';

function Example({ expression }) {
  const type = 'show';

  return (
    <Switch expression={type}>
      <Case value="show">show</Case>
      <Case value="add">add</Case>
      <Case value="edit">edit</Case>
      <Default>nothing to show.</Default>
    </Switch>
  );
}
```

### API

#### \<Switch />

The `<Switch />` components provide an expression, matching the expression's value against a series of `<Case />` components, and render `<Case />` children after the first `<Case />` with a matching value.

| Prop       | Type                                 | Default |
| ---------- | ------------------------------------ | ------- |
| expression | string/number/boolean/null/undefined | -       |
| children   | React.ReactNode                      | -       |

#### \<Case />

provide an value used to match against expression. if the expression matches the value, the `children` will be render.

| Prop     | Type                                 | Default |
| -------- | ------------------------------------ | ------- |
| value    | string/number/boolean/null/undefined | -       |
| children | React.ReactNode                      | -       |

#### \<Default />

if the value of expression doesn't match any of the `<Case />` value, the `children` will be render.

| Prop     | Type            | Default |
| -------- | --------------- | ------- |
| children | React.ReactNode | -       |

## LICENSE

[MIT](https://github.com/yyz945947732/react-switch-case-render/blob/master/LICENSE)
