const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1544945582-3b466d874eac?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Top Ocean View"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekescape</h2>
          <p>
            Weekescape it's your passport to curated, week-long getaways
            designed for the modern explorer. Whether you're a digital nomad
            seeking a change of scenery or someone craving a short but immersive
            vacation, WeekEscape has you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
