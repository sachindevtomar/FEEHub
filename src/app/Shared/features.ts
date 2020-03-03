import { Feature } from '../models/feature';

export const FEATURES: Feature[] = [
  {
    Name: 'Show Home page',
    Description: 'When it is enabled user can see Home page',
    CreatedDate: new Date("2019-01-16"),
    UpdatedDate: new Date("2019-01-18"),
    State: true
  },
  {
    Name: 'Show View Details button for courses',
    Description: 'When it is enabled user can see View Details button for each course in Home page',
    CreatedDate: new Date("2019-05-17"),
    UpdatedDate: new Date("2019-06-18"),
    State: true
  },
  {
    Name: 'Show Courses page',
    Description: 'When it is enabled user can see Courses page',
    CreatedDate: new Date("2019-09-19"),
    UpdatedDate: new Date("2019-10-20"),
    State: false
  },
  {
    Name: 'Show Courses filter',
    Description: 'When it is enabled user can see Courses page filter',
    CreatedDate: new Date("2019-03-31"),
    UpdatedDate: new Date("2019-06-16"),
    State: false
  },
  {
    Name: 'Show Edit profile',
    Description: 'When it is enabled user can see Edit profile page',
    CreatedDate: new Date("2020-01-14"),
    UpdatedDate: new Date("2020-02-09"),
    State: true
  },
  {
    Name: 'Show Featues page',
    Description: 'When it is enabled user can see Features page',
    CreatedDate: new Date("2020-01-14"),
    UpdatedDate: new Date("2020-02-09"),
    State: true
  }
];
