import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import './styles/Home.css';

const Home = () => {
    const navigate = useNavigate();
    const threeContainerRef = useRef(null);

    useEffect(() => {
        // Three.js setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        threeContainerRef.current.appendChild(renderer.domElement);
        
        // Create starry background
        const particlesGeometry = new THREE.BufferGeometry();
        const count = 1500;
        
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        
        for(let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
            colors[i] = Math.random();
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
        });
        
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);
        
        camera.position.z = 3;
        
        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            particles.rotation.x += 0.0005;
            particles.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };
        
        animate();
        
        // Responsive handling
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (threeContainerRef.current) {
                threeContainerRef.current.removeChild(renderer.domElement);
            }
            
            // Dispose resources
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    const handleClick = () => {
        navigate('/surprise');
    };

    return (
        <div className="container">
            <div ref={threeContainerRef} className="three-container"></div>
            <div className="content">
                <h1 className="title">Little Surprise For You</h1>
                <button className="button" onClick={handleClick}>
                    Click Me
                </button>
            </div>
        </div>
    );
};

export default Home;