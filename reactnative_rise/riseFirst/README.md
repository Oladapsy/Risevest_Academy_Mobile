# My first Assignment
1. first i ran npm run reset-project # This is to delete the files that came with
   the default to the bear minimum
2. i restarted my server and typed r to reload it on my device
3. i installed native wind to help use tailwind css for my app
4. npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0 npm install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11

5. npx tailwindcss init (to generate the config file)
   i replaced it with the one from nativewind to select path to all file tailwindcss will style
6. i created a new file within the app folder called globals.css
   and i added the tailwind config bases import in it
7. after that i created the babel file (babel preset file) in the directory root and paste the code from react nativewind
8. after that i configured my metro config and copied the code from native wind
   npx expo customize metro.config.js
9. i imported the globals.css in my _layout.tsx
10. i created a nativewind-env.d.ts and entered this /// <reference types="nativewind/types" /> at the directory root
11. i modified my metro config to point to my globals.css

## issue faced:
tailwind wasnt still styling so the tailwind config file i copied didnt select all files so included all the router files and entry file in the content array

12. i then extended the tailwind config with colors bg-primary && secondary color

## core structure
13. i built the core structure with some react-native component

## installed some font
14. Fuzzy Bubbles --- i installed a font and renamed the file name with the family name
15. i created the react-native.config.js file and allowed it to use all files in the assets folder 
and ran the command npx react-native-asset

### ran into an issue after doing this:

placed: the font file in /assets/fonts/.
Created: react-native.config.js with the assets entry.
Ran: npx react-native-asset to link the font.

### temporary fix: result in fixing it temporarily by installing directly


# npx expo install react-native-svg
for using svg 





# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
