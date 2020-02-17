import {Feature} from '../models/feature';

export const FEATURES: Feature[] = [
    {
        Name: 'Feature 1',
    Description: 'Feature Description 1',
    CreatedDate: new Date("2019-01-16"),
    UpdatedDate: new Date("2019-01-18"),
    State: true
    },
  {
    Name: 'Feature 2',
    Description: 'Feature Description 2',
    CreatedDate: new Date("2019-05-17"),
    UpdatedDate: new Date("2019-06-18"),
    State: true
  },
  {
    Name: 'Feature 3',
    Description: 'Feature Description 3',
    CreatedDate: new Date("2019-09-19"),
    UpdatedDate: new Date("2019-10-20"),
    State: false
  },
  {
    Name: 'Feature 4',
    Description: 'Feature Description 4',
    CreatedDate: new Date("2019-03-31"),
    UpdatedDate: new Date("2019-06-16"),
    State: false
  },
  {
    Name: 'Feature 5',
    Description: 'Feature Description 5',
    CreatedDate: new Date("2020-01-14"),
    UpdatedDate: new Date("2020-02-09"),
    State: true
  }
];
