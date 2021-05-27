import React from 'react'

function Contact() {
    return (


        <div>

          <div className="container-fluid mt-4 topimg">
        <img src="img/seed.png" className="img-fluid" alt="product" />
      </div>
            <form className="form-section">
      
        <div className="row mb-4">
          <div className="col-12  col-xxl-6 col-lg-6">
            <div className="form-outline">
              <label className="form-label" for="form6Example1">First name</label>
              <input type="text" id="form6Example1" className="form-control" /> 
            </div>
          </div>
          <div className="col-12 col-xxl-6 col-lg-6">
            <div className="form-outline">
              <label className="form-label" for="form6Example2">Last name</label>
              <input type="text" id="form6Example2" className="form-control" />
            
            </div>
          </div>
        </div>
      
      
       
        <div className="form-outline mb-4">
          <label className="form-label" for="form6Example4">Address</label>
          <input type="text" id="form6Example4" className="form-control" />
         
        </div>
    
      
        
        <div className="form-outline mb-4">
          <label className="form-label" for="form6Example6">Phone</label>
          <input type="number" id="form6Example6" className="form-control" />
         
        </div>
      
       
          
        <div className="form-outline mb-4">
          <label className="form-label" for="form6Example6">Message</label>
          <textarea className="form-control" id="form6Example7" rows="4"></textarea>
         
        </div>
      
        
        <button type="submit" className="btn btn-primary btn-block mb-4">Sumbit</button>
      </form>
    

        </div>
    )
}

export default Contact;
