# Ichigo Plushies Frontend API 🧸
![ichigo_logo](./src/assets/images/ichigo_logo.png)

Welcome to Ichigo Plushies Frontend's api documentation. This API recreates the frontend of a website where you can request a personalized teddy custom quote, without needing to register. This quote will return a reference code that can be used to complete the order once the user registers.
There is also information about the creator and her social networks and general information about orders.
A user can register, log in, place an order (after completing the quote form), create a shipping address and track the status of their order.

This proyect is the front ened of [ichiplush_frontend](https://github.com/ariusvi/ichiplush_backend) project.

---

## Table of Contents 📂
<ol>
<li><a href="#stack-⚓">Stack ⚓</a></li>
<li><a href="#database-mysql-🌐">DataBase MySQL 🌐</a></li>
<li><a href="#local-installation-💻">Local installation 💻</a></li>
<li><a href="#users-credentials-👾">Users credentials 👾</a></li>
<li><a href="#About-the-client-💜">About the client 💜</a></li>
<li><a href="#Design-investigation-👓">Design investigation 👓</a></li>
<li><a href="#Roots-🔗">Roots 🔗</a></li>
<li><a href="#Bugs-🐜">Bugs 🐜</a></li>
<li><a href="#Future-features-✨">Future features ✨</a></li>
<li><a href="#author-✒️">Author ✒️</a></li>
<li><a href="#acknowledgements-🙏">Acknowledgements 🙏</a></li>
</ol>

# Stack ⚓
<div alaign="center">
<a href="https://www.reactjs.com/">
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
</a>
<a href="">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MONGODB" />
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="Node JS"/>
</a>
<a href="">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/bcrypt-3178C6?style=for-the-badge&" alt="TypeScript" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" alt="Photoshop" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white" alt="Illustrator" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Gi" />
</a>
 </div>

 ## DataBase MySQL 🌐
![database_image](./src/assets/images/database.JPG)


# Local installation 💻
 ## Backend
 - Go to: [ichiplush_frontend](https://github.com/ariusvi/ichiplush_backend)
1. Clone the repository
 ` $ git clone https://github.com/ariusvi/ichiplush_backend `
2. Install dependencies
 ``` $ npm install --y ``` 
3. Start Express on the server
 ``` $ npm run dev ```
4. Run seeders
 ``` $ npm run seed ``` 

 ## Frontend
1. Clone the repository
 ` $ git clone https://github.com/ariusvi/ichiplush_backend `
2. Install dependencies
 ``` $ npm install --y ``` 
3. Start Express on the server
 ``` $ npm run dev ```

 
## Users credentials👾
- User
```json
nickname: "Livi",
email: "livi@email.com",
password: "@Test12345",
role: "user"
```
- SuperAdmin
```json
nickname: "super_admin",
email: "superadmin@admin.com",
password: "@Test12345",
role: "super_dmin"
```

## About the client 💜
![client](./src/assets/images/001.JPG)
The client is a vtuber (virtual streamer). She makes personalized plushies. Currently it has a "website" made in [carrd](https://carrd.co/) and the form to order plushies is in Google Forms, it doesn't have everything together. 
The client would like a website in which a client desn't need to register to complete a form and be able to obtain a budget for the order.

# Design investigation 👓
![007](./src/assets/images/007.JPG)
First we will do a little research on the client's vtuber model, as well as the color palette, her inspiration and tests with different fonts.
Custom buttons have also been created for login and register based on the vtuber model gem. 
Everything is created with Adobe Illustrator.

# First Design Ideas 💡
![002](./src/assets/images/002.JPG)
![003](./src/assets/images/003.JPG)
![004](./src/assets/images/004.JPG)
![005](./src/assets/images/005.JPG)
![006](./src/assets/images/006.JPG)
Background SVG created with Adobe Illustrator.

# Roots 🔗
## PC view
1. Home

![home](./src/assets/images/pc1.JPG)

2. Examples

![examples](./src/assets/images/pc2.JPG)

3. Budget

![budget](./src/assets/images/pc3.JPG)

4. Reviews

![reviews](./src/assets/images/pc4.JPG)

5. Profile

![profile](./src/assets/images/pc5.JPG)

6. T.O.S.

![tos](./src/assets/images/pc6.JPG)

7. Shipping

![shipping](./src/assets/images/pc7.JPG)

8. Superadmin

![superadmin](./src/assets/images/pc8.JPG)

Superadmin view only for PC view. Administrate a webpage from PC is the correct.

![super](./src/assets/images/pc9.JPG)

## Mobile view
1. Home

![homeM](./src/assets/images/mobile1gif.gif)

2. Examples

![examplesM](./src/assets/images/mobile2.gif)

3. Budget

![budgetM](./src/assets/images/mobile3.gif)

4. Reviews

![reviwsM](./src/assets/images/mobile4.gif)

5. Login

![loginM](./src/assets/images/login.JPG)

6. Register

![registerM](./src/assets/images/register.JPG)

7. Profile

![profileM](./src/assets/images/direcciones.JPG)


## Bugs 🐜
- Address update, can't  change isDefault to change default address
- Can't create budgets at data.sql
- Images in cardImage can't be resized to be responsive, so in mobile view the images of cardImage disappear

## Future features ✨
- Improve responsive design<br>
- Change header like a dropdown at mobile view
- Aply react-18next library to translate all website
- Create a newsletter
- Create a interactive image for budget that changes while the form is filled out
- Create an internal chat between artisan and user

## Author ✒️
* Ana Rius - student FSD
    * [GitHub](https://github.com/ariusvi)

## Acknowledgements 🙏
Special thanks to Daniel Tarazona and Demian Ortizlanzas for their incredible work as a teacher and above all for his infinite patience in helping to resolve any doubts and calm the panic.<br>
Thanks to my classmates:<br>
Pedro for his patience and help, especially to confirm that I understand things.<br>
