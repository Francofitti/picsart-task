# Picsart Taks

## Setup

Install dependencies

```
$ npm install
```
You will need to create a file named `.env.local` and add a variable called `VITE_API_KEY` with your Pexel key.

Dev server

```
$ npm run dev
```

Run tests

```
$ npm run test:browser
```

## Notes

I decided to brin a library to implement the virtualization, i read a few blogs about custom implementations but realized it would take quite some time.

For this i used react-virtuoso, the only issue I faced is a scrolling artifact when scrolling upwards. After some debugging i decided to move on to the rest of the task.

For rest layer i went with useSWR, it provides caching and pagination logic without having to implment it myself.

Tests are written using vite browser, i placed some examples, but i could add more tests. For example the callback on the grid being called after scroll end, but I have already dedicated quite some time.

The big problem was trying to debug for to long the scroll issue, i sank a few hours there so the final cleanup feels a bit hasty. Honestly perhaps I should have implemented the virtualization myself but i did not have much time this week.

