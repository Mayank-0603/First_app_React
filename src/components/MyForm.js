import React, { useState } from 'react'
import "../react_stylesheets/my_form.css"

export default function MyForm(props) {
    const [text, setText] = useState("");

    function enterText(event) {
        setText(event.target.value);
    }

    function fontChanger(event) {
        const input_box = document.getElementById("myBox_1");
        input_box.style.fontFamily = event.target.value;
    }

    function countWords(sentence) {
        let regex = /[^a-zA-Z0-9 ]/g; // FILTER
        const filter_1 = sentence.replace(regex, ""); // FILTER FOR EXPRESSIONS
        const words_set = filter_1.split(/\s+/); //SPLITTING WORDS ON BASIS OF SPACES
        const words = words_set.filter((item) => { return item.length !== 0 }); // REMOVING EXTRA SPACES
        return words.length;
    }
    
    return (
        <div id='form_section'>
            <h2 id='heading' className={`text_left text-${props.mode === "default" ? "dark" : "default"}`}>My demo form</h2>
            <div id="text_part">
                <label htmlFor="myBox_1" className={`form_label text_left text_left text-${props.mode === "default" ? "dark" : "default"}`}><strong>Example textarea</strong></label>
                <textarea name="userText" id="myBox_1" className={`background_${props.mode} text_left text-${props.mode === "default" ? "dark" : "default"}`} rows="10" onChange={enterText} value={text}></textarea>
            </div>
            <div id="font_section" className='text_left'>
                <span className={`text-${props.mode === "default" ? "dark" : "default"}`}>Choose your font : </span>
                <select name="userFont" id="font_Set" onChange={fontChanger}>
                    <option value="" hidden className='option'>Choose your font</option>
                    <option value="Product Sans" className='option'>Product Sans</option>
                    <option value="Roboto" className='option'>Roboto</option>
                    <option value="system-ui" className='option'>System UI(default)</option>
                    <option value="monospace" className='option'>Monospace</option>
                </select>
            </div>
            <div id="word_count" className='text_left'>
                <p className={`text-${props.mode === "default" ? "dark" : "default"}`}>Total words = {text.length === 0 ? 0 : countWords(text)}</p>
                <p className={`text-${props.mode === "default" ? "dark" : "default"}`}>Total character length = {text.length}.</p>
                <div id="preview_Section" className={`text-${props.mode === "default" ? "dark" : "default"}`}>
                    <h3>Preview</h3>
                    <p>{text.length === 0 ? "Enter your text to preview" : text}</p>
                </div>
            </div>
        </div>
    )
}
