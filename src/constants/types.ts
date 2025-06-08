export interface ConsultantsResponse {
    profile: ConsultantsRecord;
    evaluation: string;
    fitScore: number;
}

export interface ConsultantsRecord {
    id?: string | number;
    name: string;
    location: string;
    experience: number;
    fitScore?: number;
    pros?: string;
    cons?: string;
    questions?: string;
    evaluation?: string;
    skills?: string;
    summary?: string;
}