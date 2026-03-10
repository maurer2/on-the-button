# on-the-button

Looking into different approaches for defining buttons and switches.

## button and aria-pressed

```html
<button aria-pressed="true" type="button">
  Text
</button>
```

## button with role="switch" and aria-checked

```html
<button role="switch" aria-checked="true" type="button">
  Text
</button>
```

## plain checkbox

```html
<label for="checkbox">
  Text
</label>
<input type="checkbox" name="checkbox" id="checkbox" value="value" />
```

## checkbox with role="switch"

```html
<label for="checkbox">
  Text
</label>
<input type="checkbox" name="checkbox" id="checkbox" value="value" role="switch" />
```
