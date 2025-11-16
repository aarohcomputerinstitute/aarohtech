export default function LocationMap() {
  return (
    <section className="wrapper bg-light">
      <div className="container py-2">
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h2 className="display-4 mb-1">Our Location</h2>
            <p className="lead mb-0">Visit us at our office</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.426872143025!2d75.70007137427538!3d26.953378158343966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d8c9912f30b%3A0x5bc275d88a81512c!2sAAROH%20TECH%20%26%20AI%20INSTITUTE%20-JAIPUR!5e0!3m2!1sen!2sin!4v1763298954257!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
