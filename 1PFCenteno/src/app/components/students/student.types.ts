import { Course } from "src/app/components/courses/course.types";

export interface Student { 
    name: string;
    lastname: string;
    courses: Course[];
    dni: number;
    email: string;
}