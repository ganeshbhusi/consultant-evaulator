# Consultant Evaluator

A lightweight React + TailwindCSS web app that helps evaluate consultant profiles against a given job description using an AI-powered language model API.  
It scores consultant fit, summarizes strengths & weaknesses, and suggests interview questions — helping recruiters shortlist the best candidates easily.

---

## Features

- Input a detailed job description.
- Evaluate multiple consultant profiles with skills, experience, and location.
- Display a fit score (0-100), summary, pros & cons, and interview questions for each profile.
- Filter and show top relevant consultants based on the job description.
- Responsive UI styled with TailwindCSS.

---

## Tech Stack

- React (with functional components & hooks)  
- TailwindCSS for styling  
- Axios for API requests  
- Groq AI / OpenAI API (or other LLM API) for consultant evaluation  
- Vite as the build tool  

---

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/ganeshbhusi/consultant-evaluator.git
   cd consultant-evaluator
   ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Create .env file in root and add your API key:
    ```
    VITE_API_KEY=your_api_key_here
    ```

4. Run the development server:
    ```
    npm run dev
    ```

## Usage
- Enter or paste the job description in the input box.
- Click Evaluate to start AI evaluation for all mock consultant profiles.
- Results will display fit scores, summary, pros & cons, and interview questions.
- Use the UI filters or sorting to find the best matches.

## Project Structure
```
src/
 ├─ components/       # React components
 ├─ data/             # Mock profiles data
 ├─ hooks/            # Custom React hooks
 ├─ styles/           # TailwindCSS configuration and styles
 ├─ App.jsx           # Main React app
 └─ main.jsx          # Entry point
```

## Notes
- This project uses a free/open AI or Groq API key — be sure to manage usage and quotas carefully.
- TailwindCSS setup uses PostCSS and requires Node 18+.
- Modify profiles array in src/data/profiles.js to add or customize consultant profiles

## Future Improvements
- Add user authentication and save evaluations.
- Connect real database to load consultant profiles.
- Allow CSV / Excel import of profiles.
- Add more advanced filters (skills, experience range, locations).
- Improve UI/UX with animations and loading states.