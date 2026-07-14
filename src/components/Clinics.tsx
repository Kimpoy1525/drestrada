const CLINICS = [
  {
    city: 'Camiling, Tarlac',
    name: 'Señor Sto. Niño Hospital, Inc.',
    address: 'P. Burgos St., Poblacion B, Camiling, Tarlac',
    mapQuery: 'Señor Sto. Niño Hospital Inc. P. Burgos St. Camiling Tarlac',
    schedule: [
      ['Monday', '9:00 AM – 12:00 NN'],
      ['Thursday', '9:00 AM – 4:00 PM'],
      ['Friday', '9:00 AM – 12:00 NN'],
    ],
  },
  {
    city: 'Bayambang, Pangasinan',
    name: 'Nuestro Señor Santo Niño Hospital',
    address: 'Juan Luna St., Poblacion Sur, Bayambang, Pangasinan',
    mapQuery: 'Nuestro Señor Santo Niño Hospital Juan Luna St Bayambang Pangasinan',
    schedule: [
      ['Monday', '1:00 PM – 5:00 PM'],
      ['Tuesday', '9:00 AM – 5:00 PM'],
      ['Wednesday', '9:00 AM – 12:00 NN'],
    ],
  },
] as const;

export default function Clinics() {
  return (
    <section id="clinics" className="section clinics">
      <div className="container">
        <div className="clinics__heading">
          <div>
            <div className="eyebrow"><span /> Clinic schedule</div>
            <h2>Find a clinic<br /><em>near you.</em></h2>
          </div>
          <p>Dr. Estrada receives patients at two hospital locations. Choose the location and schedule most convenient for you.</p>
        </div>
        <div className="clinics__list">
          {CLINICS.map((clinic, index) => {
            const query = encodeURIComponent(clinic.mapQuery);
            return (
              <article className="clinic-card" key={clinic.name}>
                <div className="clinic-card__info">
                  <div className="clinic-card__index">0{index + 1}</div>
                  <p className="clinic-card__city">{clinic.city}</p>
                  <h3>{clinic.name}</h3>
                  <p className="clinic-card__address"><span>⌖</span>{clinic.address}</p>
                  <div className="clinic-card__schedule">
                    {clinic.schedule.map(([day, time]) => <div key={day}><strong>{day}</strong><span>{time}</span></div>)}
                  </div>
                  <a className="clinic-card__directions" href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noreferrer">Get directions <span>↗</span></a>
                </div>
                <div className="clinic-card__map">
                  <iframe title={`Map of ${clinic.name}`} src={`https://www.google.com/maps?q=${query}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </article>
            );
          })}
        </div>
        <p className="clinics__notice"><span>i</span> Clinic schedules may change. Please message the doctor to confirm availability before visiting.</p>
      </div>
    </section>
  );
}
