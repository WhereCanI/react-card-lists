# @themikeandersen/react-card-lists

> Create beautiful custom designed react card lists or choose one of our presets

[![NPM](https://img.shields.io/npm/v/@themikeandersen/react-card-lists.svg)](https://www.npmjs.com/package/@themikeandersen/react-card-lists) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @themikeandersen/react-card-lists
```

## Use CDN to get CSS file
You can use react-card-lists as a stand-alone CSS file by using the code below:

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/WhereCanI/react-card-lists/src/cardStyle.css" />
```

## Usage
### Minimum requirement for usage
The minimum requirements for using react-card-lists is to use the example below. It allows you to add your custom content inside. The only prop you are required to add is the **listType** which tells the list how it should break depending on screen-sizes.

```jsx
import React, { Component } from 'react'
import { CardList } from '@themikeandersen/react-card-lists'

  return (
    <CardList listType="Break1">
      // ENTER CONTENT HERE
    </CardList>
  )
```

### Use predesigned lists and components
You can use predesignet lists and components that comes together with the module. Each tool can be imported individually as you need or you can import them all like the example below.

#### Available components
* ListItem - Is used as an li. You can add additional classes to it.
* Anchor - Is used as an anchor tag. You can add classes, role, target and title to it.
* Image - Creates a figure with an image inside. To provide src you write imageSrc and to provide alt you write imageAlt.
* ItemTitle - Is an H3 that you can add classes to.
* ItemDescription - Is a paragraph that you can add additional classes to.
* ImageWrapper - Is working as an image wrapper when using Horizontal Lists.
* DescriptionWrapper - Is working as a description wrapper when using Horizontal Lists.

**Available Breakpoints - listType**
* Break1
* Break2
* Break3
* Break4
* Break5
* Break21 (Desktop 2 - Mobile 1)
* Break32 (Desktop 3 - Mobile 2)
* Break321 (Desktop 3 - Tablet 2 - Mobile 1)
* Break42 (Desktop 4 - Mobile 2)
* Break421 (Desktop 4 - Tablet 2 - Mobile 1)
* Break4321 (Desktop 4 - Tablet Big 3 - Tablet 2 - Mobile 1)

#### Add custom classes
In case you want to add custom styling (which I recomment), you can do it on **every** component by adding a prop called **customClasses**. This allows you to add your own classes to the component or to the list in order to custom style it.

#### Choose template style
It is also build in that you can choose a template style which tells the list if the content of an li should be **vertical** or **horizontal**. **If NO presetTheme is provided, the default will become a vertical list**. Below i have listed the choices you can use.

**Available presetThemes** - If none provided, the list will default to Vertical.
* HorizontalList
* VerticalList

## Examples
Below you will find some examples of ways you can combine the lists.

### Vertical list (Using included components and custom classes)
Below is an example of a vertical list using custom classes. Components like ListItem, Anchor, Image, ItemTitle and ItemDescription is not required. You can use only CardList and then choose to add your own custom markup.

```jsx
import React, { Component } from 'react'
import { CardList, ListItem, Anchor, Image, ItemTitle, ItemDescription } from '@themikeandersen/react-card-lists'

  // THE ANCHOR BELOW CAN BE REPLACED WITH A DIV IN CASE NO LINK SHOULD BE PROVIDED

  return (
    <CardList listType="Break1" customClasses="myCustomClass">
      <ListItem>
        <Anchor href="myCustomLink">
          <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image alt" />
          <ItemTitle className="myCustomClass">This is a headline</ItemTitle>
          <ItemDescription className="myCustomClass">his is a description holding some of the description for each item.</ItemDescription>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor href="ToListItem">
          <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image alt" />
          <ItemTitle className="myCustomClass">This is a headline</ItemTitle>
          <ItemDescription className="myCustomClass">his is a description holding some of the description for each item.</ItemDescription>
        </Anchor>
      </ListItem>
    </CardList>
  )
```

### Horizontal list (Using included components and custom classes)
Below is an example of a horizontal list using custom classes. Components like ListItem, Anchor, Image, ItemTitle and ItemDescription is not required. You can use only CardList and then choose to add your own custom markup. **For horizontal lists I recomment using ImageWrapper and Description Wrapper like shown below**.

```jsx
import React, { Component } from 'react'
import { CardList, ListItem, Anchor, Image, ItemTitle, ItemDescription, ImageWrapper, DescriptionWrapper } from '@themikeandersen/react-card-lists'

  // THE ANCHOR BELOW CAN BE REPLACED WITH A DIV IN CASE NO LINK SHOULD BE PROVIDED

  return (
    <CardList listType="Break1" presetTheme="HorizontalList" customClasses="myCustomClass">
      <ListItem>
        <Anchor href="myCustomLink">
          <ImageWrapper>
            <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image alt" />
          </ImageWrapper>
          <DescriptionWrapper>
            <ItemTitle className="myCustomClass">This is a headline</ItemTitle>
            <ItemDescription className="myCustomClass">his is a description holding some of the description for each item.</ItemDescription>
          </DescriptionWrapper>
        </Anchor>
      </ListItem>
    </CardList>
  )
```

### Example using custom markup
In case you only want the breakpoints and then use your own custom markup, then it can be done like the example below. When using your own markup I recomment doing it with a custom class so that you easily can apply your own styling to the list as desired. In order to make the list work you still have to provide a listType

```jsx
import React, { Component } from 'react'
import { CardList } from '@themikeandersen/react-card-lists'

  return (
    <CardList listType="Break1" customClasses="myCustomClass">
      <li>
        <a href="#">
          // PLACE YOUR CONTENT IN HERE AND STYLE USING YOUR CUSTOM CLASS
        </a>
      </li>
      <li>
        <div>
          // PLACE YOUR CONTENT IN HERE AND STYLE USING YOUR CUSTOM CLASS
        </div>
      </li>
    </CardList>
  )
```

## License

MIT © [TheMikeAndersen](https://github.com/WhereCanI)
Visit my website at: [https://themikeandersen.com](https://themikeandersen.com)

