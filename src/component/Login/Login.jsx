import './Login.css';
import imgcover from '../asset/imgcover.svg';


const Login= (props) => {
    return(
        <>
        <main className="bck-login">
            <div className="cover-login">
                <div className="box-cover">
                    <img src={imgcover} alt="view video" className="img-cover"/>
                </div>
                <div className="content-login">
                   <h2><span>bestvideo </span></h2> 
                   <div className='login-input'>
                        <input type="url" placeholder='lien instagram' />
                   </div>
                   <div className='login-input'>
                        <input type="url" placeholder='lien twitter' />
                   </div>
                   <div className='login-input'>
                        <input type="url" placeholder='lien facebook' />
                   </div>
                   <div className='btn-login'>
                        <div id={props.id} className='googleButton'>
                            connect with google
                        </div>
                   </div>
                </div>
            </div>
            
        </main> 
        </>
    )
}
export default Login