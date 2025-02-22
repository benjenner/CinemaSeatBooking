## Project description


## Component structure

Initially, I structured which components I wanted the program to have. It took some time to understand how components in React work and how to use them. I chose to treat each part of the program where the user needs to make a decision as a component: choosing a movie, selecting a seat, and managing the different movies. Additionally, I should've made a component out of the `<select>` element where the user chooses the movie, as this is reused in the admin form.

## HTML and CSS Adjustments

I kept the accompanying HTML elements just as they were. What I added were buttons for booking and administration as well as forms for each button. And, of course, various functionalities like `onClick` and `onSubmit`, among others.

I adjusted my CSS somewhat as there were some glitches during the transition to React, but for the most part, I kept the existing styling.

## State Management

I initially wanted to manage the states of the different elements with the Context API. However, I had difficulty getting it to work, so I decided to use property drilling instead, which I thought worked well in this relatively small project. It was initially a bit challenging to grasp how different states are passed back and forth, but after a while, the logic set in. It's an exciting way to program, but I can definitely see drawbacks regarding readability and "aesthetics" (it becomes very bloated in `App.tsx`) if applied to a larger application.

## Form validation

To validate my forms, I used Formik. Formik initially seemed difficult to grasp, but I quickly realized it made the code very compact when it came to validating and also submitting the form.

## Further Development

I want to make certain functions in the data component more generic and repeat less code, such as the URL in the requests.
