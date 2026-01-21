function Agent_Profile() {

    const Profile = document.querySelector('.Division-Portfollio');
    const Division = document.querySelector('.main-section');
    const Featured = document.querySelector('.Agent-Promotion');
    const ViewMore = document.getElementById('ViewMore');

    // ViewMore.addEventListener('click', () => {

    //     Profile.style.display = 'block';

    //     Division.style.display = 'none';

    //     Featured.style.display = 'none';
    // })
    

    

    ViewMore.forEach(button => {
    button.addEventListener('click', () => {
        Profile.style.display = 'block';
    });
    });

        

}

Agent_Profile();