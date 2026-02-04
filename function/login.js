function Login() {

    const LoginBtn = document.querySelector('.btn-log');
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
    const Signup = document.querySelector('.btn-sign');

     Signup.addEventListener('click', () => {

        SignupDivision.style.display = 'block';
        LoginDivision.style.display = 'none';

        Description.style.display = 'none';
        Image.style.display = 'none';
    });

}

Signup();




document.addEventListener('DOMContentLoaded', () => {

    const SignupForm = document.getElementById('Sign-up-Form');
    const formMessage = document.getElementById('form-message');
     const Section = document.getElementById('Section')

      const logToConsole = (data) => {
        console.log("New Submission Received:");
        console.table(data);
    };

    const saveToLocalStroge = (data) => {

        const existingSubmissions = JSON.parse(localStorage.getItem('contact_submissions')) || [];

        const submissionWithDate = { ...data, submittedAt: new Date().toLocaleString() };

        existingSubmissions.push(submissionWithDate);

        localStorage.setItem('contact_submissions', JSON.stringify(existingSubmissions));

         console.log(`Stored! Total submissions: ${existingSubmissions.length}`);
    };

    
if(SignupForm) {
    SignupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data =Object.fromEntries(formData.entries());

        saveToLocalStroge(data);

        if (formMessage) {
                formMessage.textContent = `Submission saved successfully!`;
                formMessage.classList.remove('opacity-0');
                formMessage.classList.add('opacity-100', 'bg-blue-100', 'text-blue-800', 'text-center');
                setTimeout(() => formMessage.classList.replace('opacity-100', 'opacity-0'), 3000);
            }
            Section.style.display = 'none'; 
            this.reset();
        });
}
})

document.addEventListener("DOMContentLoaded", displaySubmissions);

function displaySubmissions() {
    

    const tableBody = document.getElementById("tableBody");

    const data = JSON.parse(localStorage.getItem("contact_submissions")) || [];

    tableBody.innerHTML = "";

    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="3">No submissions yet</td></tr>`;
        return;
    }

    Section.style.display = 'block';

    data.forEach((item) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.email}</td>
            <td>${item.password}</td>
            <td>${item.code}</td>
        `;

        tableBody.appendChild(row);
    });
}
