import React from 'react';
import './App.css'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xayzqrel");
  if (state.succeeded) {
      return <p>Thank you! We will be in touch shortly!</p>;
  } 

  
  return (
      <form  onSubmit={handleSubmit}> <input type="hidden" name="_language" value="en" />
        <label htmlFor="email">
          Your Email address:
        </label>
        
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="email..."
          required='required'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />

        <label htmlFor="email">
          Your message:
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="type your message..."
          required='required'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
    </form>
  );
}

export default ContactForm;
