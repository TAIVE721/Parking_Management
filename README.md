# Description of architecture
  The architecture is very basic the contexts to spread the updates the functionalities in the customhooks I did some drilling with a useState because I didn't see that I was going to use it in several places and I thought it 
  was better to create another customhook only for that one then the services separated there I didn't put the call of the api to have the parkings in the useParkings because as the user was not going to reorder them or call 
  every time to the api as if it were a search engine in my opinion would be disorganized I know that maybe it was not ideal to use the map as I used it and maybe it would have been more readable with a find or something like 
  that but I do not see any performance problem and did not use typescript because the app was small.

# For execute the app with docker
 - docker compose -f docker-compose.yml up
 - Port : http://localhost:5173

# For execute the tests 
 - npm run test
 - npm run test:ui

# The app deployed
 - https://parking-management-five.vercel.app 
