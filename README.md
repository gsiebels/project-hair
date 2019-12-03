# HairHub

This was the last project assigned by GA, In this project, we had the option to choose between solo and group project, I 
decided to go solo as I wanted to solidify what I have learned in the past 3 months from the back end to frontend and styling.

This is HairHub, a mobile freelance hairdresser site where you can search for individual hairdressers and book them based on 
the prices and in the future reviews.

![hairhub-homepage](https://raw.githubusercontent.com/gsiebels/project-hair/master/hairhub-homepage-img.png)

This has been a long-time dream of mine as I did some work as a mobile hairdresser and I think there is a big market for it. 
This is an ongoing project so please expect future version updates and new features.

## Built With
- Python
- Django 
- JavaScript
- React
- SCSS
- Bulma
- Affinity Designer (logo)

## Deployment

The website is deployed on Heroku, you can see it here: https://mobile-hairhub.herokuapp.com/ 

## Getting Started

Use the clone button to download the source code. install Yarn packages in the root directory using "yarn" in the src directory of the project. Then "yarn serve" to run on a local server. The assets used in this project are stored in the database and was uploaded by the Django admin site.

## How It Works

The home page welcomes you,  where you see the logo that I have designed using Affinity Designer. On the navbar, you can see a button that says stylist, when you click there it takes you to the index page where you can see all the hairdressers cards that display their photos and names. When you click on the card, the card flips and you can see the services offered and a button that takes you to their show page. On the show page, the information is more detailed, you can the hairdresser’s description and in the future a reviews section. There is also a button to request an appointment that so far is only an email. Finally, you see the gallery of beautiful pictures from previous jobs and experiences.

![hairhub-index-page](https://raw.githubusercontent.com/gsiebels/project-hair/master/hairhub-index-page-img.png)

In the image above you can see the prices and the ‘find out more button’ of one card as it has been clicked by the user.

Here is the logic for the card: 

```javascript 
const OpenedCard = ({ onClick, services }) => (
  <div className="card open-card with-shadow" onClick={onClick}> 
    <h2 className="name card-header">Services</h2>
    <ul className="card-list">
      {services.map(ser => (
        <li className="card-ser columns" 
          key={ser.id}>
          <span className="card-ser column is-half">{ser.name}:</span>
          <span className="card-price coloum is-half">£{ser.price}</span></li>
      ))}
    </ul>
  </div>
)
const ClosedCard = ({ onClick, name, profile_pic }) => (
  <div className="center card card-theme with-shadow" onClick={onClick}> 
    <h2 className="name card-header">{name}</h2>
    <img className="card-image" src={profile_pic} alt={name} />
  </div>
)


const HairdressersCard = ({ id, isOpen, ...props }) => (
  <>
  <div className="center column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    {isOpen
      ? <OpenedCard {...props} />
      : <ClosedCard {...props} />
    }
    {isOpen && (
      <Link className="card-button button card with-shadow" to={`/stylists/${id}`}>Find Out More!</Link>
    )}
  </div>
  </>
)
```


This is the show page, you get here by clicking on find out more that is on the bottom of the services card.

![hairhub-show-page-1](https://raw.githubusercontent.com/gsiebels/project-hair/master/hairhub-show-page-1-img.png)
![hairhub-show-page-2](https://raw.githubusercontent.com/gsiebels/project-hair/master/hairhub-show-page-2-img.png)

## Challenges and future improvements

My main challenge was to make the hairdresser to login and edit its own profile, I will keep working on it.
For future improvements, I will add a better booking system, followed by a notification to the hairdresser when it receives a booking request. I will also improve the style of the page,  add a reviews section and link the project to the Mapbox API so users could look for hairdressers base on their location.

## Author

Gerardo Siebels - Junior Software Engineer
