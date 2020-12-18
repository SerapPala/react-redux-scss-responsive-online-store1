import React, { Component } from 'react'



export default class Contact extends Component {

    state={
        name:'',
        lastname:'',
        email:'',
        message:'',
        sent:false
    }

    //handle inputs
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })

    }


    handleLastname=(e)=>{
        this.setState({
            lastname:e.target.value
        })
        
    }

    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
        
    }

    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        })
        
    }

    //end of handle inputs



    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='form__container'>
                            <div className='form'>
                                
                                    <form>
                                        <div className='heading'>İLETİŞİM FORMU</div>
                                        {/*single ıtem*/}
                                        <div className='singleItem'>
                                            <label htmlFor='name'>İsim</label>
                                            <input type='text'
                                             name='name' 
                                             className='name' 
                                             placeholder='Adınız'
                                             value={this.state.name}
                                             onChange={this.handleName}
                                             />
                                        </div>
                                        {/*end of single ıtem*/}

                                        {/*single ıtem*/}
                                        <div className='singleItem'>
                                            <label htmlFor='lastname'>Soyad</label>
                                            <input type='text' 
                                            name='lastname' 
                                            className='lastname' 
                                            placeholder='Soyadınız'
                                            value={this.state.lastname}
                                            onChange={this.handleLastname}
                                            />
                                        </div>
                                        {/*end of single ıtem*/}

                                        {/*single ıtem*/}
                                        <div className='singleItem'>
                                            <label htmlFor='email'>E-mail</label>
                                            <input type='text' 
                                            name='email' 
                                            className='email'
                                             placeholder='Email Adresiniz'
                                             value={this.state.email}
                                             onChange={this.handleEmail}                                 
                                             />
                                        </div>
                                        {/*end of single ıtem*/}  
                                                            
                                        {/*single ıtem*/}
                                        <div className='textAreasingleItem'>
                                        <label htmlFor='message'>Mesaj</label>
                                            <textarea name='message' 
                                            id='' cols='30' 
                                            rows='5' 
                                            placeholder='Mesajınız..'
                                            value={this.state.message}
                                            onChange={this.handleMessage} 
                                            />

                                            
                                        </div>
                                        {/*end of single ıtem*/}
                                        <div className='msg'>Butona Tıklayarak Bize Mesaj Gönderebilirsin.</div>
                                        <div className='btn'>
                                            <button className='btn__submit' type='submit'>Gönder</button>
                                        </div>
                                    </form>
                            </div>
                        </div>
                        
                </div>
            </div>
         </div>
        )
    }
}
