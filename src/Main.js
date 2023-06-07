
import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map(animalObj => {
          return <HornedBeast animalName={animalObj._id} image_url={animalObj.image_url} />
        })}

      {/* <h2> "A beast does not know that he is a beast, and the nearer a man gets to being a beast, the less he knows it."
        

George MacDonald</h2>
      <HornedBeast animalName='Dog' description='Dog with horns' image_url={'https://i.pinimg.com/originals/f5/0f/19/f50f1957c7a1b902471b6f6ad83d7684.jpg'} />
      <HornedBeast animalName='Cat' description='Cat with horns' image_url={'https://uploads.neatorama.com/images/posts/485/73/73485/1404320986-0.jpg'} />
      <HornedBeast animalName='Bird' description='Bird with horns' image_url={'https://dannybrownphotography.files.wordpress.com/2013/02/djb_rvl_2013_01831.jpg'} />
      <HornedBeast animalName='Rabbit' description='Rabbit with horns' image_url={'https://t3.ftcdn.net/jpg/05/35/65/92/360_F_535659252_n2hQBI4kHqEyATPDkAU59GrXbqWqgeFE.jpg'} /> */}
      </main>

    ) 
  }

}

export default Main;