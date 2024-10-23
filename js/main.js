document.addEventListener('DOMContentLoaded', () => {
    let currentLanguage = 'hu-HU';
    //contact elements
    document.getElementById('mail').addEventListener('click', () => openMail());
    document.getElementById('number').addEventListener('click', () => callNumber);
    document.getElementById('cont-insta').addEventListener('click', () => openInstagram());
    document.getElementById('cont-fb').addEventListener('click', () => openFacebook());
    //footer elements
    document.getElementById('content-language').addEventListener('change', (event) => changeLanguage(event.target.value));
    document.getElementById('footer-call-us').addEventListener('click', () => callNumber());
    document.getElementById('footer-mail-us').addEventListener('click', () => openMail());
    document.getElementById('footer-facebook').addEventListener('click', () => openFacebook());
    document.getElementById('footer-instagram').addEventListener('click', () => openInstagram());


    function changeLanguage( targetLanguage )
    {
        if(targetLanguage !== currentLanguage)
        {
            currentLanguage = targetLanguage;
            let filePath = '';
            if(targetLanguage === 'hu-HU'){
                filePath = '../resources/i18n/hu-HU.json';
            }
            else if(targetLanguage === 'sr-SR'){
                filePath = '../resources/i18n/sr-SR.json';
            }

            fetch(filePath)
                .then(response => {
                    if(!response.ok){
                        alert('Language change error!');
                    }
                    return response.json();
                })
                .then(data => changeProperties(data))
                .catch(error => {
                    alert(error);
                });
        }
    }

    function changeProperties(data)
    {
        document.getElementById('content-language-label').innerHTML = data.contentLanguage;
        document.getElementById('hu-HU').innerHTML = data.huHU;
        document.getElementById('sr-SR').innerHTML = data.srSR;
    }

    function callNumber()
    {
        //not implemented yet
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