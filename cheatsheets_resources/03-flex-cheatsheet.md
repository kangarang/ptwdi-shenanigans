# Flexbox
[Visual in-class guide](https://medium.freecodecamp.com/an-animated-guide-to-flexbox-d280cf6afc35#.2z1jupppf)

[CSS Tricks Flexbox reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flexbox Froggy](http://flexboxfroggy.com/)

Flexbox changes a container's child elements into inline, flexible elements

Flexbox is a single-direction layout concept -- direction can be either column or row

## Important defaults
Direction -- Default setting is `row`, which is horizontal

Main Axis -- Follows direction. Because direction is `row` by default, the Main Axis is also horizontal

Cross Axis -- Perpendicular to Main Axis, so default is vertical

## Common Flex properties
Keep in mind -- you don't have to state every property!

### Flex Container ( outer div -- parent element )
| CSS Property | Values | Description | Default value |
| --- | --- | --- | --- |
| `display` | `flex` | Turns the element into a Flex Container (**required**) | `block` |
| `flex-direction` | `row` <br> `column` | Establishes the **Main Axis** | `row` |
| `justify-content` | `flex-start` <br> `flex-end` <br> `center` <br> `space-around` <br> `space-between` | Arrangement of Flex Items along the **Main Axis**.<br> Defined by `flex-direction` | `flex-start` |
| `align-items` | `flex-start` <br> `flex-end` <br> `center` <br> `stretch` <br> `baseline` | Arrangement of Flex Items along the **Cross Axis**.<br> Defined by `flex-direction` | `flex-start` |
| `flex-wrap` | `wrap` <br> `nowrap` | How Flex Items behave when they can't fit on one line (due to browser size)<br> Defined by `flex-direction` | `nowrap` |
| `flex-flow` | `row nowrap` <br> `row wrap` <br> `column nowrap` <br> `column wrap` <br> `row reverse` <br> `column reverse`  | Shorthand for `flex-direction` + `flex-wrap` | `row nowrap` |

**Note**: When using `stretch`, `height` needs to be accounted for

<!-- Change this part -->
**Important** -- Changing `flex-direction` to `column` does **NOT** arrange the Flex Items along the container's Cross Axis. It converts the Flex Container's Main Axis from horizontal to vertical. Which means the Cross Axis becomes horizontal
- `justify-content` still refers to Main Axis (which is now vertical)
- `align-items` still refers to Cross Axis (which is now horizontal)

### Flex Items ( inner divs -- child elements )
CSS | Values | Description | Default
--- | --- | --- | ---
`align-self` | see values for `align-items` | Override container `align-items` property | -
`order` | [number] | Control the order of appearance | Source order
(more later) |

<!-- `flex` | `none`<br> `[number] [number] [length]`  | Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`<br> Second and third parameters are optional | `0 1 auto`
`flex-grow` | [number] | Enables an item to grow if necessary<br> Values specify proportionate space | 0
`flex-shrink` | [number] | Enables an item to shrink if necessary | -
`flex-basis` | [length] | -- | -- -->

## Important things to keep in mind
- Most of Flexbox work is done on the Flex **Container**

- A Flex Item can be a Flex Container to its own Flex Items (nested children)

- `float`, `clear`, and `vertical-align` have no effect on Flex Items
