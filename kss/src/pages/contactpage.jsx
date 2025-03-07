import React from 'react';

function ContactPage() {
  return (
    <div>
      <h1>Контакти</h1>
      <form>
        <label>
          Ваше ім'я:
          <input type="text" name="name" />
        </label>
        <label>
          Ваше повідомлення:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
}

export default ContactPage;
