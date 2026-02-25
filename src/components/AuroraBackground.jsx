import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AuroraBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        mountRef.current.appendChild(renderer.domElement);

        // Aurora Plane (using a custom shader material for smooth gradients)
        // For simplicity and performance without relying on external shader assets,
        // we will create a multi-colored animated plane using vertex colors and a basic material,
        // or a highly subdivided mesh that undulates like a flag.

        const geometry = new THREE.PlaneGeometry(20, 20, 64, 64);

        // Let's use a standard material with a custom color gradient applied to vertices
        // But for a pure "Aurora" or premium SaaS feel, we can just use 
        // overlapping moving point lights on a highly specular white plane, or a custom Shader.
        // We'll use a ShaderMaterial for the best effect.

        const vertexShader = `
            varying vec2 vUv;
            varying float vElevation;
            uniform float uTime;
            
            // Simplex noise function
            vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
            vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
            float snoise(vec3 v){ 
              const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
              const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
              vec3 i  = floor(v + dot(v, C.yyy) );
              vec3 x0 = v - i + dot(i, C.xxx) ;
              vec3 g = step(x0.yzx, x0.xyz);
              vec3 l = 1.0 - g;
              vec3 i1 = min( g.xyz, l.zxy );
              vec3 i2 = max( g.xyz, l.zxy );
              vec3 x1 = x0 - i1 + 1.0 * C.xxx;
              vec3 x2 = x0 - i2 + 2.0 * C.xxx;
              vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
              i = mod(i, 289.0 ); 
              vec4 p = permute( permute( permute( 
                         i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                       + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
                       + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
              float n_ = 1.0/7.0;
              vec3  ns = n_ * D.wyz - D.xzx;
              vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
              vec4 x_ = floor(j * ns.z);
              vec4 y_ = floor(j - 7.0 * x_ );
              vec4 x = x_ *ns.x + ns.yyyy;
              vec4 y = y_ *ns.x + ns.yyyy;
              vec4 h = 1.0 - abs(x) - abs(y);
              vec4 b0 = vec4( x.xy, y.xy );
              vec4 b1 = vec4( x.zw, y.zw );
              vec4 s0 = floor(b0)*2.0 + 1.0;
              vec4 s1 = floor(b1)*2.0 + 1.0;
              vec4 sh = -step(h, vec4(0.0));
              vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
              vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
              vec3 p0 = vec3(a0.xy,h.x);
              vec3 p1 = vec3(a0.zw,h.y);
              vec3 p2 = vec3(a1.xy,h.z);
              vec3 p3 = vec3(a1.zw,h.w);
              vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
              p0 *= norm.x;
              p1 *= norm.y;
              p2 *= norm.z;
              p3 *= norm.w;
              vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
              m = m * m;
              return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                            dot(p2,x2), dot(p3,x3) ) );
            }

            void main() {
                vUv = uv;
                
                vec3 pos = position;
                // Move the plane up and down like a wave using noise
                float noiseFreq = 1.5;
                float noiseAmp = 0.5;
                vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y * noiseFreq, pos.z);
                pos.z += snoise(noisePos) * noiseAmp;
                
                vElevation = pos.z;
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `;

        const fragmentShader = `
            varying vec2 vUv;
            varying float vElevation;
            uniform float uTime;
            
            void main() {
                // Smooth, premium pastel colors for business identity
                // Blue, Purple, Soft Pink
                vec3 color1 = vec3(0.0, 0.47, 1.0); // Apple Blue
                vec3 color2 = vec3(0.9, 0.9, 0.98); // Very light grey/blue
                vec3 color3 = vec3(0.7, 0.3, 1.0); // Purple
                
                // Mix colors based on UV and elevation
                float mixRatio = vUv.x * 0.5 + vUv.y * 0.5 + vElevation * 0.3;
                
                // Pulsing intensity
                mixRatio += sin(uTime * 0.5) * 0.1;
                
                vec3 finalColor = mix(color2, color1, smoothstep(0.0, 1.0, mixRatio));
                finalColor = mix(finalColor, color3, smoothstep(0.5, 1.5, mixRatio));
                
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 }
            },
            wireframe: false,
            side: THREE.DoubleSide
        });

        const plane = new THREE.Mesh(geometry, material);
        // Tilt the plane so it looks like a deep floor/background
        plane.rotation.x = -Math.PI / 3;
        plane.position.y = -1;
        plane.position.z = -2;
        scene.add(plane);

        // Resize handler
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onWindowResize);

        // Animation Loop
        const clock = new THREE.Clock();
        let animationFrameId;

        const render = () => {
            animationFrameId = requestAnimationFrame(render);

            const elapsedTime = clock.getElapsedTime();
            material.uniforms.uTime.value = elapsedTime;

            // Slowly rotate the entire plane for more dynamic feel
            plane.rotation.z = elapsedTime * 0.05;

            renderer.render(scene, camera);
        };

        render();

        // Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
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
                pointerEvents: 'none', // Don't block clicks
                background: '#fafafa' // Very light, off-white background
            }}
        />
    );
};

export default AuroraBackground;
