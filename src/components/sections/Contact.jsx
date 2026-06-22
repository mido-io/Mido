import { useState } from 'react';

import Alert from '../Alert.jsx';
import Button from '../Button.jsx';
import EnvelopeCard from '../EnvelopeCard.jsx';
import SectionHeader from '../SectionHeader.jsx';
import useAlert from '../../hooks/useAlert.js';
import { profile } from '../../constants/profile.js';

const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const scheduleDismiss = () => {
    setTimeout(() => {
      hideAlert();
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      showAlert({
        text: 'Please fill in all fields before sending.',
        type: 'danger',
      });
      scheduleDismiss();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert({
        text: 'Please enter a valid email address.',
        type: 'danger',
      });
      scheduleDismiss();
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _replyto: email,
          _subject: `Portfolio message from ${name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      showAlert({
        text: 'Thank you for your message',
        type: 'success',
      });

      setForm({ name: '', email: '', message: '' });
      scheduleDismiss();
    } catch (error) {
      console.error(error);
      showAlert({
        text: `Message not sent. Try again or email me at ${profile.email}`,
        type: 'danger',
      });
      scheduleDismiss();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-12 lg:my-20" id="contact">
      {alert.show ? <Alert {...alert} onDismiss={hideAlert} /> : null}

      <SectionHeader
        title="Let's talk"
        subtitle="Whether you're looking to build a new website, improve an existing platform, or bring a unique project to life, I'm here to help."
      />

      <div className="contact-layout">
        <div className="contact-terminal">
          <div className="contact-terminal-header">
            <div className="contact-terminal-controls" aria-hidden="true">
              <span className="contact-terminal-dot contact-terminal-dot--close" />
              <span className="contact-terminal-dot contact-terminal-dot--min" />
              <span className="contact-terminal-dot contact-terminal-dot--max" />
            </div>
            <p className="contact-terminal-title">Contact</p>
          </div>

          <div className="contact-terminal-body">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6" noValidate>
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <Button
                name={loading ? 'Sending…' : 'Send Message'}
                type="submit"
                variant="primary"
                containerClass="w-full sm:w-auto"
                disabled={loading}
              />
            </form>
          </div>
        </div>

        <EnvelopeCard />
      </div>
    </section>
  );
};

export default Contact;
