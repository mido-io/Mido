import { Mail } from "lucide-react";

const EnvelopeCard = () => {
  const email = "abdelhamidfarhat@outlook.com";

  const subject = encodeURIComponent("Portfolio inquiry");
  const mailto = `mailto:${email}?subject=${subject}`;

  return (
    <>
      <style>{`
        .wrapper {
          height: 350px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #010103;
        }

        .stage {
          position: relative;
          width: 340px;
          height: 230px;
        }

        .glow {
          position: absolute;
          inset: 30%;
          background: #8fb7ff;
          filter: blur(60px);
          opacity: 0.25;
          z-index: 0;
        }

        .envelope {
          position: absolute;
          inset: 0;
          margin-top: 50px;
          background: linear-gradient(145deg,#2d2d37,#19191f);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.1);
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: white;
          overflow: visible;
          cursor: pointer;
          z-index: 2;

          box-shadow:
            0 25px 50px rgba(0,0,0,.6),
            inset 0 1px 0 rgba(255,255,255,.08);

          animation: float 4s ease-in-out infinite;
          transition: transform .3s;
        }

        .envelope:hover {
          transform: translateY(-8px);
        }

        .envelope:active {
          transform: scale(.96);
        }

        /* Top flap */
        .envelope::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 50%;
          top: -50%;
          left: 0;

          background:
            linear-gradient(145deg,#3a3a46,#22222c);

          clip-path:
            polygon(50% 0,0 100%,100% 100%);

          transform-origin: bottom;
          transform:
            perspective(900px)
            rotateX(-160deg);

          transition:
            transform .55s cubic-bezier(.34,1.56,.64,1);
        }

        .letter {
          position: absolute;
          width: 85%;
          height: 80%;
          top: 10%;
          background: #101016;
          border-radius: 8px;
          border: 1px solid rgba(143,183,255,.25);

          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;

          color:#8fb7ff;
          font-weight:600;
          font-size:14px;
          text-align:center;

          transform: translateY(35px);
          opacity: 0;

          transition:
            transform .45s ease,
            opacity .35s ease;
        }

        .message {
          margin-bottom: 8px;
          color: white;
          font-size: 15px;
        }

        .icon {
          position: relative;
          z-index: 5;
          transition: all .35s ease;
        }

        .icon svg {
          width: 70px;
          height: 70px;
        }

        .envelope:hover .icon {
          transform:
            translateX(8px)
            rotate(-12deg)
            scale(1.12);

          color:#8fb7ff;
        }

        .envelope:hover::before {
          transform:
            perspective(900px)
            rotateX(0deg);
        }

        .envelope:hover .letter {
          transform: translateY(-120px);
          opacity: 1;
        }

        @keyframes float {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .envelope,
          .letter,
          .icon,
          .envelope::before {
            animation: none;
            transition: none;
          }

          .letter {
            opacity:1;
            transform:translateY(-120px);
          }
        }
      `}</style>



      <div className="wrapper">
        <div className="stage">
          <div className="glow"></div>

          <a
            href={mailto}
            className="envelope"
            aria-label={`Send email to ${email}`}
          >
            <div className="letter">
              <div className="message">
                Let's work together
              </div>

              {email}
            </div>

            <div className="icon">
              <Mail strokeWidth={1.5}/>
            </div>

          </a>
        </div>
      </div>
    </>
  );
};

export default EnvelopeCard;