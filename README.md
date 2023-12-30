<br />

<div align="center">
  <a href="https://github.com/miriam-alex/letterboxd-wrapped">
    <img src="./public/logo512.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Letterboxd Wrapped</h3>

  <p align="center">
    A visual summary of your Letterboxd year!
    <br />
    <br />
    <a href="https://miriam-alex.github.io/letterboxd-wrapped/">View Demo</a>
    ·
    <a href="https://github.com/miriam-alex/letterboxd-wrapped">Report Bug</a>
    ·
    <a href="https://github.com/miriam-alex/letterboxd-wrapped">Request Feature</a>
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://miriam-alex.github.io/letterboxd-wrapped/)

Ever since the inception of Spotify Wrapped in 2016, there has been a rush to create end-of-year summary statistics on anything, from our music to our books to our online shopping habits. Naturally, this extended to film. 

As a user of Letterboxd, an online movie review forum, I enjoyed seeing similar statistics in email format. However, I decided to add a couple of extra features that were not present in the free version of Letterboxd's End of Year Summary, especially since so much information is available online. 

Letterboxd Wrapped performs the following tasks
- Scrapes the user's diary on Letterboxd by querying an AWS Lambda function (not published on the repository) if the user has logged one or more films in the current year. If they have not, it returns to the same page of the application. The user can also opt to upload a CSV version of their film data directly from the Letterboxd website.
- Queries The Movie Database, where Letterboxd sources its data, for additional details on the film
- Updates specific state variables with the given data, allowing it to be passed as props to the visual components of the application
- Generates an infographic at the end 

[product-screenshot]: ./public/screenshot1.png
