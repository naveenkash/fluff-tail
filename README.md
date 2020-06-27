<h2>Fluff Tail</h2>
Fluff-tail is a custom component library for React

## Components currently supported

<details>
  <summary>Card</summary>

- [Rainbow Stacked Accordian](https://github.com/naveenkash/fluff-tail/tree/master/components/card/RainbowStackedAccordian)
- [Card Hover Interaction](https://github.com/naveenkash/fluff-tail/tree/master/components/card/CardHoverInteraction)
- [Article Deck](https://github.com/naveenkash/fluff-tail/tree/master/components/card/ArticleDeck)
</details>

## How to use 

Import component that you want to use 

### Example

```jsx

import { CardHover } from "fluff-tail";

<CardHover
    title={"Title"}
    desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt"}
    href={"https://toyoursite.com"}
    btnTitle={"Go to My Site"}
    image={"Pass in a background image"}
    alt={"alt text for image"}
    openNewPage={true} // target set to _blank when set to true
    showBtn={true} // Wheather to show button or not
/>
```