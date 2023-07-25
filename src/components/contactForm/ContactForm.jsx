import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector('.formMessage');

    console.log(formMess);

    form.current.reset();
    formMess.innerHTML = `<p class="success tilt-in-left-1">Message envoyé !</p>`;
    setTimeout(() => {
      formMess.innerHTML = `<p class="success slit-out-vertical">Message envoyé !</p>`;
    }, 2000);
    setTimeout(() => {
      formMess.innerHTML = '';
    }, 2500);

    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAILJS_SERVICEID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATEID,
    //     form.current,
    //     process.env.REACT_APP_EMAIJS_ID
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.txt);
    //       form.current.reset();
    //       formMess.innerHTML = `<p class="success tilt-in-left-1">Message envoyé !</p>`;
    //       setTimeout(() => {
    //         formMess.classList.replace('tilt-in-left-1', 'slit-out-vertical');
    //       }, 2000);
    //       setTimeout(() => {
    //         formMess.innerHTML = '';
    //       }, 2500);
    //     },
    //     (error) => {
    //       console.log(error);
    //       formMess.innerHTML = `<p class="error">Une erreur s'est produite, veuillez réessayer</p>`;
    //       setTimeout(() => {
    //         formMess.innerHTML = '';
    //       }, 2500);
    //     }
    //   );
  };

  return (
    <div className="form-container">
      <h2>Contact</h2>
      <p className='contact-description'>
        <span>
          Vous avez un projet en tête ou vous voulez simplement me dire bonjour
          ?
        </span>
        <span>N&apos;hésitez pas à m&apos;envoyer un message !</span>
      </p>
      <form className="form-content" ref={form} onSubmit={sendEmail}>
        <div className="formMessage"></div>
        <div className="form-input-container">
          <label>Nom</label>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            id="name"
            placeholder="Indiquez votre nom"
          />
        </div>
        <div className="form-input-container">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            id="email"
            placeholder="Sur quel adresse dois-je vous répondre?"
          />
        </div>
        <div className="form-input-container">
          <label>Message</label>
          <textarea
            name="message"
            id="mess"
            cols={30}
            rows={10}
            placeholder="Entrez votre message"
            required
          />
        </div>
        <input type="submit" value="Envoyer" className="button" />
      </form>
    </div>
  );
};

export default ContactForm;
