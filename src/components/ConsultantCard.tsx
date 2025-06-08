import type { ConsultantsRecord } from "../constants/types";

const ConsultantCard = ({ consultant }: {consultant: ConsultantsRecord}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold">{consultant.name}</h2>
      <p className="text-sm text-gray-600">
        {consultant.experience} yrs - {consultant.location}
      </p>
      <p className="text-sm text-gray-600">
        {consultant.skills}
      </p>
      {consultant?.fitScore && (
        <p className="mt-2 text-sm">Fit Score: {consultant.fitScore}/100</p>
      )}
      <p className="text-sm mt-1">{consultant.summary}</p>
      {consultant?.evaluation && (
        <>
          <ul className="mt-2 text-sm list-disc list-inside">
            <li>
              <strong>Pros:</strong> {consultant.pros}
            </li>
            <li>
              <strong>Cons:</strong> {consultant.cons}
            </li>
            <li>
              <strong>Suggested Questions:</strong> {consultant.questions}
            </li>
          </ul>
          <p className="text-sm mt-1">Evaluation: {consultant.evaluation}</p>
        </>
      )}
    </div>
  );
};

export default ConsultantCard;
