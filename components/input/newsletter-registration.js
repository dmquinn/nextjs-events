import { useRef } from "react";

function NewsletterRegistration() {
  const emailRef = useRef();

  const registrationHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: enteredEmail }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        console.log("data", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
