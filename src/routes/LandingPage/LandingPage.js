import React from 'react';
import PetfulApiService from '../../services/petful-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons'

import './LandingPage.css';

class LandingPage extends React.Component {    

   async handleSubmit(e) {
        e.preventDefault();
        const { name } = e.target

        const newUser = {
          name: name.value,
        };

        localStorage.setItem('petful-user', JSON.stringify(newUser));
        await PetfulApiService.createUser(newUser);
        this.props.history.push('/adopted')
      }
  
    
  render() {
    return (
      <section className='landing-page'>

        <div className='intro'>
          <h2> Welcome to Find Pets <FontAwesomeIcon className='paw-icon' aria-label='paw-icon' icon={faPaw} size="1x" color=" #F0A74D"/></h2>
          <p>Find Pets is a cats and dogs shelter that gives you the opportunity to provide a loving home and find your perfect furry friend.</p>
          <p>
            As this shelter runs on a first in first out adoption policy, there is no browsing of animals. In order to make sure all animals get a deserving home, animals that have been with us the longest are up for adoption first.
          </p>
          <p><span className='start'>To start: </span> Place yourself in the adoption queue by entering your <span className='name'>name</span> below. Then wait until your name is at the top of the queue to adopt our next dog or cat.</p>
        </div>

        <form action='#' id='js-user-form' onSubmit={(e) => this.handleSubmit(e)}>
          <div className='form-group'>
            <label htmlFor='name'>name: </label>
            <input type='text' name='name' id='name' required/>  
          </div>
          <div className='form-group cta'>
            <button type='submit' className='button primary full'><span><FontAwesomeIcon className='paw-icon' aria-label='paw-icon' icon={faPaw} size="2x" color="#F0A74D"/> </span></button>
          </div>
        </form>

      </section>
    );
  };
}
export default LandingPage;