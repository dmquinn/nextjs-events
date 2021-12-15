import { useRef, useContext } from "react";
import NotificationContext from "../../store/notifacationContext";

function NewsletterRegistration() {
  const emailRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  const registrationHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "registering for Newsletter",
      status: "pending",
    });
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
        notificationCtx.showNotification({
          title: "Success!",
          message: "registered for Newsletter",
          status: "success",
        });
      }
    } catch (error) {
      console.log(error);
      notificationCtx.showNotification({
        title: "Error",
        message: "Error - something went wrong!",
        status: "error",
      });
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
