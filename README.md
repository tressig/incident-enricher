# incident-enricher


## Assumptions
This was built in Windows 10 and has only been verified for this project on that OS. Instructions should be the same for Linux and OSX, though I've never built on an OSX machine and can't verify.


## Build and Deploy
After cloning execute the following in the root directory of the project



```
./gradlew clean build

java -jar ./server/build/libs/incident-enricher-0.0.1-SNAPSHOT.jar
```

This will launch the application in a tomcat server accessible at http://localhost:8080

## Time Spent and Future Work
Total time elapsed from the time I received the email to the time I made the final code commit (not including the commit made to update this README) was about 4.5-5 hours. I spent the first hour going over the requirements listed in the README.md and
researching geomapping libraries. A good amount of this hour was spent attempting to match the provided data to standard json formats such as Esri or GeoJSON. After concluding that they were arbitrary json,
I created an Angular project and bundled it into a Spring Boot jar for ease of deployment. I opted to add PrimeNG to the project as I've used it in the past.

My plan was to add a file upload component to the page to provide an input mechanism for the incident data, parse it into GeoJSON, and then use a mapping library like Mapbox to display it. After verifying
that I could generate a map that way, I was going to work on enriching the incident data with weather data as requested.

Unfortunately I got caught up by the mechanism of the PrimeNG fileupload component. Angular is aware of the file I upload and I can pass it to a FileReader, but there is some delay between calling readAsText()
and the time that this.reader.result is defined. I suspect I need to either make a file reading service that returns an observable my component can subscribe to, or I might be able to send the file to the Spring
Boot server and read it there. The Spring option may be superior given that I would eventually need to obtain weather data for enrichment anyway.

With more time, I would attempt to send the file to Spring and parse it there, with a service in Angular handling that request/response. From there, I would proceed with my original plan, though I'm sure additional
issues would arise.