This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run npm install (I pushed the .env file -even to is a bad practice, so it won't be necessary to create one)

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What I did

I had to make assumptions about how some attributes in the API worked, so I didn't consider every possibility that could come from the API and therefore I didn't cover every possibility to show which data depended on what.
I didn't handle every case and error that could occur properly. Like in the photo carousel component I didn't insert dummy images in case I didn't get anything from the API.

I also took the liberty of mapping the API response to make the work a bit easier since I don't have a complete knowledge of what is important and what isn't.

What I tried to focus on: structuring the project in a way that could be easily scalable and maintainable.
And to give a taste of better user interaction:

      - Form to write to makelaars directly in the page and always in the user's field of vision.
      
      - Visualization of the schedule calendar without leaving the page.
      
      - Easy navigation between tabs.
      
      - More comprehensive and easy to read property feature.

      

I left very few comments, only where I thought it was necessary to explain more than the variable/function names already said.


## What I wanted to do but wanted to

Properly handle Carousel and how images are displayed in the modal. Since I mapped the API to simplify the implementation, I left out the different resolution types I got from the API and only rendered one.

Make the map more responsive.

Implement: i18n, unit test

Properly handle the Makelaar form and make the "plan visit" calendar only show the available date.

Show the rest of the property features when the appropriate button is pressed.

Make the Mortgage component reactive and usable instead of just a mocked version.

Make it bug-free.

Deploy it.

## Known Problems:

A lot of components are just mock up and not fully implemented.

Bunch of bugs with the carousel and how the images are shown.

Map not responsive enough.
