import React from 'react'
import './Talk.scss'
import instagramIcon from '../../img/Instagram.png'
import linkedInIcon from '../../img/LinkedIn.png'
import telegramIcon from '../../img/telegram.png'

export default function Talk() {
    const [formData, setFormData] = React.useState(
        { name: "", email: "", message: "" }
    )
    const [blurData, setBlurData] = React.useState(
        { name: false, email: false, message: false }
    )
    const [formErrors, setFormErrors] = React.useState({})

    function handleChange(event) {
        setFormData((prevForm) => {
            return {
                ...prevForm,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormErrors(validate(formData))
    }

    function handleFocus(event) {
        console.log(1)
        setBlurData((prevBlurData => {
            return {
                ...prevBlurData,
                [event.target.name]: true
            }
        }))
    }

    function validate(formValues) {
        const errors = {}
        if (!formValues.name) {
            errors.name = "Input your name"
        }
        if (!formValues.email) {
            errors.email = "Input your email"
        }
        if (!formValues.message) {
            errors.message = "Input your message"
        }

        return errors
    }

    return (
        <section id="talk" className='talk'>
            <div className="talk__container">
                <p className="talk__description">
                    Leave your name, email, a brief message and we will contact you as soon as possible and discuss your questions
                </p>
                <div className="talk__wrapper">
                    <form className='talk__form' onSubmit={handleSubmit}>
                        <h1 className='talk__label'>Let`s talk</h1>
                        <input className='talk__input' type="text" value={formData.name} onChange={handleChange} name="name" placeholder='name' onBlur={handleFocus} focused={blurData.name.toString()} />
                        {formErrors.name && <p className="error-name error-text">{formErrors.name}</p>}
                        <input className='talk__input' type="text" value={formData.email} onChange={handleChange} name="email" placeholder='email' onBlur={handleFocus} focused={blurData.email.toString()} />
                        {formErrors.email && <p className='error-text error-email'>{formErrors.email}</p>}
                        <textarea className='talk__input talk__area' type="text" value={formData.message} onChange={handleChange} onBlur={handleFocus} name="message" placeholder='message' focused={blurData.message.toString()} />
                        {formErrors.message && < p className='error-message error-text'>{formErrors.message}</p>}
                        <button type='submit' className='talk__btn'>SEND</button>
                    </form>
                </div>
                <div className="talk__socials">
                    <a href='/#'><img src={instagramIcon} alt="" /></a>
                    <a href='/#'><img src={linkedInIcon} alt="" /></a>
                    <a href='/#'><img src={telegramIcon} alt="" /></a>
                </div>
            </div>
        </section >
    )
}