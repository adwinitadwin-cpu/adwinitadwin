// ===============================================
// Particles.js - Неоновий Фон з Частинками (ВИПРАВЛЕНО)
// ===============================================

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = {
        x: null,
        y: null,
        radius: 150 
    };

    const particleCount = 70; 
    const neonColor = '#0ff'; 
    const connectionColor = 'rgba(0, 255, 255, '; 

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Обробники подій для взаємодії з мишею
    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    canvas.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5; 
            this.speedY = Math.random() * 1 - 0.5;
            this.color = neonColor;
            this.baseSize = this.size; 
        }

        update() {
            // Рух та відбиття
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            
            // Взаємодія з мишею (відштовхування)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxForce = 5;
                    const force = (mouse.radius - distance) / mouse.radius; 
                    const directionX = forceDirectionX * force * -maxForce;
                    const directionY = forceDirectionY * force * -maxForce;

                    this.x += directionX * 0.5; 
                    this.y += directionY * 0.5;
                    
                    this.size = this.baseSize * (1 + force * 1.5); 
                } else {
                    this.size = this.baseSize; 
                }
            }
        }

        // Використання save/restore для ізоляції налаштувань тіні
        draw() {
            ctx.save(); 
            
            // Встановлюємо налаштування світіння
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color;
            
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore(); // Скидаємо тінь
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        // Гарантуємо, що лінії малюються без тіні
        ctx.shadowBlur = 0; 
        
        const distanceThreshold = 100;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) { 
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < distanceThreshold) {
                    const opacity = 1 - (distance / distanceThreshold);

                    ctx.strokeStyle = connectionColor + (opacity * 0.3) + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        connectParticles();

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles(); 
    });
    
    resizeCanvas();
    initParticles();
    animate();
});