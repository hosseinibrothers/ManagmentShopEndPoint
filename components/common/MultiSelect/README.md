This component is MultiSelect

## MultiSelect

create by [hosein doran](https://github.com/hoseindoran)

how to use:

```jsx
import React, { useState } from "react";
import MultiSelect from "@component/admin/common/MultiSelect";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

const Example = () => {
  const [selected, setSelected] = useState([]);
  
  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        label="Select Fruits"
        placeholder="Select..."
      />
    </div>
  );
};
export default Example;
```

## props:

| Prop          | Description                     | Type                                                    | Default |
|---------------|---------------------------------|---------------------------------------------------------|---------|
| `label`       | value for `label` tag           | `string`                                                |         |
| `options`     | options for dropdown            | `[{label, value, disabled}]` disabled not supported yet | `[]`    |
| `values`      | pre-selected rows               | `[{label, value}]`                                      | `[]`    |
| `onChange`    | function handle selected item   | `function`                                              |         |
| `placeholder` | show when not any item selected | `string`                                                |         |
| `disabled`    | handle disable component        | `boolean`                                               | `false` |


## 📜 License

MIT &copy; [hosein doran](https://github.com/hoseindoran)
