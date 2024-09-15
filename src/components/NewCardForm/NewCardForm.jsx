import { useState } from "react"

export function NewCardForm({addNewCard}) {
  const [form, setForm] = useState({ text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.text.length === 0) return; 
    addNewCard(form.text);
    setForm({ text: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ( {...prevForm, [name]: value})); 
  };

  return (
    <form className={'crud__form form-new-note'} onSubmit={handleSubmit}>
      <header className={'form-new-note__header'}>
        <div className={'form-new-note__title'}>New Note</div>
        <button className={'form-new-note__btn-send'}>
          <span className={'_visually-hidden'}>send</span>
        </button>
      </header>
      <textarea 
        className={'form-new-note__input'} 
        name={'text'} 
        value={form.text} 
        onChange={handleChange}
        rows={'8'}></textarea>
    </form>
  )
}