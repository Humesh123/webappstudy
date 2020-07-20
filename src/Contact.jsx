import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    });

    const InputEvent = (event) =>{
        const {name, value} = event.target;

        setData((prev)=>{
            return {
                ...prev,
                [name]:value,
            }
        })

    }

    const formSubmit = (e) => {
        e.preventDefault();

        alert(
            `My name id ${data.fullname}. my mobile number is ${data.phone}. my email is ${data.email}. ${data.msg}`
        );
    }
    return(
        <>
              <div className="my-5" >
                <h1 className="text-center" >Our Services</h1>
              </div>
              <div className=" container contact_div">
                  <div className="row">
                      <div  className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" value={data.fullname} name="fullname" onChange={InputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>s
                            <input type="number" className="form-control" id="exampleFormControlInput1" value={data.phone} name="phone" onChange={InputEvent} placeholder="Enter phone number" />
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" value={data.email} name="email" onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" value={data.msg} name="msg" onChange={InputEvent}  rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>

                      </div>
                  </div>
              </div>
        </>
    )
}


export default Contact;