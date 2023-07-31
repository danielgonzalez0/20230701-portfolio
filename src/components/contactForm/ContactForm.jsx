import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector('.formMessage');

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        form.current,
        process.env.REACT_APP_EMAIJS_ID
      )
      .then(
        (result) => {
          console.log(result.txt);
          form.current.reset();
          formMess.innerHTML = `${t('contact.confirmation.success.part1')}`;
          setTimeout(() => {
            formMess.innerHTML = `${t('contact.confirmation.success.part2')}`;
          }, 2000);
          setTimeout(() => {
            formMess.innerHTML = '';
          }, 2500);
        },
        (error) => {
          console.log(error);
          formMess.innerHTML = `${t('contact.confirmation.error.part1')}`;
          setTimeout(() => {
            formMess.innerHTML = `${t('contact.confirmation.success.part2')}`;
          }, 2000);
          setTimeout(() => {
            formMess.innerHTML = '';
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>{t('contact.title')}</h2>
      <p className="contact-description">
        <span>{t('contact.description.part1')}</span>
        <span>{t('contact.description.part2')}</span>
      </p>
      <form className="form-content" ref={form} onSubmit={sendEmail}>
        <div className="formMessage"></div>
        <div className="form-input-container">
          <label>{t('contact.form-name.label')}</label>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            id="name"
            placeholder={t('contact.form-name.input')}
          />
        </div>
        <div className="form-input-container">
          <label>{t('contact.form-email.label')}</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            id="email"
            placeholder={t('contact.form-email.input')}
          />
        </div>
        <div className="form-input-container">
          <label>{t('contact.form-message.label')}</label>
          <textarea
            name="message"
            id="mess"
            cols={30}
            rows={10}
            placeholder={t('contact.form-message.input')}
            required
          />
        </div>
        <input type="submit" value={t('contact.send')} className="button" />
      </form>
    </div>
  );
};

export default ContactForm;
