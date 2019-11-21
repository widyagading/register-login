import React, {Component} from 'react'
import axios from 'axios'
import swal from 'sweetalert';
 
class login extends Component{
    constructor(){
        super()
        this.state={
            email: '',
            password: ''
        }
    }
    handleChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value})
    }
    handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(this.state)
        await axios.post("http://127.0.0.1:8000/api/register", this.state)
        swal("Oke", "Login berhasil!", "success");
    }

    render(){
        return(
            <div>
                <h5>Sign In</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="id">Email</label>
                        <input type="text" className="form-control" name="email" placeholder="Enter Your Email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="id">Password</label>
                        <input type="text" className="form-control" name="password" placeholder="Enter Your Password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-secondary">LOGIN</button>
                </form>
            </div>
        );
    }
}
export default login