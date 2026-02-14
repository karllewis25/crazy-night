body {
    margin: 0;
    font-family: Arial, sans-serif;
    overflow: hidden;
}

.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ff4d6d, #ff758f);
    color: white;
    text-align: center;
}

.title {
    font-size: 4rem;
    margin-bottom: 20px;
}

.question {
    font-size: 2rem;
    margin-bottom: 40px;
}

.buttons {
    display: flex;
    gap: 20px;
}

button {
    padding: 15px 30px;
    font-size: 1.2rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s;
}

.yes {
    background: #ff1744;
    color: white;
}

.no {
    background: white;
    color: black;
    position: relative;
}

button:hover {
    transform: scale(1.1);
}

.message {
    height: 100vh;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    animation: fadeIn 2s ease;
}

.hidden {
    display: none;
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}
