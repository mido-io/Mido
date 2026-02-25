import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        // Fog to fade particles in the distance
        scene.fog = new THREE.FogExp2(0x000000, 0.001);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = 1000;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Append to DOM
        mountRef.current.appendChild(renderer.domElement);

        // Particles
        const geometry = new THREE.BufferGeometry();
        const particlesCount = 1500;
        const posArray = new Float32Array(particlesCount * 3);

        // Colors array for subtle green variance
        const colorsArray = new Float32Array(particlesCount * 3);
        const color = new THREE.Color();

        for (let i = 0; i < particlesCount * 3; i += 3) {
            // Spread particles across a wide area
            posArray[i] = (Math.random() - 0.5) * 3000; // x
            posArray[i + 1] = (Math.random() - 0.5) * 3000; // y
            posArray[i + 2] = (Math.random() - 0.5) * 3000; // z

            // Green terminal colors (0x1cdb4c with variance)
            color.setHSL(0.35 + Math.random() * 0.1, 0.8, 0.3 + Math.random() * 0.4);
            colorsArray[i] = color.r;
            colorsArray[i + 1] = color.g;
            colorsArray[i + 2] = color.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

        // Create a custom circular particle texture programmatically
        const createCircleTexture = () => {
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const context = canvas.getContext('2d');
            context.beginPath();
            context.arc(16, 16, 14, 0, Math.PI * 2);
            context.fillStyle = '#ffffff';
            context.fill();
            return new THREE.CanvasTexture(canvas);
        };

        const material = new THREE.PointsMaterial({
            size: 4,
            vertexColors: true,
            map: createCircleTexture(),
            alphaTest: 0.5,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true
        });

        const particlesMesh = new THREE.Points(geometry, material);
        scene.add(particlesMesh);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onDocumentMouseMove = (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.5;
            mouseY = (event.clientY - windowHalfY) * 0.5;
        };

        document.addEventListener('mousemove', onDocumentMouseMove);

        // Resize handler
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onWindowResize);

        // Animation Loop
        let animationFrameId;
        const render = () => {
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;

            animationFrameId = requestAnimationFrame(render);

            // Smoothly interpolate rotation towards mouse position
            particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
            particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

            // Very slow continuous forward rotation
            particlesMesh.rotation.z += 0.0005;

            renderer.render(scene, camera);
        };

        render();

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            if (mountRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                mountRef.current.removeChild(renderer.domElement);
            }
            cancelAnimationFrame(animationFrameId);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1, // Behind everything
                pointerEvents: 'none', // Don't block clicks from reaching the grid
                background: '#050505' // Darker than #121212 to let terminals pop
            }}
        />
    );
};

export default ParticleBackground;
