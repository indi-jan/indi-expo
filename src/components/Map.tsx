export default function Map() {
    return (
      <div className="h-[400px] md:h-[500px] w-full bg-muted">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.685375333551!2d80.2223800758156!3d13.05581511258602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e744f43e6b%3A0x8f277133f972370e!2sAkbarabad%202nd%20St%2C%20Kodambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600024%2C%20India!5e0!3m2!1sen!2sus!4v1720490505193!5m2!1sen!2sus"
        ></iframe>
      </div>
    );
  }
  