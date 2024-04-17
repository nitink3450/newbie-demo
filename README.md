This is a [Next.js](https://nextjs.org/) project

## Steps To set up a Next.js project with SCSS And Tailwind css:

1.Initialize a new Next.js project:

```bash
npx create-next-app@latest my-next-app
#Replace my-next-app with the name of your project
```

2.Navigate into your project directory:

```bash
cd my-next-app
```

3.Navigate into your project directory:

```bash
cd my-next-app
```

4.Install SCSS support

```bash
npm install sass
```

5.Install Tailwind CSS:

```bash
npm install tailwindcss
```

6.Create a Tailwind CSS configuration file:

```bash
npx tailwindcss init
```

7.Modify your postcss.config.js to include Tailwind CSS:

```bash
module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
}
```

8.Create a SCSS file in your project:
Create a file, for example styles/main.scss, where you'll import Tailwind CSS and define your custom styles.

```bash
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

// Your custom styles here
```

9.Import the SCSS file in your \_app.js file (or wherever you prefer):

```bash
import '../styles/main.scss';
```

10.Now, run the development server:

```bash
npm run dev
```

11.Start your local host server:

```bash
http://localhost:3000/
```

## To Push Changes To Remote Repo

1.Pull changes from a repository:

```bash
git pull
```
2.Add and Commit changes to a repository:

```bash
git add .
git commit -m "Your commit message"
```
3.Push changes to a repository:

```bash
git push
```
4.Build a Next.js project:

```bash
npm run build
```
