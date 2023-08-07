import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const ContactForm = () => {
  const form = useRef();
  const captchaRef = useRef(null);
  const { t } = useTranslation();
  console.log(process.env.REACT_APP_SITE_KEY);

  function onChange(value) {
    console.log('Captcha value:', value);
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    const formMess = document.querySelector('.formMessage');
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    await axios
      .post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
      )
      .then((res) => {
        if (res.data.success) {
          console.log(res, res.data);
        } else {
          console.log('captcha error');
        }
      })
      .catch((error) => {
        console.log(error);
      });

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
        <div className="recaptcha-container">
          <ReCAPTCHA
            sitekey={`${process.env.REACT_APP_SITE_KEY}`}
            ref={captchaRef}
            onChange={onChange}
          />
        </div>
        <input type="submit" value={t('contact.send')} className="button" />
      </form>
    </div>
  );
};

export default ContactForm;
