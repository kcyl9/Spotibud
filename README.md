# Spotibud

```
Connecting music fanatics from around the world = () => {
    Global chat rooms for every Spotify song, ever.
}
```

Made by Kristy Lau, Erin Lee, Evan Zheng, and Ethan Kwon. Built with Google Cloud Firebase, Spotify API, Bootstrap, and React libraries such as React Cookies and React Router.

Submitted to UofTHacks 2021.

Published: https://spotibud.web.app/

## Inspiration ⛅
Before the opening ceremonies, our team gathered to discuss possible ideas we wanted to implement for our project. We wanted to use concepts that were new to us, while being realistic about our goals. After attending the Google Firebase workshop and receiving this year’s theme, we decided to create a chat room web app based on the Spotify songs the user enjoys. With this service, music fanatics worldwide can join a community and discuss their favourite artists.

## What it does 🌐
Spotibud is a chat room web app that allows users to connect with online buddies from around the world who enjoy the same music. The user begins by inputting the Spotify link of the song that they are listening to. This will direct them to a chat room specifically created for the linked song. From there, users will be able to converse with people from across the world.

Simply take your Spotify link, replace the “spotify” with “spotibud”, and you’re there!

## How we built it 👷
Before we began programming, we delegated tasks to each of our group members. We had two of our members design and code the front-end of our main page, which would take in the Spotify link, and the chat page. The other two members would take on connecting our web page to the Realtime Database in Firebase, as well as using the Spotify API to generate song ids for our chat rooms. Once we had both the front and back-end prepared, we merged them and cleared any errors that occurred. Once this was done, we had a fully functional real-time messaging web app.

Important technologies we used:
- [Node.JS](https://nodejs.org/en/)
- [React.JS](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)

And in particular, the tools we used:
- [Spotify API](https://developer.spotify.com/documentation/web-api/)
- [React Router](https://reactrouter.com/)
- [React Cookies](https://www.npmjs.com/package/react-cookies)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Domain.com](https://www.domain.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)

## Challenges we ran into 😅
Throughout the development of our website, we faced many challenges as we pushed ourselves to explore new software and languages. Our two front-end developers encountered some problems as they did not have experience with HTML, CSS, and Javascript. In particular, we struggled with creating adaptable elements that would be formatted properly across all devices. Additionally, there were authorization issues when utilizing Spotify API and verifying our own domain.

## Accomplishments that we're proud of 🙌
Through this project, we were not only able to further develop our React skills, but we also learned how to use Google Firebase’s Realtime Database and the Spotify API. Despite it being our first time using a database and the API, our team managed to create a functional web application that updates in real-time. Furthermore, our front-end developers managed to create a stunning UI with custom icons that can be seen throughout the web page.

## What we learned 😵
Through this hackathon, we learned a lot about different aspects of both front-end and back-end web development. From coding in unfamiliar languages to using the Spotify API and Google Firebase’s Realtime Database, we expanded and developed our technical skills. Apart from improving our technical expertise, we also learned how to collaborate and interact as a team to overcome any challenges that we encountered.

## What's next for Spotibud 🌟🙊
In the future, we hope to have users create accounts on our platform which will allow for one-on-one messaging. This will also allow us to recommend popular chat rooms that they may be interested in based on their favourite songs. Additionally, we want to implement listening parties to create a more immersive and interactive environment. Finally, it would be interesting to adapt Spotibud as a chrome extension or mobile app to make it more accessible and user-friendly.
