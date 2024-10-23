document.addEventListener('DOMContentLoaded', () => {
    let currentLanguage = 'hu-HU';
    //footer elements
    document.getElementById('content-language').addEventListener('change', (event) => changeLanguage(event.target.value));
    document.getElementById('footer-call-us').addEventListener('click', () => {});
    document.getElementById('footer-mail-us').addEventListener('click', () => openMail());
    document.getElementById('footer-facebook').addEventListener('click', () => openFacebook());
    document.getElementById('footer-instagram').addEventListener('click', () => openInstagram());


    function changeLanguage( targetLanguage )
    {
        if(targetLanguage !== currentLanguage)
        {

        }
    }

    function openMail()
    {
        window.open('mailto:', '_blank');
    }

    function openFacebook()
    {
        window.open('https://facebook.com', '_blank');
    }

    function openInstagram()
    {
        window.open('https://www.instagram.com/', '_blank');
    }
});