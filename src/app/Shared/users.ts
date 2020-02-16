import { User } from "./user";

export const USER: User[] = [
    {
        id: 1,
        name: 'Anchal Gupta',
        role: 'Administrator',
        claims: ['CanViewCourses', 'CanViewFeatures', 'CanModifyFeatures', 'CanViewCourseDetailsPage'],
        username: "anchal",
        password: "anchal"
    },
    {
        id: 2,
        name: 'Sachin Dev Tomar',
        role: 'Sub-Administrator',
        claims: ['CanViewCourses', 'CanViewFeatures'],
        username: "sachin",
        password: "sachin"
    }
];