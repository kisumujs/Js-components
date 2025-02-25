class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const container = document.createElement("div");
        container.classList.add("login-container");

        container.innerHTML = `
        <div class="left-section">
             <h2>Capturing Moments, Creating Memories</h2>
                    </div>
         <div class="right-section">
                        <h2>Welcome Back</h2>
                        <p>Please Enter your Account details</p>
                            <input type="email" placeholder="Email">
                            <input type="password" placeholder="Enter your password">
                           <div class="terms">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <p>Or register with</p>
                        <button class="social-btn">
                        <text class = "google-text" x="10" y="30" font-family="Poppins, Arial, sans-serif"  font-weight="bold">
                                <span class="blue">G</span>
                                <span class="red">o</span>
                                <span class="yellow">o</span>
                                <span class="blue">g</span>
                                <span class="green">l</span>
                                <span class="red">e</span>
                        </text>
                        </button>
                        <button class="social-btn facebook">
                      <img src="https://img.icons8.com/fluency/28/facebook-new.png" alt="Facebook" />
                    </button>
                     <div class="create-account">
                  <p>Don't have an account? <a href="#">Create an account</a></p>
                </div>
         </div>

        `;
    }
}