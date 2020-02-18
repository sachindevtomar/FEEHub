import { Course } from "./course";

export const COURSES: Course[] =[
    {
        id: 1001,
        courseName: 'Introduction to the C# Language and the .NET Framework',
        courseDescription: 'C# is an elegant and type-safe object-oriented language that enables developers to build a variety of secure and robust applications that run on the .NET Framework.',
        courseDetailsPageLink: 'https://link1',
        tags: ['C#','.Net'],
        duration: 15

    }, 
    {
        id: 1002,
        courseName: 'Xamarin',
        courseDescription: 'Xamarin is an open-source platform for building modern and performant applications for iOS, Android, and Windows with .NET. Xamarin is an abstraction layer that manages communication of shared code with underlying platform code. Xamarin runs in a managed environment that provides conveniences such as memory allocation and garbage collection.',
        courseDetailsPageLink: 'https://link1',
        tags: ['C#','Xamarin'],
        duration: 6
    },
    {
        id: 1003,
        courseName: 'Introduction to F#',
        courseDescription: 'F# programming primarily involves defining types and functions that are type-inferred and generalized automatically. This allows your focus to remain on the problem domain and manipulating its data, rather than the details of programming.',
        courseDetailsPageLink: 'https://link1',
        tags: ['C#','F#'],
        duration: 15
    },
    {
        id: 1004,
        courseName: 'Bing Spatial Data Services',
        courseDescription: 'The Bing™ Spatial Data Services Application Programming Interface (API) provides a Representational State Transfer (REST) interface that can geocode, store and query spatial data. This simple REST interface accomplishes tasks by setting parameters in a URL and then submitting the URL as an HTTP request.',
        courseDetailsPageLink: 'https://link1',
        tags: ['Bing','Web', 'Maps'],
        duration: 4
    }

];