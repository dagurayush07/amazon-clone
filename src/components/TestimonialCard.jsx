function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <p className="quote">“{testimonial.quote}”</p>
      <div className="testimonial-author">
        <img src={testimonial.avatar} alt={testimonial.name} />
        <div>
          <strong>{testimonial.name}</strong>
          <span>{testimonial.role}</span>
        </div>
      </div>
    </article>
  );
}

export default TestimonialCard;
