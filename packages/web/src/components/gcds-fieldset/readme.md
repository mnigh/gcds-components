# gcds-fieldset



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute       | Description                                       | Type                                                | Default     |
| ------------------------- | --------------- | ------------------------------------------------- | --------------------------------------------------- | ----------- |
| `disabled`                | `disabled`      | Flag to disable fieldset and its contents         | `boolean`                                           | `undefined` |
| `errorMessage`            | `error-message` | Error message for invalid form elements in group. | `string`                                            | `undefined` |
| `fieldsetId` _(required)_ | `fieldset-id`   | The unique identifier for the component           | `string`                                            | `undefined` |
| `hint`                    | `hint`          | Hint displayed below the legend.                  | `string`                                            | `undefined` |
| `legend` _(required)_     | `legend`        | The title for the contents of the fieldset        | `string`                                            | `undefined` |
| `required`                | `required`      | Flag the contents are required                    | `boolean`                                           | `undefined` |
| `validateOn`              | `validate-on`   | Set event to call validator                       | `"blur" \| "other" \| "submit"`                     | `undefined` |
| `validator`               | --              | Array of validators                               | `(string \| ValidatorEntry \| Validator<string>)[]` | `undefined` |


## Events

| Event                 | Description                                       | Type                  |
| --------------------- | ------------------------------------------------- | --------------------- |
| `gcdsGroupError`      | Emitted when the fieldset has a validation error. | `CustomEvent<string>` |
| `gcdsGroupErrorClear` | Emitted when the fieldset has a validation error. | `CustomEvent<void>`   |


## Methods

### `validate() => Promise<void>`

Call any active validators

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [gcds-hint](../gcds-hint)
- [gcds-error-message](../gcds-error-message)

### Graph
```mermaid
graph TD;
  gcds-fieldset --> gcds-hint
  gcds-fieldset --> gcds-error-message
  style gcds-fieldset fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
