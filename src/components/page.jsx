import "./page.css";
import meditationImg from "../assets/images/medition.jpg";

function Page() {

  const handleSubmit = async (e) => {
  e.preventDefault();

  const name = e.target[0].value;
  const phone = e.target[1].value;

  await fetch("https://script.google.com/macros/s/AKfycbw4RA0OM0jdrXltD00Mx8SqfdqzevHCeNrQB8jI9yJHQS7u490B2-iIL1OBcSRbSqKVWA/exec", {
    method: "POST",
    body: JSON.stringify({
      name,
      phone
    })
  });

  alert("✅ Successfully Submitted!");
};

  const joinNow = () => {
    window.open("https://chat.whatsapp.com/YOURGROUPLINK");
  };

  return (
    <div className="main">

      {/* HERO */}
      <section className="hero">
        <h1>अपना सही Meditation Type खोजें</h1>

        <p>
          हर व्यक्ति के लिए meditation अलग होता है। इस 5 दिन के
          प्रोग्राम में आप जानेंगे कि आपके दिमाग और learning style
          के अनुसार कौन-सा meditation आपके लिए सबसे सही है।
        </p>

        <div className="batch">
         🌙 रात 8–9 बजे (Live Online Classes)
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="content">
          <div className="img-box"> <img src={meditationImg} alt="Meditation" /></div>

          <div>
            <h2>मेडिटेशन क्या होता है?</h2>

            <p>
              मेडिटेशन एक मानसिक अभ्यास है जिससे मन शांत होता है,
              तनाव कम होता है और ध्यान (Focus) बढ़ता है।
              यह हमें वर्तमान समय में जीना सिखाता है।
            </p>

            <p>
              रोज़ सिर्फ 15–20 मिनट meditation करने से
              anxiety कम होती है, नींद बेहतर होती है
              और जीवन में clarity आती है।
            </p>

            <p> Meditation (ध्यान) मन को शांत और एकाग्र करने की एक मानसिक प्रक्रिया है। 
            इसमें व्यक्ति अपनी सांस, विचार या किसी एक बिंदु पर ध्यान केंद्रित करता है। 
            ध्यान करने से तनाव कम होता है, मन शांत रहता है और एकाग्रता बढ़ती है।
            यह मानसिक और शारीरिक स्वास्थ्य दोनों के लिए लाभदायक है।
            नियमित ध्यान करने से सकारात्मक सोच विकसित होती है और व्यक्ति अंदर से संतुलित व खुश महसूस करता है।</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section bg-light">
        <h2 className="center">आपको क्या लाभ मिलेगा</h2>

        <div className="benefits">
          <div>😌 तनाव और चिंता कम</div>
          <div>🧠 ध्यान और याददाश्त बेहतर</div>
          <div>😴 अच्छी नींद</div>
          <div>⚡ ऊर्जा और productivity बढ़े</div>
          <div>💬 भावनात्मक संतुलन</div>
          <div>😊 सकारात्मक सोच</div>
        </div>
      </section>

      {/* TYPES */}
      <section className="section">
  <div className="section-inner">

    <h2 style={{textAlign:"center",color:"white",marginBottom:"40px"}}>
      हम कौन-कौन से Meditation सिखाएंगे
    </h2>

    <div className="cards">

      <div className="card">
        <div className="card-img">Mindfulness Image</div>
        <div className="card-body">
          <h3>Mindfulness Meditation</h3>
          <p>वर्तमान में रहना और overthinking को कम करना।</p>
        </div>
      </div>

      <div className="card">
        <div className="card-img">Breathing Image</div>
        <div className="card-body">
          <h3>Breathing Meditation</h3>
          <p>सांस पर ध्यान देकर तुरंत मन शांत करना।</p>
        </div>
      </div>

      <div className="card">
        <div className="card-img">Guided Image</div>
        <div className="card-body">
          <h3>Guided Meditation</h3>
          <p>Trainer के साथ live step-by-step meditation।</p>
        </div>
      </div>

      <div className="card">
        <div className="card-img">Visualization Image</div>
        <div className="card-body">
          <h3>Visualization Meditation</h3>
          <p>Mind imagination से deep relaxation।</p>
        </div>
      </div>

      <div className="card">
        <div className="card-img">Sound Meditation</div>
        <div className="card-body">
          <h3>Sound Meditation</h3>
          <p>ध्वनि और vibration के माध्यम से healing।</p>
        </div>
      </div>

      <div className="card">
        <div className="card-img">Personal Type Image</div>
        <div className="card-body">
          <h3>Personal Meditation Type</h3>
          <p>आपके learning style के अनुसार meditation।</p>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* FORM */}
      <section className="section form-area">
        <h2>अपनी सीट अभी बुक करें</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="आपका नाम" required />
          <input type="tel" placeholder="मोबाइल नंबर" required />

          <button type="submit">Submit करें</button>
        </form>
      </section>

      {/* FLOAT BUTTON */}
      <button className="join-btn" onClick={joinNow}>
        अभी Join करें ₹999
      </button>

    </div>
  );
}

export default Page;
