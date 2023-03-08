Website live at 🔗 [https://smart-skin-care-next.vercel.app/](https://smart-skin-care-next.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration
> We have used tailwindcss for styling. This way we achieve a consistent look and feel across the app. You can configure the tailwindcss by editing the `tailwind.config.js` file.

> We have used zustand for state management. You can configure the zustand by editing javascript files in `/stores` folder.

> We have attached ```TODO: ``` comments in the code where you need to make calls to the backend or where we have used mock data.
>>1. In ```stores/filters.js```, We have a global state for filters. You can use this state to store the filters selected by the user and we have added to methods where you can add data to skin types and diseases from the backend.
>>2. In ```pages/auto-filters.jsx```, We made an upload image method where you can make a call to the backend to get the filters for the image uploaded by the user. We have used mock data for now.
>>3. In ```stores/items.js```, We have a global state for items. You can use this state to store the items returned by the backend and we have added to methods where you can add data to items from the backend.

 The code is easy to understand and you can easily modify the code. If you have any questions, please feel free to contact us.

 ## Unique Features
 1. Added a cart page where the user can see the items added to the cart.
 2. Added heart icon on the product card which can be used to add the product to the wishlist.
 3. Added 3 modes to upload file in auto-filters page. User can upload image from the computer, take a photo using camera or drop the image directly.
 4. Consistent look and feel across all devices.

## Packages Used
1. @headlessui/react [https://www.npmjs.com/package/@headlessui/react](https://www.npmjs.com/package/@headlessui/react)
2. @heroicons/react [https://www.npmjs.com/package/@heroicons/react](https://www.npmjs.com/package/@heroicons/react)
3. gsap [https://www.npmjs.com/package/gsap](https://www.npmjs.com/package/gsap)
4. react-webcam [https://www.npmjs.com/package/react-webcam](https://www.npmjs.com/package/react-webcam)
5. sharp [https://www.npmjs.com/package/sharp](https://www.npmjs.com/package/sharp)
6. zustand [https://www.npmjs.com/package/zustand](https://www.npmjs.com/package/zustand)
7. tailwindcss [https://www.npmjs.com/package/tailwindcss](https://www.npmjs.com/package/tailwindcss)
