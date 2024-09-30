
# Imaginary

## Live Video
https://github.com/user-attachments/assets/4bc10fb4-47d8-4f4c-8b96-65a5dca82cbd


Imaginary is an image editing application built with Next.js that allows users to perform a wide variety of image transformations using Cloudinary's AI features. Users can round corners, enhance images, sharpen details, remove backgrounds, and utilize generative AI features to restore, fill, and replace parts of an image. The application is integrated with **Clerk** for authentication, ensuring that the editing features are protected routes.

## Features

Imaginary offers the following image editing features:

1. **Round Corner**: Easily round the corners of your images for a smooth, professional look.
2. **AI Image Enhancer**: Improve the overall quality of your image using Cloudinary's AI image enhancement.
3. **Sharpen**: Add crispness to your photos by applying the sharpening filter.
4. **Background Removal**: Automatically remove the background from any image, making it transparent or replacing it with other elements.
5. **Generative Restore**: Use AI to restore old or damaged parts of the image to its original state.
6. **Generative Fill**: Automatically fill missing or unwanted parts of the image with AI-generated content.
7. **Generative Replace**: Replace specific objects or parts of the image using generative AI technology.

## Upcoming Features

- **Credit System**: Users can edit up to **15 images for free**. Beyond that, they will need to purchase additional credits to continue using the editing features. 

## Tech Stack

- **Next.js**: A React-based framework for server-rendered applications.
- **Cloudinary**: Used for AI-powered image transformations.
- **Clerk**: Authentication service used to secure the application.
- **Tailwind CSS**: For UI styling.
- **Vercel**: Hosting platform for the application.

## Prerequisites

To run the project locally, you need:

- Node.js (v16.x or higher)
- A Cloudinary account for image processing
- A Clerk account for user authentication

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/imaginary.git
cd imaginary
```

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file at the root of the project with the following variables:

```env
NEXT_PUBLIC_CLOUDINARY_URL=your-cloudinary-url
NEXT_PUBLIC_CLOUDINARY_API_KEY=your-cloudinary-api-key
NEXT_PUBLIC_CLOUDINARY_API_SECRET=your-cloudinary-api-secret
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
CLERK_API_KEY=your-clerk-api-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Deployment

Imaginary can be easily deployed to **Vercel**. Ensure that all environment variables are set in Vercel's environment settings.

```bash
vercel
```

## Authentication

We have integrated **Clerk** for user authentication. All image transformation routes are protected, meaning users must log in to access these features.

## Roadmap

- **Credit System**: In future updates, Imaginary will introduce a credit system. Users will have **15 free image edits**, and additional edits will require credits that can be purchased.

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/imaginary/issues) if you want to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
