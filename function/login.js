function Login() {

    const LoginBtn = document.querySelector('.btn');
    const Description = document.querySelector('.text');
    const Image = document.querySelector('.image-content');
    const LoginDivision = document.querySelector('.Login-Division');
    const SignupDivision = document.querySelector('.Signup-Division');
    const Signup = document.querySelector('.Sign-up');

    LoginBtn.addEventListener('click', () => {

        LoginDivision.style.display = 'block';
        SignupDivision.style.display = 'none';

         setTimeout(() => {
            LoginDivision.classList.add('active');
        }, 100);

        document.body.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2);";

        Description.style.display = 'none';
        Image.style.display = 'none';
    })

    
}

Login();


function Signup() {

    const Description = document.querySelector('.text');
    const Image = document.querySelector('.image-content');
    const LoginDivision = document.querySelector('.fill-division');
    const SignupDivision = document.querySelector('.Signup-Division');
    const Signup = document.querySelector('.Sign-up');

     Signup.addEventListener('click', () => {

        SignupDivision.style.display = 'block';
        LoginDivision.style.display = 'none';

        Description.style.display = 'none';
        Image.style.display = 'none';
    });

}

Signup();



