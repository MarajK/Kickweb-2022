var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), // Required
    path: '/lottiejs/money-lottie.json', 
    // Required (json von https://lottiefiles.com/web-player?lottie_url=https%3A%2F%2Fassets9.lottiefiles.com%2Fpackages%2Flf20_1jbzig4m.json)
    renderer: 'svg/canvas/html', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
})