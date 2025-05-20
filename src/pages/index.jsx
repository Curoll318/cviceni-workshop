import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { WorkshopIntro } from '../components/WorkshopIntro/';
import { Instructor } from '../components/Instructor/';
import { Venue } from '../components/Venue/';

const response = await fetch('http://localhost:4000/api/workshops/0');
const data = await response.json();
const workshop = data.data;

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <WorkshopIntro 
      title={workshop.title} 
      description={workshop.description} 
    />
    <Instructor 
      name={workshop.instructor.name} 
      email={workshop.instructor.email} 
    />
    <Venue 
      name={workshop.venue.name} 
      city={workshop.venue.city} 
      address={workshop.venue.address} 
    />
  </div>
);