import SectionHeader from '../SectionHeader.jsx';

import { clientReviews } from '../../constants/index.js';



const ClientAvatar = ({ item }) => {

  if (item.img) {

    return <img src={item.img} alt="" className="w-12 h-12 rounded-full object-cover" />;

  }



  return (

    <div

      className="w-12 h-12 rounded-full flex items-center justify-center bg-black-300 border border-black-200 text-white-800 text-sm font-semibold shrink-0"

      aria-hidden="true"

    >

      {item.avatar ?? item.name.charAt(0)}

    </div>

  );

};



const Clients = () => {

  return (

    <section className="c-space my-12 lg:my-16" id="clients">

      <SectionHeader

        title="Hear from My Clients"

        subtitle="Feedback from product teams and creators I've built for directly."

      />



      <div className="client-container">

        {clientReviews.map((item) => (

          <div key={`review-${item.id}`} className="client-review">

            <blockquote>

              <p className="text-white-800 font-light leading-relaxed">&ldquo;{item.review}&rdquo;</p>



              <footer className="client-content">

                <div className="flex gap-3 min-w-0">

                  <ClientAvatar item={item} />

                  <div className="flex flex-col min-w-0">

                    {item.href ? (

                      <a

                        href={item.href}

                        target="_blank"

                        rel="noreferrer"

                        className="font-semibold text-white-800 hover:text-white transition-colors truncate"

                      >

                        {item.name}

                      </a>

                    ) : (

                      <p className="font-semibold text-white-800 truncate">{item.name}</p>

                    )}

                    <p className="text-white-600 md:text-base text-sm font-light">{item.position}</p>

                  </div>

                </div>

              </footer>

            </blockquote>

          </div>

        ))}

      </div>

    </section>

  );

};



export default Clients;

