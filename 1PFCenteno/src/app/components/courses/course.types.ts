import { Student } from "../students/student.types";

export interface Course {
    idCourse: string;
    name: string;
    price: number;
    teacher: string;
    students: Student[];
    rating: number[];
    feedback: string[];
}