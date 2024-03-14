export default function Login() {
  return (
    <>
    <main className="login-page">
        <div className="login-container">
            <h2>
                Login
            </h2>
            <form>
                <div className="login-field">
                    <label>
                        Username
                    </label>
                    <br />
                    <input type="text" />
                </div>
                <div className="login-field">
                    <label>
                        Password
                    </label>
                    <br />
                    <input type="password" />
                </div>
                <div>
                    <button className="login-button" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </main>
    </>
  )
}
