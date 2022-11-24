# E-Hub
E-commerce website made using react-js and sanity aimed to strengthen my skills working Sanity

 ## Technologies I used <br>

 In this project I used:
   - React JS
   - Sanity.io
   - Sanity Client
   - Tailwind CSS

 In this project I basically experimented some of the functionalities that Sanity provides for managing content of my Mutual e-commerce application <br>
 
 ## Issues Faced

 => First of all to upload content to your sanity storage you need to use sanity client and to do this you need to install sanity-client and the problem with it is that<br>
    it has some methods that depend on url which was previously available in the browser but is no longer available today. So you basically would face an error that states url.parse()   
    is not a function as they couldn't recognize it.

 ### How I solved the issue

 => To solve the issue I installed the url package manually and things worked perfectly fine

 ## CORS Origin Policy

 => I also first got some issues to access content due to the CORS origin policy which was not configured in the project's settings.

 ### How I solved the issue

 => This was somehow kinda of a minor issue so I just started my Sanity app and added the origin in the accepted origins and it worked now perfectly fine.
