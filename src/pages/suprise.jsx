import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Surprise.css';

const Surprise = () => {
    const navigate = useNavigate();
    const [hearts, setHearts] = useState([]);
    const [collectedHearts, setCollectedHearts] = useState(0);
    const [gameCompleted, setGameCompleted] = useState(false);
    const totalHearts = 30; // Total hearts displayed
    const heartsToWin = 10;  // Hearts needed to win
    
    // Calculate tank fill percentage
    const fillPercentage = Math.min((collectedHearts / heartsToWin) * 100, 100);
    
    // Generate random positions for hearts
    useEffect(() => {
        const newHearts = [];
        for (let i = 0; i < totalHearts; i++) {
            newHearts.push({
                id: i,
                x: Math.random() * 80 + 10, // 10% to 90% of the screen width
                y: Math.random() * 50, // Start hearts from top half of screen
                delay: Math.random() * 2, // Random animation delay
                speed: Math.random() * 20 + 25, // Slower speed: 25-45s to complete animation
                direction: Math.random() > 0.5 ? 'left' : 'right', // Random direction
                collected: false
            });
        }
        setHearts(newHearts);
    }, []);
    
    // Handle heart click with more reliable detection
    const collectHeart = (id, e) => {
        // Stop propagation to prevent click issues
        e.stopPropagation();
        
        // Update hearts state with the collected heart
        setHearts(prevHearts => 
            prevHearts.map(heart => 
                heart.id === id ? { ...heart, collected: true } : heart
            )
        );
        
        // Update collected hearts count
        setCollectedHearts(prev => {
            const newCount = prev + 1;
            // Check if player has collected enough hearts to win
            if (newCount === heartsToWin) {
                setGameCompleted(true);
                playCompletionSound();
            }
            return newCount;
        });
    };
    
    // Play a simple melody when all hearts are collected
    const playCompletionSound = () => {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88];
            
            notes.forEach((frequency, index) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.type = 'sine';
                oscillator.frequency.value = frequency;
                
                gainNode.gain.value = 0.1;
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.start(audioContext.currentTime + index * 0.2);
                oscillator.stop(audioContext.currentTime + index * 0.2 + 0.2);
            });
        } catch (error) {
            console.log("Audio couldn't be played:", error);
        }
    };
    
    const handleBack = () => {
        navigate('/');
    };
    
    return (
        <div className="darkTheme">
            {!gameCompleted ? (
                <>
                    <h1 style={{ marginBottom: '20px' }}>Collect 10 hearts!</h1>
                    <div className="heart-game">
                        {hearts.map(heart => (
                            !heart.collected && (
                                <div 
                                    key={heart.id}
                                    className="floating-heart"
                                    style={{
                                        left: `${heart.x}%`,
                                        top: `${heart.y}%`,
                                        animationDelay: `${heart.delay}s`,
                                        animation: `scroll${heart.direction === 'left' ? 'Left' : 'Right'} ${heart.speed}s linear infinite`,
                                    }}
                                    onClick={(e) => collectHeart(heart.id, e)}
                                >
                                    ❤️
                                </div>
                            )
                        ))}
                    </div>
                    
                    {/* Heart-shaped progress tank */}
                    <div className="heart-tank-container">
                        <div className="heart-tank">
                            <div 
                                className="heart-tank-fill" 
                                style={{ height: `${fillPercentage}%` }}
                            ></div>
                        </div>
                        <div style={{ marginTop: '10px', zIndex: 20, position: 'relative' }}>
                            {collectedHearts} / {heartsToWin} hearts
                        </div>
                    </div>
                </>
            ) : (
                <div className="heart-game">
                    <div className={`big-heart ${gameCompleted ? 'revealed' : ''}`}>
                        ❤️
                    </div>
                    <div className={`message ${gameCompleted ? 'revealed' : ''}`}>
                        I ❤️ YOU
                    </div>
                    {/* Heart particles that appear when game is completed */}
                    <div className="heart-particles">
                        {Array(20).fill().map((_, i) => (
                            <div 
                                key={i}
                                style={{
                                    position: 'absolute',
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    fontSize: `${Math.random() * 20 + 10}px`,
                                    opacity: gameCompleted ? 0.7 : 0,
                                    transition: 'opacity 1s ease',
                                    animation: `float ${Math.random() * 3 + 2}s infinite ease-in-out`
                                }}
                            >
                                ❤️
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <button className="button" onClick={handleBack}>
                {gameCompleted ? "Back to Home" : "Go Back"}
            </button>
        </div>
    );
};

export default Surprise;