import { User } from "../models/user";

export const USER: User[] = [
    {
        name: 'Anchal Gupta',
        role: 'Administrator',
        username: "anchal",
        password: "anchal",
        claims: ["CanViewCourses", "CanViewFeatures", "CanModifyFeatures", "CanViewCourseDetailsPage"],
        emailid: "anchal@maq.com",
        phoneNumber: "000000-0000",
        country: "India",
        gender: "Female",
        areaOfInterest: []
    },
    {
        name: 'Sachin Dev Tomar',
        role: 'Sub-Administrator',
        username: "sachin",
        password: "sachin",
        claims: ["CanViewCourses", "CanModifyFeatures"],
        emailid: "sachin@maq.com",
        phoneNumber: "000000-0000",
        country: "Dubai",
        gender: "Male",
        areaOfInterest: []
    },
    {
        name: 'User 1',
        role: 'User',
        username: "user1",
        password: "pass1",
        claims: ["CanViewCourses", "CanViewFeatures"],
        emailid: "user1@maq.com",
        phoneNumber: "000000-0000",
        country: "Dubai",
        gender: "Male",
        areaOfInterest: []
    },
    {
        name: 'User 2',
        role: 'User',
        username: "user2",
        password: "pass2",
        claims: ["CanViewFeatures"],
        emailid: "user2@maq.com",
        phoneNumber: "000000-0000",
        country: "Dubai",
        gender: "Male",
        areaOfInterest: []
    },
    {
        name: 'User 3',
        role: 'User',
        username: "user3",
        password: "pass3",
        claims: ["CanViewCourses"],
        emailid: "user3@maq.com",
        phoneNumber: "000000-0000",
        country: "Dubai",
        gender: "Male",
        areaOfInterest: []
    },
    {
        name: 'User 4',
        role: 'User',
        username: "user4",
        password: "pass4",
        claims: [],
        emailid: "user4@maq.com",
        phoneNumber: "000000-0000",
        country: "Dubai",
        gender: "Male",
        areaOfInterest: []
    }
];
