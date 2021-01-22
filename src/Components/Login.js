import "../App.css";

function Login(props) {
    return (
        <>
            <div id="create-tweet">
                <h2>Login</h2>
                <form>
                    <label htmlFor="username">Nomen Usoris:</label>
                    <input type="text" name="username" onChange={props.handleInput} />
                    <br />
                    <label htmlFor="password">Secretum: </label>
                    <input  type="text" name="password" onChange={props.handleInput}/>
                    <br />
                    <button onClick={props.handleLogIn}>MITTE</button>
                    <br />
                </form>
            </div>
        </>
    )
}

export default Login;