import './App.css';
import {useFormik } from 'formik';

const App=()=> {
  
    const formik = useFormik({
      initialValues: { email: "",name: "" },
      onSubmit: values => {
        alert(JSON.stringify(values,null,2));
      }
    });

    return (
      <div className='form'>
        <form onSubmit={formik.handleSubmit}>
        <input  
            id="name"
            name="name"
            type="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your mail"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

export default App;
