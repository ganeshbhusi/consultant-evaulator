import { useCallback, useState } from "react";
import ConsultantCard from "./components/ConsultantCard";
import { mockProfiles } from "./data/mockProfiles";
import axios from "axios";
import { API_KEY, GROQ_API, MAX_CONSULTANTS_MATCH } from "./constants/constants";
import type { ConsultantsResponse } from "./constants/types";

const App = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [results, setResults] = useState<ConsultantsResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [isShowingConsultants, setIsShowingConsultants] = useState(true);

  const handleToggleConsultants = useCallback(() => {
    setIsShowingConsultants(!isShowingConsultants);
  }, [isShowingConsultants]);

  const handleEvaluate = async () => {
    if (!jobDescription) return;
    setLoading(true);

    try {
      const evaluations = await Promise.all(
        mockProfiles.map(async (profile) => {
          const prompt = `
Evaluate this consultant profile:
Name: ${profile.name}
Experience: ${profile.experience}
Skills: ${profile.skills}
Location: ${profile.location}

Against this job description:
${jobDescription}

Return:
- Fit score (0-100)
- Short matching summary
- Key pros and cons
- 3 questions to ask in interview.
        `;

          const response = await axios.post(
            GROQ_API,
            {
              model: "llama3-70b-8192",
              messages: [
                {
                  role: "system",
                  content:
                    "Act as consultant profile evaulator and assist best suitable profiles",
                },
                {
                  role: "user",
                  content: prompt,
                },
              ],
              temperature: 0.7,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
              },
            }
          );

          const evaluationText = response.data.choices[0].message.content;

          // Extract fit score from the returned text (example assumes "Fit score: 85")
          const fitScoreMatch = evaluationText.match(
            /Fit score\s*[:\-]\s*(\d{1,3})/i
          );
          const fitScore = fitScoreMatch ? parseInt(fitScoreMatch[1], 10) : 0;

          return {
            profile,
            evaluation: evaluationText,
            fitScore,
          };
        })
      );

      // Sort descending by fitScore
      const top3 = evaluations
        .sort((a, b) => b.fitScore - a.fitScore)
        .slice(0, MAX_CONSULTANTS_MATCH);
      setResults(top3);
    } catch (error: any) {
      alert('API Error');
      console.error("Groq API error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Consultant Profilr Evaluator</h1>
      <textarea
        className="w-full border rounded-md p-3 text-sm mb-1"
        rows={4}
        placeholder="Enter job description..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      ></textarea>
      <button
        onClick={handleEvaluate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Evaluating..." : "Evaluate Consultants"}
      </button>

      <button
        onClick={handleToggleConsultants}
        className={`ml-2 text-white px-4 py-2 rounded ${isShowingConsultants ? 'bg-red-400 hover:bg-red-700' : 'hover:bg-blue-700 bg-blue-600'}`}
      >
        {isShowingConsultants ? "Hide Consultants" : "Show Consultants"}
      </button>

      {isShowingConsultants ? (
        <div className="grid gap-6 md:grid-cols-2">
          {mockProfiles.map((profile) => (
            <ConsultantCard key={profile.id} consultant={profile} />
          ))}
        </div>
      ) : (
      <div className="grid gap-6 md:grid-cols-2 whitespace-pre-line">
        {results.map((result: any) => <ConsultantCard consultant={{...result.profile, evaluation: result.evaluation, fitScore: result.fitScore}} />)}
      </div>
      )}

    </div>
  );
};

export default App;
