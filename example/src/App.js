import React from 'react'
import { CardList, ListItem, Anchor, Image, ItemTitle, ItemDescription } from '@themikeandersen/react-card-lists'

const App = () => {
  return (
    <CardList listType="Break32">
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
  )
}
export default App