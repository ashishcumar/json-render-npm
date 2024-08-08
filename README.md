# JSON-Visual

A versatile React component for rendering JSON data effortlessly. This package allows developers to easily integrate dynamic JSON display within their React applications, providing clear and customizable visualization options for various data structures.

## Installation

```bash
npm install json-visual
```

_Usage_

```
jsx
import JsonRender  from 'json-visual';

const json = {
  "name": "John Doe",
  "age": 30,
  "occupation": "Software Engineer"
};

const App = () => {
  return (
    <JsonRender
      json={json}
      keyColor="#007bff"
      valueColor="#28a745"
      background="#f8f9fa"
      hideTypes={false}
    />
  );
};
```

_Props_

| Name       | Type    | Default  | Description               |
| ---------- | ------- | -------- | ------------------------- |
| json       | any     | required | The JSON object to render |
| keyColor   | string  | #007bff  | Color for keys            |
| valueColor | string  | #28a745  | Color for values          |
| background | string  | #f8f9fa  | Background color          |
| hideTypes  | boolean | false    | Hide data types           |

_Component_

_JsonRender_

Renders a JSON object in a UI-friendly format.

_Example_

```
jsx
<JsonRender
  json={{
    "name": "Jane Doe",
    "age": 25,
    "occupation": "Data Scientist"
  }}
  keyColor="#ff69b4"
  valueColor="#33b5e5"
  background="#2f3436"
  hideTypes={true}
/>
```

This will render the JSON object in a formatted UI with the specified colors and background.
