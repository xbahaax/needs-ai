import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID
// You'll need to sign up at https://www.emailjs.com/ and get these credentials
const USER_ID = 'YOUR_USER_ID'; // Replace with your actual EmailJS User ID
const SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const DEMO_TEMPLATE_ID = 'YOUR_DEMO_TEMPLATE_ID'; // Replace with your template ID for demo requests
const CONTACT_TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID'; // Replace with your template ID for contact form
const NEWSLETTER_TEMPLATE_ID = 'YOUR_NEWSLETTER_TEMPLATE_ID'; // Replace with your template ID for newsletter

// Initialize EmailJS
emailjs.init(USER_ID);

/**
 * Send a demo request email
 * @param {Object} formData - The form data containing user information
 * @returns {Promise} - Promise resolving to the email send result
 */
export const sendDemoRequest = (formData) => {
  const templateParams = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    company: formData.company,
    industry: formData.industry,
    message: formData.message || 'Demo request'
  };

  return emailjs.send(SERVICE_ID, DEMO_TEMPLATE_ID, templateParams);
};

/**
 * Send a contact form email
 * @param {Object} formData - The form data containing user information and message
 * @returns {Promise} - Promise resolving to the email send result
 */
export const sendContactForm = (formData) => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message
  };

  return emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, templateParams);
};

/**
 * Subscribe a user to the newsletter
 * @param {string} email - The user's email address
 * @returns {Promise} - Promise resolving to the email send result
 */
export const subscribeToNewsletter = (email) => {
  const templateParams = {
    email: email,
    subscription_date: new Date().toISOString()
  };

  return emailjs.send(SERVICE_ID, NEWSLETTER_TEMPLATE_ID, templateParams);
};

export default {
  sendDemoRequest,
  sendContactForm,
  subscribeToNewsletter
};