# Ultimate-Javascript-Quiz

Somehow this wasn't as painful as the last assignment. I think it's because I had to get comfortable with using JS for the first time when I was making the the PW generator. I was worried about using the DOM to make visual elements appear within the browser but it ended up being fairly easy. When I started on the design for mechanics of the quiz I focused on getting the mutliple choice to work first. I knew I wanted to use objects for this because it seemed the most straightforward and simple. The hard part was getting the questions to display, switch to the next card when the answer was selected, and checking the answers. Getting this to work helped a lot with understanding the importance of objects, onclick events in HTML, and _most importantly_ being able to send a specific value to a function onclick.

The next major obstacle was getting the navigation down with more complex if statements. This came down to using a nav button to flip back and forth between the introduction message and the scoreboard by making one card style = display: none; when another goes to display: block;. Last but not least was the scoreboard and writing to local storage. I found a good list tutorial that I adapted to my scoreboard needs. It used innerHTML throughout the code. I tried to avoid using it since I read it was a security risk. But it made it very difficult to where I was having to use a for loop to append <p> elements. After wasting a lot of time trying to get that to work I looked at John's todo list from the exercises. I saw the he used innerHTML and decided it was okay. It made it easier for me to locally store multiple values into a single key without having to create a new variable every time a player entered their initials.

When I wasn't working on the JS script I relaxed by playing around with the CSS. I really enjoyed the whole process of implementing the woodgrain/tree theme.

![JS Quiz Screenshot](https://github.com/jaherlihy/Ultimate-Javascript-Quiz/raw/main/assets/images/webpage-screenshot.png?raw=true)

https://jaherlihy.github.io/Ultimate-Javascript-Quiz/
