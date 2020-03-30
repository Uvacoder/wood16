import React, { useState} from 'react'
import Layout from '../../components/Layout'
import '../../components/all.sass'

// build comment
const Index = () => {
  const [ status, setStatus ] = useState('')

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS") 
    } else {
        setStatus("ERROR")
    }
    };
    xhr.send(data);
  }

  var myContent

  if (status === 'SUCCESS') {
    myContent = (
      <Layout>
      <section className="section">
        <div className="container">
          <h2>Thanks!</h2>
        </div>
      </section>
    </Layout>
    )
  } else {
    myContent = (
      <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Contact</h1>
            <form onSubmit={submitForm} action='https://formspree.io/meqelkae' method="POST" className='myForm'>
              <h3>Name:</h3>
              <input type="text" name="name" className='inputBars'/><br/>
              <h3>Email:</h3>
              <input type="email" name="email" className='inputBars'/><br/>
              <h3>Message:</h3>
              <textarea type="textarea" rows='15' cols='16' name="message" className='myTextArea'></textarea><br/>
              {status === "SUCCESS" ? <p>Thanks!</p> : <button className='buttonStyle'>Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </div>
        </div>
      </section>
    </Layout>
    )
  }

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <form onSubmit={submitForm} action='https://formspree.io/meqelkae' method="POST" className='myForm'>
              <h3>Name:</h3>
              <input type="text" name="name" className='inputBars'/><br/>
              <h3>Email:</h3>
              <input type="email" name="email" className='inputBars'/><br/>
              <h3>Message:</h3>
              <textarea type="textarea" rows='15' cols='16' name="message" className='myTextArea'></textarea><br/>
              {status === "SUCCESS" ? <p>Thanks!</p> : <button className='buttonStyle'>Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
            </div>
          </div>
        </section>
      </Layout>
    )
}

export default Index