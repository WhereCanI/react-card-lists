import React from 'react'
import { CardList, ListItem, Anchor, Image, ItemTitle, ItemDescription, ImageWrapper, DescriptionWrapper } from '@themikeandersen/react-card-lists'

const App = () => {
  return (
    <div>
      <CardList listType="Break4321" presetTheme="VerticalList">
      <ListItem>
        <Anchor href="ToListItem">
          <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image" />
          <ItemTitle className="BlaBla">This is a headline</ItemTitle>
          <ItemDescription className="BlaBla">his is a description holding some of the description for each item.</ItemDescription>
        </Anchor>
      </ListItem>
      <ListItem>
        <div>
          <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image" />
          <ItemTitle className="BlaBla">This is a headline</ItemTitle>
          <ItemDescription className="BlaBla">his is a description holding some of the description for each item.</ItemDescription>
        </div>
      </ListItem>
      <ListItem>
        <a href="#">
          <figure><img src="https://via.placeholder.com/1600x900" /></figure>
          <h3 className="ItemTitle">This is a headline</h3>
          <p className="ItemDesc">This is a description holding some of the description for each item.</p>
        </a>
      </ListItem>
      <ListItem>
        <a href="#">
          <figure><img src="https://via.placeholder.com/1600x900" /></figure>
          <h3 className="ItemTitle">This is a headline</h3>
          <p className="ItemDesc">This is a description holding some of the description for each item.</p>
        </a>
      </ListItem>
      <ListItem>
        <a href="#">
          <figure><img src="https://via.placeholder.com/1600x900" /></figure>
          <h3 className="ItemTitle">This is a headline</h3>
          <p className="ItemDesc">This is a description holding some of the description for each item.</p>
        </a>
      </ListItem>
      <ListItem>
        <a href="#">
          <figure><img src="https://via.placeholder.com/1600x900" /></figure>
          <h3 className="ItemTitle">This is a headline</h3>
          <p className="ItemDesc">This is a description holding some of the description for each item.</p>
        </a>
      </ListItem>
    </CardList>

    <CardList listType="Break4321" presetTheme="HorizontalList">
      <ListItem>
        <Anchor href="ToListItem">
          <div>
            <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image" />
          </div>
          <div>
            <ItemTitle className="BlaBla">This is a headline</ItemTitle>
            <ItemDescription className="BlaBla">his is a description holding some of the description for each item.</ItemDescription>
          </div>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor href="ToListItem">
          <ImageWrapper>
            <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image" />
          </ImageWrapper>
          <DescriptionWrapper>
            <ItemTitle className="BlaBla">This is a headline</ItemTitle>
            <ItemDescription className="BlaBla">his is a description holding some of the description for each item.</ItemDescription>
          </DescriptionWrapper>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor href="ToListItem" role="menuitem" title="Click here">
          <ImageWrapper className="Blabla">
            <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image" />
          </ImageWrapper>
          <DescriptionWrapper className="Blabla">
            <ItemTitle className="BlaBla">This is a headline</ItemTitle>
            <ItemDescription className="BlaBla">his is a description holding some of the description for each item.</ItemDescription>
          </DescriptionWrapper>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor href="ToListItem" role="menuitem" title="Click here">
          <ImageWrapper className="Blabla">
            <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image" />
          </ImageWrapper>
          <DescriptionWrapper className="Blabla">
            <ItemTitle className="BlaBla">This is a headline</ItemTitle>
            <ItemDescription className="BlaBla">his is a description holding some of the description for each item.</ItemDescription>
          </DescriptionWrapper>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor href="ToListItem" role="menuitem" title="Click here">
          <ImageWrapper className="Blabla">
            <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image" />
          </ImageWrapper>
          <DescriptionWrapper className="Blabla">
            <ItemTitle className="BlaBla">This is a headline</ItemTitle>
            <ItemDescription className="BlaBla">his is a description holding some of the description for each item.</ItemDescription>
          </DescriptionWrapper>
        </Anchor>
      </ListItem>
      <ListItem>
        <Anchor href="ToListItem" role="menuitem" title="Click here">
          <ImageWrapper className="Blabla">
            <Image imageSrc="https://via.placeholder.com/1600x900" imageAlt="Default Image" />
          </ImageWrapper>
          <DescriptionWrapper className="Blabla">
            <ItemTitle className="BlaBla">This is a headline</ItemTitle>
            <ItemDescription className="BlaBla">his is a description holding some of the description for each item.</ItemDescription>
          </DescriptionWrapper>
        </Anchor>
      </ListItem>
    </CardList>
    </div>
  )
}
export default App